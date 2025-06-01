'use client';

import React from 'react';
import Hamburger from 'hamburger-react';
import { useState, useEffect, useRef } from 'react';
import Tag from '@/app/components/entries/Tag';
import { tags } from '@/app/data/tags';

interface TagBarProps {
    selectedTags: string[];
    onTagSelect: (tag: string) => void;
}

const TagBar = ({ selectedTags, onTagSelect }: TagBarProps) => {
    const [isOpen, setOpen] = useState(false);
    const [menuWidth, setMenuWidth] = useState(300);
    const menuRef = useRef<HTMLDivElement>(null);

    //responsive menu width
    useEffect(() => {
        const handleResize = () => {
            const width = Math.max(250, Math.min(390, window.innerWidth * 0.5));
            setMenuWidth(width);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="relative flex items-start">
            {/* Hamburger Icon */}
            <div className="p-1">
                <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
            </div>

            {/* Tag Menu */}
            <div
                ref={menuRef}
                className={`
                    absolute left-full top-0 ml-4 bg-white border border-gray-300 rounded-2xl shadow-md px-4 py-2 z-10
                    transition-all duration-300 ease-in-out overflow-hidden
                    transform
                    ${isOpen ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-6 scale-95 pointer-events-none'}
                `}
                style={{
                    width: `${menuWidth}px`,
                }}
            >
                <div className="flex flex-row flex-wrap gap-2">
                    {tags.map(({ text, color, hover }, index) => (
                        <Tag
                            text={text}
                            color={color}
                            hover={hover}
                            key={index}
                            selected={selectedTags.includes(text)}
                            onClick={() => onTagSelect(text)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TagBar;