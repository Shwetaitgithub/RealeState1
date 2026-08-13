function Projects() {
  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
      name: "Green Valley Residences",
      location: "Wakad, Pune",
      type: "2 & 3 BHK Apartments",
      price: "₹72 Lakhs onwards",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
      name: "ABC Heights",
      location: "Hinjewadi, Pune",
      type: "2, 3 & 4 BHK Residences",
      price: "₹95 Lakhs onwards",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
      name: "Urban Nest",
      location: "Baner, Pune",
      type: "Premium Residences",
      price: "₹1.20 Cr onwards",
    },
  ];

  return (
    <section id="projects" className="bg-[#f7f7f5] px-5 py-24 lg:px-8">

      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="font-sans text-sm font-semibold uppercase tracking-[3px] text-[#b88a44]">
              Our Projects
            </p>

            <h2 className="mt-4 text-4xl font-medium text-[#1d2b24] md:text-5xl">
              Spaces worth coming home to.
            </h2>
          </div>

          <p className="max-w-md font-sans text-sm leading-7 text-gray-600">
            Explore our collection of thoughtfully planned
            residences in prime locations across Pune.
          </p>

        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">

          {projects.map((project) => (
            <article
              key={project.name}
              className="group overflow-hidden bg-white"
            >
              <div className="relative h-72 overflow-hidden">

                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <span className="absolute left-5 top-5 bg-white px-4 py-2 font-sans text-xs font-semibold uppercase tracking-wide text-[#1d2b24]">
                  Residential
                </span>

              </div>

              <div className="p-7">

                <p className="font-sans text-sm text-gray-500">
                  {project.location}
                </p>

                <h3 className="mt-2 text-2xl font-medium text-[#1d2b24]">
                  {project.name}
                </h3>

                <p className="mt-3 font-sans text-sm text-gray-600">
                  {project.type}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">

                  <p className="font-sans text-sm font-semibold text-[#b88a44]">
                    {project.price}
                  </p>

                  <a
                    href="#contact"
                    className="font-sans text-sm font-semibold text-[#1d2b24] hover:text-[#b88a44]"
                  >
                    View Details →
                  </a>

                </div>
              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;