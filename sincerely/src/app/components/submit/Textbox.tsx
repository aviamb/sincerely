'use client';

import { useAddEntry } from "@/app/hooks/useAddEntry";

const Textbox = () => {
    
    const { entry, setEntry, handleAddEntry } = useAddEntry();

        return (
            <div className=""> 
                <textarea value={entry} onChange={(e) => setEntry(e.target.value)} />
                <button onClick={handleAddEntry}>Submit</button>
            </div>
        );
};

export default Textbox;