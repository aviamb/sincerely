'use client';


import SendButton from "./SendButton";
import Frame from "./Frame";
import Tag from "@/app/components/entries/Tag";
import PreviewImage from "./PreviewImage";

import { UseAddEntryReturn } from "@/app/hooks/useAddEntry";
import { UploadImageHook } from "@/app/hooks/uploadImage";
import { tags } from "@/app/data/tags";

interface TextboxProps {
  upload: UploadImageHook;
  entryHook: UseAddEntryReturn;
}

const Textbox = ({ upload, entryHook }: TextboxProps) => {
  const { entry, setEntry, handleAddEntry, selectedTags, setSelectedTags } = entryHook;
  const { previewUrl, handleUpload, setPreviewUrl } = upload;

  const handleTags = (text: string) => {
    if (!selectedTags.includes(text)) {
      setSelectedTags([...selectedTags, text]);
    } else {
      setSelectedTags(selectedTags.filter(tag => tag !== text));
    }
  };

  const handleClick = async () => {
    const imageUrl = await handleUpload();
    await handleAddEntry(imageUrl ?? undefined);
    setPreviewUrl("");
  };

  return (
    <div
      className="
        bg-sincerely-grey-frame
        border-2 border-sincerely-grey-frame-border
        rounded-sm p-2 shadow-md
        flex flex-col justify-between
        w-[320px] h-[540px] lg:w-[600px] lg:h-[450px] 
        relative
      "
    >
      <Frame />
      <div className="absolute top-16 right-6 text-gray-400 text-xs">
        {entry.length} / 2000
      </div>

      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        className="w-full h-full resize-none rounded-md bg-white px-4 py-8 border border-sincerely-grey-inside-border text-zinc-500 placeholder:text-zinc-400 placeholder:italic focus:outline-none"
        placeholder=""
        maxLength={2000}
      />

      {previewUrl && (
        <PreviewImage previewUrl={previewUrl} setPreviewUrl={setPreviewUrl} />
      )}

      <div className="mt-2 flex flex-col md:flex-row md:items-end md:justify-between">
        <div className="flex flex-wrap gap-2">
          {tags.map(({ text, color, hover }) => (
            <Tag
              key={`${text}-${selectedTags.includes(text)}`}
              text={text}
              color={color}
              hover={hover}
              onClick={() => handleTags(text)}
              selected={selectedTags.includes(text)}
            />
          ))}
        </div>
        <div className="mt-2 md:mt-0">
          <SendButton onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default Textbox;
