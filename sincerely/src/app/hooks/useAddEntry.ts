'use client';

import { useState } from "react";
import { db } from "../../../lib/firebase";
import {collection, addDoc} from 'firebase/firestore';

type UseAddEntryReturn = {
    entry: string;
    setEntry: React.Dispatch<React.SetStateAction<string>>;
    handleAddEntry: () => Promise<void>;
  };

export const useAddEntry = (): UseAddEntryReturn => {
    const [entry, setEntry] = useState('');
    
    const handleAddEntry = async () => {
        try {
            const docRef = await addDoc(collection(db, 'entries'), {
                entry,
                createdAt: new Date()
            });
            console.log('entry added with ID: ', docRef.id);
        } catch (e) {
            console.error('error adding entry: ', e);
        }
        
    };

    return {entry, setEntry, handleAddEntry};
}

