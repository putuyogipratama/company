import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function FooterContact() {
  return (
    <footer className="bg-white text-gray-700 pt-10 pb-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Kontak Kami</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-2">Address</h3>
            <p>Makassar, Sulawesi Selatan, Indonesia</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Phone</h3>
            <p>+62 878-7718-0896</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p>dirsonconsultingservices@gmail.com </p>
          </div>
        </div>
        <hr className="mb-6 border-gray-200" />
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>Copyright © All Right Reserved</p>
          <div className="flex gap-4 mt-4 md:mt-0 text-xl">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </footer>
  );
}
