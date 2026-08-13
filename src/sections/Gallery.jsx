function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",
  ];

  return (
    <section id="gallery" className="px-5 py-24 lg:px-8">

      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <p className="font-sans text-sm font-semibold uppercase tracking-[3px] text-[#b88a44]">
            Gallery
          </p>

          <h2 className="mt-4 text-4xl font-medium text-[#1d2b24] md:text-5xl">
            A glimpse of better living.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">

          {images.map((image, index) => (
            <div
              key={image}
              className={`overflow-hidden ${
                index === 0 ? "md:row-span-2" : ""
              }`}
            >
              <img
                src={image}
                alt="ABC Developers property"
                className="h-full min-h-72 w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Gallery;