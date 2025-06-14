'use client'

import { Music, Link } from "lucide-react";
import { UploadImageHook } from "@/app/hooks/uploadImage";
import ImageUploadButton from "./ImageUploadDialog";

const IconBar = ({upload} : { upload: UploadImageHook }) => {

  return (
    <div className="inline-flex space-x-2 h-10 rounded-lg bg-[#f0f0f0] border-3 border-[#c7c7c7] p-2 mt-2">
      <ImageUploadButton upload={upload}/>
      <Music className="w-6 h-6" color="#808080"/>
      <Link className="w-6 h-6" color="#808080"/>
    </div>
  );
};

export default IconBar;