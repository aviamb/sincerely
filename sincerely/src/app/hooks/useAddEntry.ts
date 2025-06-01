'use client';

import { useState, useEffect } from "react";
import { db } from "../../../lib/firebase";
import {collection, addDoc, query, orderBy, serverTimestamp, Timestamp, onSnapshot} from 'firebase/firestore';

interface Entry {
    id: string;
    text: string;
    timestamp: Timestamp | null;
    tags?: string[];
}

type UseAddEntryReturn = {
    entry: string;
    setEntry: React.Dispatch<React.SetStateAction<string>>;
    handleAddEntry: () => Promise<void>;
    entries: Entry[];
    selectedTags: string[];
    setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
  };

export const useAddEntry = (): UseAddEntryReturn => {
    const [entry, setEntry] = useState('');
    const [entries, setEntries] = useState<Entry[]>([]);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    useEffect(() => {
        const q = query(collection(db,'entries'), orderBy('timestamp','desc'));
        
        const f = onSnapshot(q, (querySnapshot) => {
            const entriesData = querySnapshot.docs.map(doc => {
                const data = doc.data();
                return {
                    id: doc.id,
                    text:data.entry,
                    timestamp:data.timestamp || null,
                    tags: data.tags || []
                };
            });
            setEntries(entriesData);
        });
        return () => f();
    },[]);

    const handleAddEntry = async () => {
        setSelectedTags([]);
        if (!entry.trim()) return;

        try {
            await addDoc(collection(db, 'entries'), {
                entry: entry,
                timestamp: serverTimestamp(),
                tags: selectedTags
            });
            setEntry('');
            setSelectedTags([]);
        } catch (e) {
            console.error('error adding entry: ', e);
        }
        
    };

    return {
        entry, 
        setEntry, 
        handleAddEntry, 
        entries, 
        selectedTags, 
        setSelectedTags
    };
}

