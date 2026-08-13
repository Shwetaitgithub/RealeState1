const properties = [
  {
    name: "Green Valley Residences",
    location: "Wakad, Pune",
    type: "2 BHK Apartment",
    area: "1,050 sq.ft.",
    price: "₹72 Lakhs",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "ABC Heights",
    location: "Hinjewadi, Pune",
    type: "3 BHK Apartment",
    area: "1,450 sq.ft.",
    price: "₹95 Lakhs",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Urban Nest",
    location: "Baner, Pune",
    type: "3 BHK Premium",
    area: "1,650 sq.ft.",
    price: "₹1.20 Cr",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Palm Grove",
    location: "Kharadi, Pune",
    type: "2 BHK Apartment",
    area: "1,100 sq.ft.",
    price: "₹78 Lakhs",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Grand Avenue",
    location: "Balewadi, Pune",
    type: "4 BHK Residence",
    area: "2,100 sq.ft.",
    price: "₹1.65 Cr",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Lakeview Homes",
    location: "Pashan, Pune",
    type: "3 BHK Apartment",
    area: "1,500 sq.ft.",
    price: "₹1.05 Cr",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
  },
];

function Properties() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-[#1d2b24] px-6 py-24 text-white">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[3px] text-[#d6aa65]">
            ABC Developers
          </p>

          <h1 className="mt-5 text-5xl font-medium md:text-6xl">
            Our Properties
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70">
            Explore our collection of thoughtfully designed
            homes across Pune's prime locations.
          </p>

        </div>

      </section>

      {/* PROPERTIES */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {properties.map((property) => (
              <article
                key={property.name}
                className="overflow-hidden border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="relative h-64 overflow-hidden">

                  <img
                    src={property.image}
                    alt={property.name}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 bg-white px-4 py-2 text-xs font-semibold text-[#1d2b24]">
                    FOR SALE
                  </span>

                </div>

                <div className="p-6">

                  <p className="text-sm text-gray-500">
                    {property.location}
                  </p>

                  <h2 className="mt-2 text-2xl font-medium text-[#1d2b24]">
                    {property.name}
                  </h2>

                  <div className="mt-5 grid grid-cols-2 border-y border-gray-100 py-4">

                    <div>
                      <p className="text-xs text-gray-400">
                        Type
                      </p>

                      <p className="mt-1 text-sm font-medium">
                        {property.type}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-400">
                        Area
                      </p>

                      <p className="mt-1 text-sm font-medium">
                        {property.area}
                      </p>
                    </div>

                  </div>

                  <div className="mt-5 flex items-center justify-between">

                    <div>
                      <p className="text-xs text-gray-400">
                        Starting from
                      </p>

                      <p className="mt-1 text-lg font-semibold text-[#b88a44]">
                        {property.price}
                      </p>
                    </div>

                    <a
                      href="/#contact"
                      className="border border-[#1d2b24] px-4 py-2 text-xs font-semibold text-[#1d2b24] transition hover:bg-[#1d2b24] hover:text-white"
                    >
                      Enquire
                    </a>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}

export default Properties;