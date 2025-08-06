import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="py-20 px-8 md:px-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/about.png" // Ganti sesuai nama file di /public
            alt="Team Discussion"
            width={800}
            height={600}
            className="rounded-xl object-cover"
          />
        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About us</h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Blanditiis ex quod perspiciatis accusamus maxime iis ex quod
            perspiciatis accusamus maxime ommo nditiis ex quod perspiciatis
            accusamus maxime omm
          </p>

          <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-gray-800">
            {[
              "Professional",
              "Credibel",
              "Trusted",
              "Free Support",
              "Modern",
              "Low Price",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}