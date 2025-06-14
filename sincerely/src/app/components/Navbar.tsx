import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full grid grid-cols-[2fr_1fr_1fr_2fr] items-center justify-between px-8 pb-6 pt-10 text-sm text-gray-700">
      <div className="mb-2">
      <Link href="/">
        <img
          src="/sincerely-logo.svg"
          alt="Sincerely logo"
          className="md:w-1/3 lg:w-1/4 cursor-pointer"
          />
      </Link>
      </div>
      <Link href="/" className="hover:underline">submit</Link>
      <Link href="/entries" className="hover:underline">entries</Link>
      <Link href="/about" className="hover:underline">about</Link>
    </div>
  );
};

export default Navbar;
