'use client'

import { useState } from "react"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { serverTimestamp, Timestamp } from "firebase/firestore";
import { storage } from "../../../lib/firebase";

export interface UploadImageHook {
    file: File | null;
    setFile: React.Dispatch<React.SetStateAction<File | null>>;
    uploadedUrl: string;
    setUploadedUrl: React.Dispatch<React.SetStateAction<string>>;
    previewUrl: string;
    setPreviewUrl: React.Dispatch<React.SetStateAction<string>>;
    handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleUpload: () => Promise<void>;
    fileName: string;
    setFileName: React.Dispatch<React.SetStateAction<string>>;
  }

export const uploadImage = (
    uploadedUrl: string,
    setUploadedUrl: React.Dispatch<React.SetStateAction<string>>
): UploadImageHook => {

    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("");
    const [fileName, setFileName] = useState("");

    const handleFileChange = (event) => {
        const incomingFile = event.target.files[0];
        console.log(incomingFile);
        setFile(incomingFile);
        setPreviewUrl(URL.createObjectURL(incomingFile));
        setFileName(incomingFile.name);
        console.log(fileName);
    }

    const handleUpload = async () => {
        if (!file) return;

        const storageRef = ref(storage, `images/${file.name}`);

        try {
            await uploadBytes(storageRef, file);
            const url = await getDownloadURL(storageRef);
            setUploadedUrl(url);
            console.log("File Uploaded Successfully")
        } catch (error) {
            console.error("error uploading fle :(", error)
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
        fileName
    };

}

