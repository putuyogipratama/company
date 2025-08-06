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
        <h3 className="font-bold text-4xl">Komitmen Kami</h3> <br />
        <p className="text-lg leading-relaxed mb-4">
          Sebagai konsultan profesional, Dirson Consulting Services menghadirkan layanan yang tidak hanya tepat guna, tetapi juga adaptif terhadap dinamika dan kebutuhan zaman. Kami menawarkan nilai tambah yang dirancang untuk memberikan dampak nyata dan berkelanjutan bagi setiap 
        </p>
      </div>
    </div>
  );
}
