'use client'

import Entry from "@/app/components/entries/Entry";
import { useAddEntry } from "@/app/hooks/useAddEntry";
import TagBar from "./TagBar";

const EntriesGrid = () => {
    const { entries } = useAddEntry();

    return (
        <div>
            <div className="flex justify-end mb-15">
                <TagBar />
            </div>
            
            <div className="w-full grid grid-cols-4 gap-4"> 
                {entries.map((entry) => (
                    <Entry 
                        key={entry.id}
                        id={entry.id}
                        text={entry.text}
                        timestamp={entry.timestamp}
                    />
                ))}
            </div>
        </div>
        
    );
};

export default EntriesGrid;