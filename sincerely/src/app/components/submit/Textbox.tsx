'use client';
import SendButton from "./SendButton";
import Frame from "./Frame";
import { useAddEntry } from "@/app/hooks/useAddEntry";
import Tag from "@/app/components/entries/Tag"
import { tags } from "@/app/data/tags"

const Textbox = () => {
    const { entry, setEntry, handleAddEntry, selectedTags, setSelectedTags } = useAddEntry();

    const handleTags = (text: string) => {

        if (!selectedTags.includes(text)) {
            setSelectedTags([...selectedTags, text]);
            console.log("tag added");
            }

    }

    return (
        <div className="w-[600px] h-[400px] bg-neutral-400/25 rounded-[10px] outline outline-[5px] outline-neutral-300 p-4 flex flex-col justify-start space-y-4">
            {/* Header */}
            <Frame />
            {/* Input Area */}
            <div className="relative flex-1">
                <div className="scale-75 flex justify-center flex-row">
                    {tags.map(({ text, color, hover}, index) => (
                        <Tag 
                            text={text}
                            color={color}
                            hover={hover}
                            key={index}
                            onClick = {() => handleTags(text)}
                        />
                    ))}
                </div>
                <textarea
                    value={entry}
                    onChange={(e) => setEntry(e.target.value)}
                    className="w-full h-full resize-none rounded-[10px] bg-white p-4 border border-neutral-300 text-zinc-500 font-mono placeholder:text-zinc-400 placeholder:italic focus:outline-none"
                    placeholder=""
                />
                <div className="absolute bottom-4 right-4">
                    <SendButton onClick={handleAddEntry} />
                </div>
            </div>
        </div>
    );
};

export default Textbox;