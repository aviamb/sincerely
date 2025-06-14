
import Image from "next/image";
import { DynamicIcon } from 'lucide-react/dynamic';
interface imageProps {
    previewUrl: string
    setPreviewUrl: React.Dispatch<React.SetStateAction<string>>;
}

const PreviewImage = ({previewUrl, setPreviewUrl}: imageProps) => {

    return (
        <div className="relative w-75 h-75 m-auto left-0 right-0">
            <Image 
                src = {previewUrl || "plane.svg"}
                alt = "plane.svg"
                width={300}
                height = {200}
                className="m-auto left-0 right-0 rounded-3"
            />
            <button>
            <DynamicIcon 
                name="x" 
                className="absolute top-4 right-4 cursor-pointer" 
                color="grey"
                onClick={() => setPreviewUrl("")}
            />
            </button>
        </div>
    )   

}

export default PreviewImage