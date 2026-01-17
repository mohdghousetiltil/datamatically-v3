
import React from 'react';

const Logo: React.FC = () => (
    <div className="w-8 h-8 relative group-hover:scale-110 transition-transform duration-300">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect x="8" y="6" width="6" height="28" rx="3" className="fill-blue-500 dark:fill-blue-500" />
            <path d="M20 6H24C28.4183 6 32 9.58172 32 14V26C32 30.4183 28.4183 34 24 34H20V6Z" className="fill-purple-600 dark:fill-purple-600" fillOpacity="0.8"/>
            <circle cx="20" cy="20" r="3" className="fill-white dark:fill-white animate-pulse" />
        </svg>
    </div>
);

export default Logo;
