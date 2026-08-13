function PropertyCard({
  image,
  name,
  location,
  type,
  price,
  status,
}) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:-translate-y-2 hover:shadow-2xl">
      
      <div className="relative h-60 overflow-hidden bg-gradient-to-br from-slate-800 to-yellow-900">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-yellow-500 px-4 py-2 text-xs font-black text-slate-950">
          {status}
        </span>
      </div>

      <div className="p-7">
        <h3 className="text-xl font-black">
          {name}
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          📍 {location}
        </p>

        <p className="mt-4 text-slate-600">
          {type}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400">
              Starting From
            </p>

            <p className="text-xl font-black text-yellow-600">
              {price}
            </p>
          </div>

          <button className="rounded-lg bg-slate-900 px-4 py-3 text-sm font-bold text-white hover:bg-yellow-600">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;