import { useState } from "react";

interface TagProps {
    text: string;
    color: string;
    hover: string; 
    onClick?: () => void;

    selected: boolean;
};


const Tag = ({text, color, hover, onClick, selected}: TagProps) => {

    const handleClick = () => {
        onClick?.();
    }

    const bg = color;
    const hoverbg = `hover:${hover}`;
    const newText = selected ? text + '*' : text;

    return (
        <div> 
            <button 
                onClick={handleClick}
                className={`cursor-pointer text-white font-semibold py-2 px-4 rounded ${bg} ${hoverbg}`}

            >
                { newText }
            </button>
        </div>
    );
};

export default Tag;