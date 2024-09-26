import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import styles from '../../styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={`${styles.footer} w-full`}>

      {/* Enlaces de Legal */}
      <div className={styles.footerLinks}>
        <a
          href="/legal"
          className="text-white text-lg hover:text-gray-800 transition-colors duration-300"
        >
          Legal
        </a>
      </div>

      {/* Redes sociales */}
      <div className={styles.socialIcons}>
        <a
          href="https://www.facebook.com/SERlavalleja"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-white text-2xl hover:text-blue-600 transition-colors duration-300"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/serlavalleja/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-white text-2xl hover:text-pink-500 transition-colors duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/59891000182"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="text-white text-2xl hover:text-green-500 transition-colors duration-300"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* Enlace para el correo */}
      <div className={styles.footerText}>
        <a
          href="mailto:innova.fa.lavalleja@gmail.com"
          className="text-white text-lg hover:text-gray-800 transition-colors duration-300"
        >
          <FaEnvelope className="inline mr-2" />
          innova.fa.lavalleja@gmail.com
        </a>
      </div>

      {/* Copyright */}
      <div className="mt-4 text-white">
        © {new Date().getFullYear()} SER Lavalleja. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
