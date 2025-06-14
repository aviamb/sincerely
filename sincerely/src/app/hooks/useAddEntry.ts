'use client';

import { useState, useEffect } from "react";
import { db } from "../../../lib/firebase";
import {collection, addDoc, query, orderBy, serverTimestamp, Timestamp, onSnapshot} from 'firebase/firestore';

interface Entry {
    id: string;
    text: string;
    timestamp: Timestamp | null;
    tags?: string[];
    imageUrl?: string;
}

export interface UseAddEntryReturn {
    entry: string;
    setEntry: React.Dispatch<React.SetStateAction<string>>;
    handleAddEntry: (imageUrl?: string) => Promise<void>;
    entries: Entry[];
    selectedTags: string[];
    setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
  };

export const useAddEntry = (): UseAddEntryReturn => {
    const [entry, setEntry] = useState("");
    const [entries, setEntries] = useState<Entry[]>([]);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    // const isValidImageUrl = (url?: string): url is string => {
    //     return !!url && (url.startsWith('http') || url.startsWith('/'));
    // };


    useEffect(() => {
        const q = query(collection(db,'entries'), orderBy('timestamp','desc'));
        
        const f = onSnapshot(q, (querySnapshot) => {
            const entriesData = querySnapshot.docs.map(doc => {
                const data = doc.data();
                return {
                    id: doc.id,
                    text:data.entry,
                    timestamp:data.timestamp || null,
                    tags: data.tags || [],
                    imageUrl: data.imageUrl || undefined
                };
            });
            setEntries(entriesData);
        });
        return () => f();
    },[]);

    const handleAddEntry = async (imageUrl?: string) => {
    if (!entry.trim()) return;

    try {
        await addDoc(collection(db, 'entries'), {
            entry: entry,
            timestamp: serverTimestamp(),
            tags: selectedTags,
            imageUrl: imageUrl || null 
        });
        setEntry('');
        setSelectedTags([]);
    } catch (e) {
        console.error('Error adding entry: ', e);
    }
};

    return {
        entry, 
        setEntry, 
        handleAddEntry, 
        entries, 
        selectedTags, 
        setSelectedTags,
    };
}

