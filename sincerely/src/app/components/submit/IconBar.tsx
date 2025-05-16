import { Image, Music, Link } from "lucide-react";

const IconBar = () => {
  return (
    <div className="inline-flex space-x-2 rounded-lg bg-[#f0f0f0] border-3 border-[#c7c7c7] p-2">
      <div className="w-6 h-6" title="Upload an image">
        <Image className=""/>
      </div>
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