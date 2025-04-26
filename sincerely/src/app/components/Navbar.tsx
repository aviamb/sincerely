import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between px-30 py-15 text-lg">
          <Image src="/assets/logo.webp" alt="sincerely-logo" width={150} height={150} />
    
          {/* Buttons in the center */}
          <div className="flex gap-x-35 mx-auto">
            <Link href="" className="hover:underline">submit</Link>
            <Link href="/entries" className="hover:underline">entries</Link>
          </div>
    
          {/* Empty spacer on the right to balance out justify-between */}
          <div style={{ width: 150 }}></div>
        </div>
      );
};

export default Navbar;