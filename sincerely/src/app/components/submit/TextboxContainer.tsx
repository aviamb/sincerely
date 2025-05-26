'use client'

import { uploadImage } from "@/app/hooks/uploadImage";
import Textbox from "./Textbox";
import IconBar from "./IconBar";
import { useAddEntry } from "@/app/hooks/useAddEntry";
import { useState } from "react";

const TextboxContainer = () => {
    const [uploadedUrl, setUploadedUrl] = useState("");
    const upload = uploadImage(uploadedUrl, setUploadedUrl);
    const entryHook = useAddEntry();

    return (
        <>
            <Textbox upload={upload} entryHook={entryHook}/>
            <IconBar upload={upload}/>
        </>

    )

}

export default TextboxContainer;