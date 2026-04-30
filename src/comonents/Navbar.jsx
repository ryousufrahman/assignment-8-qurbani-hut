import Link from "next/link";

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
            <Link
              href={'/'}
              className="text-gray-700 hover:text-green-700 font-medium transition"
            >
              Home
            </Link>
            <Link
              href={'/allanimals'}
              className="text-gray-700 hover:text-green-700 font-medium transition"
            >
              All Animals
            </Link>
            <Link
              href={'/'}
              className="text-gray-700 hover:text-green-700 font-medium transition"
            >
             About Us
            </Link>
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
