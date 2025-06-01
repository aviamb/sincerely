'use client'
import { useState } from "react"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage } from "../../../lib/firebase";

export interface UploadImageHook {
    file: File | null;
    setFile: React.Dispatch<React.SetStateAction<File | null>>;
    uploadedUrl: string;
    setUploadedUrl: React.Dispatch<React.SetStateAction<string>>;
    previewUrl: string;
    setPreviewUrl: React.Dispatch<React.SetStateAction<string>>;
    handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleUpload: () => Promise<string | null>;
    fileName: string;
    setFileName: React.Dispatch<React.SetStateAction<string>>;
}

export const uploadImage = (
    uploadedUrl: string,
    setUploadedUrl: React.Dispatch<React.SetStateAction<string>>
): UploadImageHook => {
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState("");
    const [fileName, setFileName] = useState("");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const incomingFile = event.target.files[0];
            setFile(incomingFile);
            setPreviewUrl(URL.createObjectURL(incomingFile));
            setFileName(incomingFile.name);
        }
    }

    const handleUpload = async (): Promise<string | null> => {
        if (!file) return null;

        try {
            const uniqueFileName = `${Date.now()}-${file.name}`;
            const storageRef = ref(storage, `images/${uniqueFileName}`);
            
            await uploadBytes(storageRef, file);
            const url = await getDownloadURL(storageRef);
                    console.log('Uploaded image URL:', url); 

            if (!url.startsWith('http')) {
                throw new Error('Invalid URL returned from storage');
            }
            
            setUploadedUrl(url);
            return url;
        } catch (error) {
            console.error("Error uploading file:", error);
            return null;
        }
    }

    return {
        file,
        setFile,
        uploadedUrl,
        setUploadedUrl,
        handleFileChange,
        handleUpload,
        previewUrl,
        setPreviewUrl,
        fileName,
        setFileName
    };
}