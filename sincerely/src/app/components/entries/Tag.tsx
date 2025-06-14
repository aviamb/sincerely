import React from "react";

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
                className={`cursor-pointer text-white text-xs sm:text-sm md:text-md font-semibold py-1 px-2 sm:py-2 sm:px-4 rounded ${bg} ${hoverbg}`}

            >
                { newText }
            </button>
        </div>
    );
};

export default Tag;