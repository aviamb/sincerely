import { useState } from "react";

interface TagProps {
    text: string;
    color: string;
    hover: string; 
    onClick?: () => void;
};


const Tag = ({text, color, hover, onClick}: TagProps) => {
    
    //const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const bg = `bg-${color}`;
    const hoverbg = `bg-${hover}`
    //const tagText = text;

    // const handleTags = (string: typeof text) => {

    //     if (!selectedTags.includes(text)) {
    //         setSelectedTags([...selectedTags, text]);
    //         console.log("tag added");
    //         }

    // }

    return (
        <div> 
            <button 
                onClick={onClick}
                className={`text-black font-semibold py-2 px-4 rounded ${bg} hover:${hoverbg}`}

            >
                { text }
            </button>
        </div>
    );
};

export default Tag;