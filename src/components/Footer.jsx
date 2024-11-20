import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white p-8">
      <div className="container mx-auto space-y-8">

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-bold">Phnom Penh Headquarters</h3>
          <p>102  Kampus- Second Floor</p>
          <p>Phnom Penh, 271</p>
          <p>T: (855) 71.922.6094</p>
          <Link href="/directions"
            className="text-blue-400 flex items-center">
              GET DIRECTIONS
              <span className="ml-2">➡️</span>
            
          </Link>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-bold">Join Our Social Community</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-2xl" />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-2xl" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div>
          <h3 className="text-lg font-bold">Let's Discuss What's Next</h3>
          <p>Have a order report or a question?<br />We'd love to hear from you.</p>
          <Link href="/contact" className="text-blue-400 flex items-center">
              CONTACT US
              <span className="ml-2">➡️</span>
      
          </Link>
        </div>

        {/* Footer Bottom */}
        <div className="text-sm text-gray-500 mt-8">
          © 2024 Your Company. All rights reserved. <Link href="/privacy-policy" className="text-blue-400">Privacy Policy</Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
