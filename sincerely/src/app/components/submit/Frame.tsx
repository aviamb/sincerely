'use client';
import React from "react";

const Frame = () => {
    return (
        <div className="flex justify-left items-center space-x-3">
            <img src="/plane.svg" alt="Plane Icon" className="w-5 h-10 ml-2" />
            <p className="text-zinc-400 text-md font-['Chivo_Mono'] ml-1">I’ve always wanted to ask...</p>
        </div>
    );
};

export default Frame;