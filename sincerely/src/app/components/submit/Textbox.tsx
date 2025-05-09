'use client';
import SendButton from "./SendButton";
import { useAddEntry } from "@/app/hooks/useAddEntry";

const Textbox = () => {
    const { entry, setEntry, handleAddEntry } = useAddEntry();

    return (
        <div className="w-[600px] h-[400px] bg-neutral-400/25 rounded-[10px] outline outline-[5px] outline-neutral-300 p-4 flex flex-col justify-start space-y-4">
            {/* Header */}
            <div className="flex items-center space-x-3">
                <img src="/plane.svg" alt="Plane Icon" className="w-6 h-6" />
                <p className="text-zinc-400 text-md font-['Chivo_Mono']">I’ve always wanted to ask...</p>
            </div>

            {/* Input Area */}
            <div className="relative flex-1">
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