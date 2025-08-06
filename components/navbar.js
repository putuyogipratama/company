import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 md:px-20 py-6 bg-[#2C3E50] text-white">
      <h1 className="text-2xl font-bold text-green-400">NaylaPramesti</h1>
      <ul className="flex gap-6 text-sm">
        <li><Link href="#"><span>Home</span></Link></li>
        <li><Link href="#about"><span>About</span></Link></li>
        <li><Link href="#services"><span>Services</span></Link></li>
        <li><Link href="#testimonial"><span>Testimonial</span></Link></li>
        <li><Link href="#contact"><span>Contact</span></Link></li>
      </ul>
      <Link href="#quote">
        <span className="bg-green-400 px-4 py-2 rounded text-white hover:bg-green-500 transition">
          Get Quote
        </span>
      </Link>
    </nav>
  );
}
