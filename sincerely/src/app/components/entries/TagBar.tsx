import React from 'react';
import LoveTag from "./loveTag";
import OtherTag from "./otherTag";
import ClassTag from "./classTag";
import UcrTag from "./ucrTag";

const TagBar = () => {
    return (
        <div className="border-2 w-100 rounded-4xl border-gray-400">
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