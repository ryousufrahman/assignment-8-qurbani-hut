import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full bg-white shadow-md border-b border-gray-200">
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
              href={'/info'}
              className="text-gray-700 hover:text-green-700 font-medium transition"
            >
              Info
            </Link>
          </div>

          {/* Signup Button */}
          <div>
            <Link href={'/signup'}>
            <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-5 py-2 rounded-2xl shadow-sm transition">
              Sign Up
            </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
