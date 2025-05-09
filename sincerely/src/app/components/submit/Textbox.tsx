'use client';

import { useAddEntry } from "@/app/hooks/useAddEntry";

const Textbox = () => {
    
    const { entry, setEntry, handleAddEntry } = useAddEntry();

        return (
            <div className=""> 
                <textarea 
                    value={entry} 
                    onChange={(e) => setEntry(e.target.value)} 
                    className="w-full border p-4"
                    rows={4}
                    placeholder="I've always wanted to ask..."
                />
                <button 
                    onClick={handleAddEntry}
                    disabled={!entry.trim()}
                    className="m-2 bg-green-500 hover:bg-green-600 text-white"
                >
                    Submit
                </button>
            </div>
        );
};

export default Textbox;