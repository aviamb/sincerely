'use client'

import Entry from "@/app/components/entries/Entry";
import { useAddEntry } from "@/app/hooks/useAddEntry";

const EntriesGrid = () => {
    const { entries } = useAddEntry();

    return (
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
    );
};

export default EntriesGrid;