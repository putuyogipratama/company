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
      title: "Layanan Konsultan Profesional",
      description:
        "Pemberian jasa konsultasi komprehensif baik individu maupun perusahaan yang mencakup analisis kewajiban perpajakan, pengelolaan keuangan, serta pendampingan hukum litigasi & non-litigasi, guna mendukung pengambilan keputusan yang tepat, efisien, dan sesuai ketentuan hukum yang berlaku.",
    },
    {
      title: "Bidang Pajak & Keuangan",
      description:
        "Kami menyediakan layanan pengelolaan perpajakan dan keuangan untuk individu dan perusahaan, mencakup pendampingan bulanan, perhitungan dan pelaporan SPT Masa (PPh dan PPN), serta penyusunan dan pelaporan SPT Tahunan. Layanan ini dilengkapi dengan penyusunan laporan keuangan yang sesuai standar akuntansi dan ketentuan perpajakan yang berlaku.",
    },
    {
      title: "Bidang Hukum",
      description:
        "Kami memberikan pendampingan hukum untuk individu dan perusahaan, baik melalui jalur pengadilan (litigasi) maupun di luar pengadilan ( non- l i t igasi). Layanan mencakup penyusunan kontrak, legal audit, mediasi, hingga pembelaan dalam perkara perdata, pidana, dan komersial.",
    },
    {
      title: "Layanan Perizinan dan Akta Perusahaan",
      description:
        "Kami menyediakan layanan pengurusan perizinan dan dokumen legal perusahaan secara menyeluruh, mulai dari pendirian badan usaha, perubahan akta, hingga izin operasional dan sertifikasi. Proses dilakukan secara cepat, akurat, dan sesuai ketentuan hukum yang berlaku, dengan pendampingan penuh dari awal hingga selesai",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#2C3E50] text-white px-8 md:px-20 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Dirson <br /> Consulting  <br /> Services
          </h1>
          <p className="text-gray-300 mb-8 max-w-md">
            menghadirkan rangkaian layanan profesional yang terintegrasi di bidang perpajakan, keuangan, hukum, dan legalitas usaha. Setiap layanan dirancang untuk memberikan nilai strategis, kepatuhan regulatif, dan efisiensi operasional bagi klien dari berbagai sektor.
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
          Layanan Kami
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
