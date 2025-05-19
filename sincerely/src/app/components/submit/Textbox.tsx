'use client';
import { useEffect, useRef } from "react";
import SendButton from "./SendButton";
import Frame from "./Frame";
import { useAddEntry } from "@/app/hooks/useAddEntry";
import Tag from "@/app/components/entries/Tag"
import { tags } from "@/app/data/tags"

const Textbox = () => {
    const { entry, setEntry, handleAddEntry } = useAddEntry();
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

    return (
        <div
            ref={textBoxRef}
            className="w-[700px] h-[550px] bg-neutral-100 border-2 border-neutral-300 rounded-md p-2 shadow-md flex flex-col space-y-2 justify-between"
        >
            {/* Header */}
            <Frame />
            {/* Input Area */}
            <div className="relative flex-1">
                <div className="absolute bottom-1 right-120 left-1 flex flex-row space-x-1 scale-75 ml-2">
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
                    maxLength={2000}
                    className="w-full h-full resize-none rounded-[10px] bg-white p-4 border border-neutral-300 text-zinc-500 font-mono placeholder:text-zinc-400 placeholder:italic focus:outline-none"
                    placeholder=""
                />
                <div className="absolute bottom-4 right-4">
                    <SendButton onClick={handleAddEntry} />
                </div>
                <div className="absolute bottom-4 left-4 text-xs text-gray-500">
                    {entry.length} / 2000
                </div>
            </div>
        </div>
    );
};

export default Textbox;