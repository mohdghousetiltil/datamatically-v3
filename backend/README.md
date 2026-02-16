# Backend Setup

## Requirements
- Python 3.8+
- MailerSend Account

## Setup

1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```

2.  Create a virtual environment (optional but recommended):
    ```bash
    python -m uvicorn backend.main:app --host 127.0.0.1 --port 8000
    # On Windows:
    venv\Scripts\activate
    # On Mac/Linux:
    source venv/bin/activate
    ```

3.  Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

4.  Create a `.env` file based on `.env.example` and fill in your MailerSend details:
    ```bash
    cp .env.example .env
    ```
    You will need a **verified sender domain** in MailerSend.

## Running

Start the server:
```bash
python -m uvicorn main:app --reload
```
or
```bash
uvicorn main:app --reload
```

The API will be available at `http://localhost:8000`.
