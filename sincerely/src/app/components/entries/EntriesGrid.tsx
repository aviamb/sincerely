'use client'

import React from "react";
import Entry from "@/app/components/entries/Entry";
import { useAddEntry } from "@/app/hooks/useAddEntry";
import TagBar from "./TagBar";

const EntriesGrid = () => {
    const { entries, selectedTags, setSelectedTags } = useAddEntry();

    //tag selection logic
    const handleTagSelect = (tag: string) => {
        setSelectedTags(prev => 
            prev.includes(tag) 
                ? prev.filter(t => t !== tag) 
                : [...prev, tag]
        );
    };

    //tag-filtered entries 
   const filteredEntries = selectedTags.length > 0
        ? entries.filter(entry => {
            return entry.tags?.some(tag => selectedTags.includes(tag)) || false;
        })
        : entries;

    return (
        <div>
            <div className="flex mb-6">
                <TagBar 
                    selectedTags={selectedTags} 
                    onTagSelect={handleTagSelect} 
                />
            </div>
            
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6"> 
                {filteredEntries.map((entry) => (
                    <Entry 
                        key={entry.id}
                        id={entry.id}
                        text={entry.text}
                        timestamp={
                        entry.timestamp
                            ? entry.timestamp.toDate().toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                            })
                            : ""
                        }
                        imageUrl={entry.imageUrl}
                        tags={entry.tags}
                     />
                ))}
            </div>
        </div>
        
    );
};

export default EntriesGrid;