'use client';
import { useEffect, useRef } from "react";
import Image from "next/image";

import SendButton from "./SendButton";
import Frame from "./Frame";
import Tag from "@/app/components/entries/Tag"
import PreviewImage from "./PreviewImage";

import { UseAddEntryReturn } from "@/app/hooks/useAddEntry";
import { UploadImageHook } from "@/app/hooks/uploadImage";
import { tags } from "@/app/data/tags"

interface TextboxProps {
    upload: UploadImageHook,
    entryHook: UseAddEntryReturn
}

const Textbox = ({upload, entryHook}: TextboxProps) => {
    const { entry, setEntry, handleAddEntry, selectedTags, setSelectedTags} = entryHook;
    const { previewUrl, handleUpload, fileName, setPreviewUrl } = upload;
    const textBoxRef = useRef<HTMLDivElement>(null);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

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

    useEffect(() => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = "auto"
            textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
        }

    }, [entry])
    
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
    
    const handleClick = async () => {

        await handleUpload();
        handleAddEntry(fileName);
        setPreviewUrl("");

    }

    return (
        <div
            ref={textBoxRef}
            className="relative w-full bg-sincerely-grey-frame border-2 border-sincerely-grey-frame-border rounded-sm p-1 shadow-md flex flex-col space-y-1 justify-between"
        >
            <Frame />
            <textarea
                    value={entry}
                    onChange={(e) => setEntry(e.target.value)}
                    className="w-full h-full resize-none rounded-md bg-white px-4 py-8 border border-sincerely-grey-inside-border text-zinc-500 placeholder:text-zinc-400 placeholder:italic focus:outline-none"
                    placeholder=""
                />
                <div className="absolute top-15 right-4 text-gray-400">
                        {entry.length} / 2000
                    </div>   
            <div className="grid grid-cols-2 sm:grid-cols-[4fr_1fr]">
                <div className="flex space-x-1">
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
                <div className="flex-column items-center w-full h-full rounded-[10px] bg-white p-4 border border-neutral-300 overflow-y-scroll max-h-[400px]">
                    <textarea
                        value={entry}
                        onChange={(e) => setEntry(e.target.value)}
                        maxLength={2000}
                        className=" w-full text-zinc-500 font-mono placeholder:text-zinc-400 placeholder:italic focus:outline-none resize-none"
                        placeholder=""
                        ref={textAreaRef}
                    />
                    {/* <Image 
                        src = {previewUrl || "plane.svg"}
                        alt = "plane.svg"
                        width={300}
                        height = {300}
                        className="m-auto left-0 right-0"
                    /> */}
                    {(previewUrl != "") && <PreviewImage previewUrl={previewUrl} setPreviewUrl={setPreviewUrl}/>}
                </div>
                <div className="absolute bottom-4 right-4">
                    <SendButton onClick={handleClick} />
                </div>
                <div className="absolute bottom-4 left-4 text-xs text-gray-500">
                    {entry.length} / 2000
                </div>

            </div>
        </div>
    );
};

export default Textbox;