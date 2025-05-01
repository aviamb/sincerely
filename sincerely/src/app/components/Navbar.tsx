"use client"
import Link from "next/link"
import Image from "next/image"
import star from "@/app/data/star.jpg"

const Navbar = () => {
    return (
        <div className="flex w-full text-sm sm:text-md md:text-lg p-8 auto-rows-[]">
            <div className="w-1/2">
                <Image
                    src={star}
                    alt={"Green Star"}
                    className="w-4 sm:w-6 absolute left-3 top-3"
                />
                <Link href="/" >Sincerely...</Link>
            </div>
            <Link href="/" className="w-1/4">Submit</Link>
            <Link href="/pages/entries" className="w-1/4">Entries</Link>
        </div>
    );
};

export default Navbar;