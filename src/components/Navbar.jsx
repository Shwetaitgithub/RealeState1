import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center bg-[#1d2b24] text-lg font-bold text-white">
            A
          </div>

          <div>
            <h1 className="text-lg font-semibold text-[#1d2b24]">
              ABC Developers
            </h1>

            <p className="text-[10px] tracking-[3px] text-gray-500">
              REAL ESTATE
            </p>
          </div>

        </Link>

        {/* NAVIGATION */}
        <nav className="hidden items-center gap-7 md:flex">

          <Link
            to="/"
            className="text-sm font-medium text-gray-600 hover:text-[#b88a44]"
          >
            Home
          </Link>

          <Link
            to="/#about"
            className="text-sm font-medium text-gray-600 hover:text-[#b88a44]"
          >
            About
          </Link>

          {/* SEPARATE PAGE */}
          <Link
            to="/properties"
            className="text-sm font-medium text-gray-600 hover:text-[#b88a44]"
          >
            Properties
          </Link>

          <Link
            to="/#projects"
            className="text-sm font-medium text-gray-600 hover:text-[#b88a44]"
          >
            Projects
          </Link>

          <Link
            to="/#services"
            className="text-sm font-medium text-gray-600 hover:text-[#b88a44]"
          >
            Services
          </Link>

          <Link
            to="/#gallery"
            className="text-sm font-medium text-gray-600 hover:text-[#b88a44]"
          >
            Gallery
          </Link>

          {/* SEPARATE PAGE */}
          <Link
            to="/locations"
            className="text-sm font-medium text-gray-600 hover:text-[#b88a44]"
          >
            Locations
          </Link>

          <Link
            to="/#contact"
            className="bg-[#1d2b24] px-5 py-3 text-sm font-medium text-white hover:bg-[#b88a44]"
          >
            Enquire Now
          </Link>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;