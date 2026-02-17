import os
from typing import List, Dict
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from dotenv import load_dotenv
from mailersend import MailerSendClient, EmailBuilder

# Load environment variables
load_dotenv()

app = FastAPI()

# Configure CORS
origins = [
    "http://localhost:5173",  # Vite default
    "http://localhost:3000",  # Common React port
    # Add your production domain here
    "https://datamatically.com/",
    "*", 
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    phone: str = ""
    message: str

def get_recipients() -> List[Dict[str, str]]:
    # Prefer TO_EMAILS (comma-separated), fallback to TO_EMAIL (single)
    raw = (os.getenv("TO_EMAILS") or os.getenv("TO_EMAIL") or "").strip()
    if not raw:
        raise ValueError("Missing TO_EMAILS or TO_EMAIL")

    parts = [p.strip() for p in raw.replace(";", ",").replace("\n", ",").split(",") if p.strip()]

    # de-dupe (preserve order)
    seen = set()
    recipients = []
    for e in parts:
        k = e.lower()
        if k not in seen:
            seen.add(k)
            recipients.append({"email": e})
    return recipients

@app.post("/contact")
def contact(data: ContactForm):
    from_email_addr = (os.getenv("FROM_EMAIL") or "").strip()

    missing = []
    # MailerSendClient() requires MAILERSEND_API_KEY env var
    if not (os.getenv("MAILERSEND_API_KEY") or "").strip():
        missing.append("MAILERSEND_API_KEY")
    if not from_email_addr:
        missing.append("FROM_EMAIL")

    try:
        recipients = get_recipients()
    except ValueError:
        missing.append("TO_EMAILS or TO_EMAIL")

    if missing:
        raise HTTPException(500, f"Server config error. Missing: {', '.join(missing)}")

    try:
        # ✅ Uses MAILERSEND_API_KEY from environment automatically
        ms = MailerSendClient()

        email = (
            EmailBuilder()
            .from_email(from_email_addr, "Website Contact")
            .to_many(recipients)
            .reply_to(data.email, data.name)  # click Reply -> goes to client
            .subject(f"New message from {data.name}")
            .html(
                f"<p><b>Name:</b> {data.name}</p>"
                f"<p><b>Email:</b> {data.email}</p>"
                f"<p><b>Phone:</b> {data.phone or 'Not provided'}</p>"
                f"<p><b>Message:</b><br/>{data.message}</p>"
            )
            .text(f"Name: {data.name}\nEmail: {data.email}\nPhone: {data.phone or 'Not provided'}\n\n{data.message}")
            .build()
        )

        response = ms.emails.send(email)
        return {
            "status": "sent",
            "message_id": getattr(response, "message_id", None),
            "provider_status": getattr(response, "status_code", None),
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to send email: {str(e)}")

@app.get("/")
def read_root():
    return {"message": "Contact Form API is running"}



# from mailersend import MailerSendClient, EmailBuilder

# ms = MailerSendClient()

# email = (EmailBuilder()
#          .from_email("mohammed@datamatically.com", "Mohammed")
#          .to_many([{"email": "mohammed@datamatically.com", "name": "Ghouse"}])
#          .subject("Hello from MailerSend!")
#          .html("Hello World!")
#          .text("Hello World!")
#          .build())

# response = ms.emails.send(email)
# print(f"Email sent: {response.message_id}")