import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/app/ui/Dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
// import { Image, Music, Link } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";
import Image from "next/image";
import { uploadImage, UploadImageHook } from "@/app/hooks/uploadImage";

const ImageUploadButton = ( {upload} : { upload: UploadImageHook }) => {

    const { handleFileChange } = upload;

    return (

        <label className="cursor-pointer" title="Upload Image">
          <DynamicIcon name="image" color="grey"/>
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
          />
          </label>
          
    );
};

export default ImageUploadButton;