export default function TestimonialCard() {
  return (
    <div className="px-16 py-16 bg-[#2c3e50] text-white p-10 rounded-md flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/2">
        <img
          src="/testimonial.png" // ganti dengan path gambar kamu
          alt="Profile"
          className="rounded-md w-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2">
        <p className="text-lg leading-relaxed mb-4">
          Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Voluptas
          quis vel asperiores incidunt illum placeat ab, ex iste reprehenderit
          ipsa commodi reicien ipsum, dolor sit amet consectetur, adipisicing
          elit. Voluptas quis vel asperiores incidunt illum.
        </p>
        <h3 className="font-bold text-xl">Rami</h3>
        <p className="text-gray-300">Designer</p>
      </div>
    </div>
  );
}
