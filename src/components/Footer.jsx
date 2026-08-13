function Footer() {
  return (
    <footer className="bg-[#152019] px-5 py-12 text-white lg:px-8">

      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 md:grid-cols-3">

          <div>
            <h2 className="font-sans text-xl font-semibold">
              ABC Developers
            </h2>

            <p className="mt-4 max-w-md font-sans text-sm leading-7 text-white/50">
              Building thoughtfully designed spaces for modern
              living. A demo website prepared for Sushiv
              Technologies.
            </p>
          </div>

          <div>
            <h3 className="font-sans text-sm font-semibold">
              Quick Links
            </h3>

            <div className="mt-4 space-y-3 font-sans text-sm text-white/50">
              <a href="#about" className="block hover:text-white">
                About
              </a>

              <a href="#projects" className="block hover:text-white">
                Projects
              </a>

              <a href="#services" className="block hover:text-white">
                Services
              </a>

              <a href="#contact" className="block hover:text-white">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-sans text-sm font-semibold">
              Contact
            </h3>

            <div className="mt-4 space-y-3 font-sans text-sm text-white/50">
              <p>+91 99999 99999</p>
              <p>sales@abcdevelopers.com</p>
              <p>Baner, Pune, Maharashtra</p>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-6 font-sans text-xs text-white/40">
          © 2026 ABC Developers. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;