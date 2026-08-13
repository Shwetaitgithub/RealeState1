function Services() {
  const services = [
    {
      number: "01",
      title: "Residential",
      text: "Beautiful homes designed around modern lifestyles and everyday comfort.",
    },
    {
      number: "02",
      title: "Commercial",
      text: "Strategically located spaces created for businesses and growing enterprises.",
    },
    {
      number: "03",
      title: "Property Advisory",
      text: "Professional guidance to help you make confident property decisions.",
    },
    {
      number: "04",
      title: "Investment",
      text: "Explore opportunities designed to support long-term property investments.",
    },
  ];

  return (
    <section id="services" className="px-5 py-24 lg:px-8">

      <div className="mx-auto max-w-7xl">

        <div className="max-w-2xl">
          <p className="font-sans text-sm font-semibold uppercase tracking-[3px] text-[#b88a44]">
            What We Do
          </p>

          <h2 className="mt-4 text-4xl font-medium text-[#1d2b24] md:text-5xl">
            Real estate made simple.
          </h2>
        </div>

        <div className="mt-14 grid border-t border-gray-200 md:grid-cols-2">

          {services.map((service) => (
            <div
              key={service.number}
              className="border-b border-gray-200 p-8 md:border-r"
            >
              <span className="font-sans text-sm font-semibold text-[#b88a44]">
                {service.number}
              </span>

              <h3 className="mt-5 text-2xl font-medium text-[#1d2b24]">
                {service.title}
              </h3>

              <p className="mt-4 max-w-md font-sans text-sm leading-7 text-gray-600">
                {service.text}
              </p>

              <a
                href="#contact"
                className="mt-6 inline-block font-sans text-sm font-semibold text-[#1d2b24]"
              >
                Learn More →
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Services;