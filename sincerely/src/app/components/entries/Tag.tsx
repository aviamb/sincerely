import { useState } from "react";

interface TagProps {
    text: string;
    color: string;
    hover: string; 
    onClick?: () => void;
};


const Tag = ({text, color, hover, onClick}: TagProps) => {

    const handleClick = () => {
        onClick?.();
        setSelected(!selected);
    }

    const [selected, setSelected] = useState(false);

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