'use client'

import Entry from "@/app/components/entries/Entry";
import { useAddEntry } from "@/app/hooks/useAddEntry";
import TagBar from "./TagBar";

const EntriesGrid = () => {
    const { entries } = useAddEntry();

    return (
        <div>
            <div className="flex mb-6">
                <TagBar />
            </div>
            
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6"> 
                {entries.map((entry) => (
                    <Entry 
                        key={entry.id}
                        id={entry.id}
                        text={entry.text}
                        timestamp={entry.timestamp}
                        imageUrl={entry.imageUrl}
                    />
                ))}
            </div>
        </div>
        
    );
};

export default EntriesGrid;