'use client';
import { useEffect, useRef } from "react";
import SendButton from "./SendButton";
import Frame from "./Frame";
import { useAddEntry } from "@/app/hooks/useAddEntry";
import Tag from "@/app/components/entries/Tag"
import { tags } from "@/app/data/tags"

const Textbox = () => {
    const { entry, setEntry, handleAddEntry, selectedTags, setSelectedTags } = useAddEntry();
    const textBoxRef = useRef<HTMLDivElement>(null);

    // Resize handler
    useEffect(() => {
        const resizeTextBox = () => {
            const windowWidth = window.innerWidth;
            const newHeight = Math.min(500, (2000 - windowWidth) * 1.0);
            const newWidth = Math.min(800, 600 + (windowWidth - 1200) * 0.1);
            if (textBoxRef.current) {
                textBoxRef.current.style.height = `${newHeight}px`;
                textBoxRef.current.style.width = `${newWidth}px`;
            }
        };

        resizeTextBox(); // Initial resize on mount
        window.addEventListener("resize", resizeTextBox);
        return () => window.removeEventListener("resize", resizeTextBox);
    }, []);


    // Resize handler
    useEffect(() => {
        const resizeTextBox = () => {
            const windowWidth = window.innerWidth;
            const newHeight = Math.min(500, (2000 - windowWidth) * 1.0);
            const newWidth = Math.min(800, 600 + (windowWidth - 1200) * 0.1);
            if (textBoxRef.current) {
                textBoxRef.current.style.height = `${newHeight}px`;
                textBoxRef.current.style.width = `${newWidth}px`;
            }
        };
     
        resizeTextBox(); // Initial resize on mount
        window.addEventListener("resize", resizeTextBox);
        return () => window.removeEventListener("resize", resizeTextBox);
    }, []);
    
  //add or remove tags from the selected tags array
    const handleTags = (text: string) => {

        if (!selectedTags.includes(text)) {
            setSelectedTags([...selectedTags, text]);
            console.log("tag added");
        }
        else {
            const newArray = selectedTags.filter((item, index) => item !== text);
            setSelectedTags(newArray); // Updates the state with the new array
            console.log("tag removed");
        }

    }
    
    return (
        <div
            ref={textBoxRef}
            className="w-[700px] h-[550px] bg-sincerely-grey-frame border-2 border-sincerely-grey-frame-border rounded-sm p-1 shadow-md flex flex-col space-y-1 justify-between"

        >
            {/* Header */}
            <Frame />
            {/* Input Area */}
            <div className="relative flex-1">
                <div className="absolute bottom-[5px] right-[1000px] left-[0px] flex flex-row space-x-1 scale-85 ml-2">
                    {tags.map(({ text, color, hover}, index) => (
                        <Tag 
                            text={text}
                            color={color}
                            hover={hover}
                            key={`${text}-${selectedTags.includes(text)}`}
                            onClick = {() => handleTags(text)}
                            selected = {selectedTags.includes(text)}
                        />
                    ))}
                </div>
                <textarea
                    value={entry}
                    onChange={(e) => setEntry(e.target.value)}
                    maxLength={2000}
                    className="w-full h-full resize-none rounded-md bg-white p-4 border border-sincerely-grey-inside-border text-zinc-500 font-mono placeholder:text-zinc-400 placeholder:italic focus:outline-none"
                    placeholder=""
                />
                <div className="flex flex-row">
                    <div className="absolute bottom-2 right-2">
                        <SendButton onClick={handleAddEntry} />
                    </div>
                    <div className="absolute bottom-[48px] left-[555px] text-xs text-gray-500">
                        {entry.length} / 2000
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Textbox;