
import Image from "next/image";
import { DynamicIcon, iconNames } from 'lucide-react/dynamic';
interface imageProps {
    previewUrl: string
    setPreviewUrl: React.Dispatch<React.SetStateAction<string>>;
    setFile: React.Dispatch<React.SetStateAction<File | null>>
}

const PreviewImage = ({previewUrl, setPreviewUrl, setFile}: imageProps) => {

    const handleClick = () => {

        setPreviewUrl("")
        setFile(null)

    }

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
                onClick={handleClick()}
            />
            </button>
        </div>
    )   

}

export default PreviewImage