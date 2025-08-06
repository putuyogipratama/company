"use client";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import ModalLogin from "./modallogin";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <nav className="bg-[#2C3E50] text-white px-6 md:px-20 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold text-green-400">Dirson Consulting Services</h1>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-sm items-center">
            <li><Link href="#"><span>Home</span></Link></li>
            <li><Link href="#about"><span>About</span></Link></li>
            <li><Link href="#services"><span>Services</span></Link></li>
            <li><Link href="#testimonial"><span>Testimonial</span></Link></li>
            <li><Link href="#contact"><span>Contact</span></Link></li>
            <li>
              <button
                onClick={() => setShowLogin(true)}
                className="bg-green-400 px-4 py-2 rounded text-white hover:bg-green-500 transition"
              >
                Login
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <ul className="md:hidden mt-4 space-y-2 text-sm">
            <li><Link href="#"><span onClick={() => setMenuOpen(false)}>Home</span></Link></li>
            <li><Link href="#about"><span onClick={() => setMenuOpen(false)}>About</span></Link></li>
            <li><Link href="#services"><span onClick={() => setMenuOpen(false)}>Services</span></Link></li>
            <li><Link href="#testimonial"><span onClick={() => setMenuOpen(false)}>Testimonial</span></Link></li>
            <li><Link href="#contact"><span onClick={() => setMenuOpen(false)}>Contact</span></Link></li>
            <li>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setShowLogin(true);
                }}
                className="inline-block bg-green-400 px-4 py-2 rounded text-white hover:bg-green-500 transition"
              >
                Login
              </button>
            </li>
          </ul>
        )}
      </nav>

      {/* Modal Login */}
      <ModalLogin isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </>
  );
}
