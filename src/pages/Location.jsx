const locations = [
  {
    name: "Baner",
    description:
      "A premium residential destination with excellent connectivity, modern lifestyle facilities and strong growth potential.",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Wakad",
    description:
      "A rapidly developing neighbourhood close to Hinjewadi, schools, malls and major transportation routes.",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Hinjewadi",
    description:
      "One of Pune's leading technology corridors and an excellent destination for professionals and investors.",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Kharadi",
    description:
      "A well-connected residential and business hub close to IT parks, shopping centres and Pune Airport.",
    image:
      "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=1200&q=80",
  },
];

function Location() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-[#1d2b24] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[3px] text-[#d6aa65]">
            ABC Developers
          </p>

          <h1 className="mt-5 text-5xl font-medium md:text-6xl">
            Our Locations
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70">
            Discover thoughtfully selected locations across Pune.
            Find a home close to work, education, shopping and
            everything important to your lifestyle.
          </p>

        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[3px] text-[#b88a44]">
            Prime Locations
          </p>

          <h2 className="mt-4 text-4xl font-medium text-[#1d2b24] md:text-5xl">
            Live where life connects.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600">
            Our properties are strategically located in some of
            Pune's most desirable neighbourhoods.
          </p>

          {/* CARDS */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">

            {locations.map((location, index) => (
              <div
                key={location.name}
                className="overflow-hidden border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="relative h-72 overflow-hidden">

                  <img
                    src={location.image}
                    alt={location.name}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  <div className="absolute bottom-6 left-6">

                    <p className="text-xs font-semibold uppercase tracking-[2px] text-[#d6aa65]">
                      0{index + 1} • Pune
                    </p>

                    <h3 className="mt-1 text-3xl font-medium text-white">
                      {location.name}
                    </h3>

                  </div>

                </div>

                <div className="p-7">

                  <p className="text-sm leading-7 text-gray-600">
                    {location.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">

                    <span className="border border-gray-200 px-3 py-2 text-xs text-gray-600">
                      Schools
                    </span>

                    <span className="border border-gray-200 px-3 py-2 text-xs text-gray-600">
                      Shopping
                    </span>

                    <span className="border border-gray-200 px-3 py-2 text-xs text-gray-600">
                      Transport
                    </span>

                  </div>

                  <a
                    href="/properties"
                    className="mt-7 inline-block border-b-2 border-[#b88a44] pb-1 text-sm font-semibold text-[#1d2b24]"
                  >
                    View Properties →
                  </a>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f7f7f5] px-6 py-20 text-center">

        <h2 className="text-4xl font-medium text-[#1d2b24] md:text-5xl">
          Find your perfect location
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600">
          Explore our properties and discover a home in a
          neighbourhood that matches your lifestyle.
        </p>

        <a
          href="/properties"
          className="mt-8 inline-block bg-[#1d2b24] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#b88a44]"
        >
          View Properties
        </a>

      </section>

    </main>
  );
}

export default Location;