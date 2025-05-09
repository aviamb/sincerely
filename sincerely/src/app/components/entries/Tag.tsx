interface TagProps {
    text: string;
    color: string;
    hover: string;
};

const Tag = ({text, color, hover}: TagProps) => {
    const bg = `bg-${color}`;
    const hoverbg = `bg-${hover}`

    return (
        <div> 
            <button className={`text-white font-semibold py-2 px-4 rounded ${bg} hover:${hoverbg}`}>
                { text }
            </button>
        </div>
    );
};

export default Tag;