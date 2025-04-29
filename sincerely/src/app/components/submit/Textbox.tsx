'use client';

import { useState } from "react";
import { db } from "../../../../lib/firebase";
import {collection, addDoc, DocumentReference} from 'firebase/firestore';

const Textbox = () => {
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
    
        return (
            <div className=""> 
                <textarea value={entry} onChange={(e) => setEntry(e.target.value)} />
                <button onClick={handleAddEntry}>Submit</button>
            </div>
        );
};

export default Textbox;