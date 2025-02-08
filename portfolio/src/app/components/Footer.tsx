import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer({ withStyle = true }) {
  return (
    <footer
      className={`${
        withStyle ? "bg-blue-500 text-white" : ""
      } text-center p-4 flex flex-col items-center space-y-4 mt-[300px]`}
    >
      <p>&copy; 2025 Melkamu Sisay. All rights reserved.</p>
      <div className="flex space-x-4 justify-center">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-gray-300"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-gray-300"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-gray-300"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-gray-300"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
}
