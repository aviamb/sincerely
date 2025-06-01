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
    const editableRef = useRef<HTMLDivElement>(null);


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
     
        resizeTextBox();
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
            setSelectedTags(newArray); 
            console.log("tag removed");
        }

    }
    
   const handleClick = async () => {
    const imageUrl = await handleUpload(); 
    await handleAddEntry(imageUrl); 
    setPreviewUrl("");
}

    return (
        
        <div 
            ref={textBoxRef}
            className="relative w-1/2 bg-sincerely-grey-frame border-2 border-sincerely-grey-frame-border rounded-sm p-1 shadow-md flex flex-col space-y-1 justify-between"
        >
            <Frame />
            <div className="absolute top-15 right-4 text-gray-400">
                {entry.length} / 2000
            </div>  
            <textarea
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
                className="w-full h-full resize-none rounded-md bg-white px-4 py-8 border border-sincerely-grey-inside-border text-zinc-500 placeholder:text-zinc-400 placeholder:italic focus:outline-none"
                placeholder=""
                maxLength={2000}
            />
            {(previewUrl != "") && <PreviewImage previewUrl={previewUrl} setPreviewUrl={setPreviewUrl}/>}
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
                
                <div className="absolute bottom-1 right-1">
                    <SendButton onClick={handleClick} />
                </div>

            </div>
                </div>
    );
};

export default Textbox;