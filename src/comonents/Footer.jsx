const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-green-900 text-white mt-12">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 - Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Qurbani Hut</h2>
            <p className="text-gray-300 leading-relaxed">
              Your trusted platform for finding healthy qurbani animals with
              convenience, transparency, and care.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/home" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/allanimals" className="hover:text-white transition">
                  All Animals
                </a>
              </li>
              <li>
                <a href="/info" className="hover:text-white transition">
                  Info
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: support@qurbanihut.com</li>
              <li>Phone: +880 1234-567890</li>
              <li>Location: Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-800 py-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Qurbani Hut. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
