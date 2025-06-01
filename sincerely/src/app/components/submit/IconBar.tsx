'use client'

import { Music, Link } from "lucide-react";
import { uploadImage, UploadImageHook } from "@/app/hooks/uploadImage";
import ImageUploadButton from "./ImageUploadDialog";

const IconBar = ({upload} : { upload: UploadImageHook }) => {

  return (
    <div className="inline-flex space-x-2 h-10 rounded-lg bg-[#f0f0f0] border-3 border-[#c7c7c7] p-2">
      <ImageUploadButton upload={upload}/>
      <div className="w-6 h-6" title="Link the music">
        <Music className=""/>
      </div>
      <div className="w-6 h-6" title="Add a link">
        <Link className=""/>
      </div>
    </div>
  );
};

export default IconBar;