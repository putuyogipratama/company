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
        <h2 className="text-3xl font-bold mb-8">Contact us</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-2">Address</h3>
            <p>121 King Street, Melbourne Victoria 3000<br />Australia</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Phone</h3>
            <p>+61 3 8376 6284</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p>contact@domain.com</p>
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
