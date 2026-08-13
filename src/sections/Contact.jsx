function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Thank you for your enquiry. Our property consultant will contact you shortly."
    );
  };

  return (
    <section id="contact" className="bg-[#1d2b24] px-5 py-24 lg:px-8">

      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">

        <div className="text-white">

          <p className="font-sans text-sm font-semibold uppercase tracking-[3px] text-[#e1bb7a]">
            Get In Touch
          </p>

          <h2 className="mt-4 text-4xl font-medium leading-tight md:text-5xl">
            Let's find a place
            <br />
            that feels like home.
          </h2>

          <p className="mt-6 max-w-lg font-sans text-sm leading-7 text-white/70">
            Tell us about your requirements and our property
            consultant will help you find the right property.
          </p>

          <div className="mt-10 space-y-6 font-sans text-sm">

            <div>
              <p className="text-white/50">
                Call
              </p>

              <a
                href="tel:+919999999999"
                className="mt-1 block text-lg hover:text-[#e1bb7a]"
              >
                +91 99999 99999
              </a>
            </div>

            <div>
              <p className="text-white/50">
                Email
              </p>

              <a
                href="mailto:sales@abcdevelopers.com"
                className="mt-1 block text-lg hover:text-[#e1bb7a]"
              >
                sales@abcdevelopers.com
              </a>
            </div>

            <div>
              <p className="text-white/50">
                Office
              </p>

              <p className="mt-1 text-lg">
                Baner, Pune, Maharashtra
              </p>
            </div>

          </div>
        </div>

        <div className="bg-white p-8 md:p-10">

          <h3 className="text-2xl font-medium text-[#1d2b24]">
            Property Enquiry
          </h3>

          <form
            onSubmit={handleSubmit}
            className="mt-7 space-y-5"
          >

            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full border border-gray-200 px-4 py-4 font-sans text-sm outline-none focus:border-[#b88a44]"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full border border-gray-200 px-4 py-4 font-sans text-sm outline-none focus:border-[#b88a44]"
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full border border-gray-200 px-4 py-4 font-sans text-sm outline-none focus:border-[#b88a44]"
            />

            <select
              required
              className="w-full border border-gray-200 px-4 py-4 font-sans text-sm text-gray-600 outline-none focus:border-[#b88a44]"
            >
              <option value="">
                Property Requirement
              </option>

              <option>2 BHK</option>
              <option>3 BHK</option>
              <option>4 BHK</option>
              <option>Commercial Property</option>
              <option>Investment</option>
            </select>

            <textarea
              rows="4"
              placeholder="Tell us about your requirements..."
              className="w-full resize-none border border-gray-200 px-4 py-4 font-sans text-sm outline-none focus:border-[#b88a44]"
            />

            <button
              type="submit"
              className="w-full bg-[#b88a44] py-4 font-sans text-sm font-semibold text-white transition hover:bg-[#9f7437]"
            >
              Send Enquiry
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;