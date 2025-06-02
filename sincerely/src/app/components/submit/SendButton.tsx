'use client';
import React from "react";
import { useState } from "react";
import { MouseEventHandler } from "react";

interface SendButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const SendButton: React.FC<SendButtonProps> = ({ onClick }) => {
    const [sent, setSent] = useState(false);

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (onClick) onClick(e);
        setSent(true);
        setTimeout(() => setSent(false), 2000); // Show "message sent!" for 2 seconds
    };

    if (sent) {
        return (
            <div className="text-green-600 text-sm font-mono italic">
                message sent!
            </div>
        );
    }

    return (
        <button
            onClick={handleClick}
            className="flex items-center space-x-2 px-1 py-1 sm:px-3 sm:py-1.5 bg-sincerely-green-send-it hover:bg-sincerely-green-send-it-hover text-white text-xs sm:text-sm rounded-md shadow transition duration-200">
            <img src="/plane-white.svg" alt="Send Icon" className="w-4 h-4 fill-white" />
            <span>send it</span>
        </button>
    );
};

export default SendButton;