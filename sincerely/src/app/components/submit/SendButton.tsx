'use client';
import { MouseEventHandler } from "react";

interface SendButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const SendButton: React.FC<SendButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="flex items-center space-x-2 px-3 py-1.5 bg-green-200 hover:bg-green-300 text-green-900 text-sm font-mono rounded-md shadow transition duration-200"
            >
            <img src="/plane.svg" alt="Send Icon" className="w-4 h-4" />
            <span>send it</span>
        </button>
    );
};

export default SendButton;