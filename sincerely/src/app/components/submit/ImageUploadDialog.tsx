import { DynamicIcon } from "lucide-react/dynamic";
import { UploadImageHook } from "@/app/hooks/uploadImage";

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