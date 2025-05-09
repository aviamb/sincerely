import LoveTag from "./loveTag"
import ClassTag from "./classTag"
import UcrTag from "./ucrTag"
import OtherTag from "./otherTag"

const TagBar = () => {
    return (
        <div className="border-2 w-120 rounded-4xl border-gray-300">
            <div className="flex justify-center gap-4 flex-row p-2"> 
                <LoveTag />
                <ClassTag />
                <UcrTag />
                <OtherTag />
            </div>
        </div>
        
    );
};

export default TagBar;