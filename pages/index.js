import AboutUs from "@/components/about";
import FooterContact from "@/components/footer";
import Navbar from "@/components/navbar";
import ServiceCard from "@/components/servicecard";
import Stats from "@/components/stats";
import TestimonialCard from "@/components/testimoni";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // F62ygaCSlc1m1qwJ
  const services = [
    {
      title: "Accounting",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis asperiores omnis eveniet",
    },
    {
      title: "Transaction",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis asperiores omnis eveniet",
    },
    {
      title: "Payment Tax",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis asperiores omnis eveniet",
    },
    {
      title: "Business Count",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis asperiores omnis eveniet",
    },
    {
      title: "Bookkeeping",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Perferendis asperiores omnis eveniet",
    },
    {
      title: "About Accounting",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Perferendis asperiores omnis eveniet",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#2C3E50] text-white px-8 md:px-20 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Entrust Your <br /> Accounting <br /> Problems With Us
          </h1>
          <p className="text-gray-300 mb-8 max-w-md">
            Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Sit
            explicabo enim quo nesciunt, consequatur perspiciatis numquam minus
            deleniti eum libero.
          </p>
          <div className="flex gap-4">
            <Link href="#get-started">
              <span className="bg-green-400 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-500 transition">
                Get Started
              </span>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <div className="transform rotate-3 overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/accounting-team.png" // ganti sesuai gambar kamu
              alt="Accounting Team"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
      </main>
      <AboutUs />
      <Stats />
      <div className="bg-white px-16 pt-16 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800">
          Choose Our <br /> The Best Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
      <TestimonialCard />
      <FooterContact />
    </>
  );
}
