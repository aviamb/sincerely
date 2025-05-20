import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between px-8 py-6 font-mono text-sm md:text-base mt-[30px] text-gray-700">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <Link href="/">
            <img
            src="/sincerely-logo.svg"
            alt="Sincerely logo"
            className="w-1/4 ml-[40px] cursor-pointer"
            />
        </Link>
    </div>

      {/* Center: Navigation Links */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-10 text-md">
        <Link href="/" className="hover:underline">submit</Link>
        <Link href="/pages/entries" className="hover:underline">entries</Link>
      </div>

      {/* Right: Empty Placeholder */}
      <div className="w-[80px]">{/* Empty for now */}</div>
    </div>
  );
};

export default Navbar;
