import Tag from "@/app/components/entries/Tag"
import { tags } from "@/app/data/tags"

const TagBar = () => {
    return (
        <div className="border-2 w-120 rounded-4xl border-gray-300">
            <div className="flex justify-center gap-4 flex-row p-2"> 
                {tags.map(({ text, color, hover}, index) => (
                    <Tag 
                        text={text}
                        color={color}
                        hover={hover}
                        key={index}
                    />
                ))}
            </div>
        </div>
        
    );
};

export default TagBar;