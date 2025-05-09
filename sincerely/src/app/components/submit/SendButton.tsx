"use client";

import { useState } from 'react';

const SendButton = () => {
    const [sent, setSent] = useState(false);

    return (
        <div>
            {!sent ? (
                <button onClick={() => setSent(true)} className="scale-30">
                    <img src="/send_button.png" alt="Send Button" className="w-full h-full" />
                </button>
            ) : (
                <span>Message sent</span>
            )}
        </div>
    );
};

export default SendButton;