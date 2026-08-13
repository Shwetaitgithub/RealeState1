function Hero() {
  return (
    <section id="home" className="relative min-h-[680px] overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85')",
        }}
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-5 lg:px-8">

        <div className="max-w-2xl text-white">

          <p className="mb-5 font-sans text-sm font-medium uppercase tracking-[4px] text-[#e1bb7a]">
            Premium Real Estate
          </p>

          <h1 className="text-5xl font-medium leading-tight md:text-6xl lg:text-7xl">
            A place you will
            <br />
            <span className="text-[#e1bb7a]">
              love to call home.
            </span>
          </h1>

          <p className="mt-7 max-w-xl font-sans text-base leading-8 text-white/85 md:text-lg">
            Discover thoughtfully designed residences in some of
            Pune's most desirable neighbourhoods.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-[#b88a44] px-7 py-4 font-sans text-sm font-medium text-white transition hover:bg-[#9f7437]"
            >
              Explore Properties
            </a>

            <a
              href="#contact"
              className="border border-white/60 px-7 py-4 font-sans text-sm font-medium text-white transition hover:bg-white hover:text-[#1d2b24]"
            >
              Schedule a Visit
            </a>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white/95">
        <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-gray-200 px-5 py-6 lg:px-8">

          <div className="text-center">
            <p className="font-serif text-3xl text-[#1d2b24]">
              15+
            </p>

            <p className="mt-1 font-sans text-xs uppercase tracking-wider text-gray-500">
              Years Experience
            </p>
          </div>

          <div className="text-center">
            <p className="font-serif text-3xl text-[#1d2b24]">
              25+
            </p>

            <p className="mt-1 font-sans text-xs uppercase tracking-wider text-gray-500">
              Projects Delivered
            </p>
          </div>

          <div className="text-center">
            <p className="font-serif text-3xl text-[#1d2b24]">
              2,000+
            </p>

            <p className="mt-1 font-sans text-xs uppercase tracking-wider text-gray-500">
              Happy Families
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;