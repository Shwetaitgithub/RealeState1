function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      location: "Pune",
      text: "The entire experience was transparent and professional. We found exactly the kind of home we were looking for.",
    },
    {
      name: "Sneha Patil",
      location: "Pune",
      text: "The team understood our requirements and helped us throughout the property-buying process.",
    },
    {
      name: "Amit Joshi",
      location: "Mumbai",
      text: "A professional team with excellent properties and very good customer service.",
    },
  ];

  return (
    <section className="bg-[#f7f7f5] px-5 py-24 lg:px-8">

      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <p className="font-sans text-sm font-semibold uppercase tracking-[3px] text-[#b88a44]">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl font-medium text-[#1d2b24] md:text-5xl">
            Trusted by families.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white p-8"
            >
              <div className="font-serif text-xl text-[#b88a44]">
                “
              </div>

              <p className="mt-3 font-sans text-sm leading-7 text-gray-600">
                {testimonial.text}
              </p>

              <div className="mt-7 border-t border-gray-100 pt-5">
                <p className="font-sans text-sm font-semibold text-[#1d2b24]">
                  {testimonial.name}
                </p>

                <p className="mt-1 font-sans text-xs text-gray-500">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Testimonials;