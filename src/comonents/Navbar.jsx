import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 ">
      <nav className="w-full bg-white shadow ">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-green-700 tracking-wide">
            Qurbani Hut
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              href={'/'}
              className=""
            >
              Home
            </NavLink>
            <NavLink
              href={'/allanimals'}
              className=""
            >
              All Animals
            </NavLink>
            <NavLink
              href={'/aboutUs'}
              className=""
            >
             About Us
            </NavLink>
          </div>

          {/* Signup Button */}
          <div className="flex gap-4">
            <Link href={'/signup'}>
            <button className="bg-green-700 btn hover:bg-green-800 text-white font-semibold  rounded shadow-sm transition">
              Sign Up
            </button>
            </Link>
            <Link href={'/signin'}>
            <button className="bg-green-700 btn hover:bg-green-800 text-white font-semibold  rounded shadow-sm transition">
              Sign In
            </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
