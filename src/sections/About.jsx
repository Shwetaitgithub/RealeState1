function About() {
  return (
    <section id="about" className="px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        <div>
          <p className="font-sans text-sm font-semibold uppercase tracking-[3px] text-[#b88a44]">
            About Us
          </p>

          <h2 className="mt-4 text-4xl font-medium leading-tight text-[#1d2b24] md:text-5xl">
            Building homes with
            <br />
            purpose and character.
          </h2>

          <div className="mt-7 space-y-5 font-sans text-base leading-8 text-gray-600">
            <p>
              At ABC Developers, we believe a home should be more
              than four walls. It should be a space that reflects
              your lifestyle, aspirations and future.
            </p>

            <p>
              For over 15 years, our focus has been on creating
              well-planned communities with quality construction,
              thoughtful design and convenient locations.
            </p>
          </div>

          <a
            href="#contact"
            className="mt-8 inline-block border-b-2 border-[#b88a44] pb-2 font-sans text-sm font-semibold text-[#1d2b24]"
          >
            Discover Our Story →
          </a>
        </div>

        <div className="grid grid-cols-2 gap-5">

          <div className="bg-[#f5f1e9] p-7">
            <p className="font-serif text-4xl text-[#b88a44]">
              15
            </p>

            <h3 className="mt-4 text-xl font-medium text-[#1d2b24]">
              Years of Trust
            </h3>

            <p className="mt-3 font-sans text-sm leading-6 text-gray-600">
              Experience built on quality and transparency.
            </p>
          </div>

          <div className="mt-10 bg-[#1d2b24] p-7 text-white">
            <p className="font-serif text-4xl text-[#e1bb7a]">
              25+
            </p>

            <h3 className="mt-4 text-xl font-medium">
              Projects
            </h3>

            <p className="mt-3 font-sans text-sm leading-6 text-white/70">
              Residential and commercial developments.
            </p>
          </div>

          <div className="bg-[#1d2b24] p-7 text-white">
            <p className="font-serif text-4xl text-[#e1bb7a]">
              2K+
            </p>

            <h3 className="mt-4 text-xl font-medium">
              Families
            </h3>

            <p className="mt-3 font-sans text-sm leading-6 text-white/70">
              Happy homeowners who trusted us.
            </p>
          </div>

          <div className="mt-10 bg-[#f5f1e9] p-7">
            <p className="font-serif text-4xl text-[#b88a44]">
              100%
            </p>

            <h3 className="mt-4 text-xl font-medium text-[#1d2b24]">
              Commitment
            </h3>

            <p className="mt-3 font-sans text-sm leading-6 text-gray-600">
              Dedicated support from enquiry to possession.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;