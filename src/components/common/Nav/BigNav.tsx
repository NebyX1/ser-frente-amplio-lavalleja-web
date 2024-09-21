import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import styles from '../../../styles/navbar.module.css';
import Logo from '../../../assets/Logo.webp';

const BigNav = () => {
  return (
    <>
      {/* Línea naranja con los íconos sociales */}
      <div className={styles.navSocialIcons}>
        <a
          href="https://www.facebook.com/SERlavalleja"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <FaFacebookF className="text-[#f4811a] text-xl hover:text-blue-600 transition-colors duration-300" />
        </a>
        <a
          href="https://www.instagram.com/serlavalleja/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <FaInstagram className="text-[#f4811a] text-xl hover:text-pink-500 transition-colors duration-300" />
        </a>
        <a
          href="https://wa.me/59891000182"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <FaWhatsapp className="text-[#f4811a] text-xl hover:text-green-500 transition-colors duration-300" />
        </a>
      </div>

      {/* Navbar principal */}
      <nav
        className={`md:px-32 px-5 flex justify-end items-center min-h-[100px] ${styles.navShadow}`}
      >
        <div className="flex-shrink-0 ml-4">
          <a href="/">
            <img
              src={Logo.src}
              alt="Penumbra Logo"
              className="max-h-[100px] max-w-[100px]"
            />
          </a>
        </div>
        <ul className={`flex space-x-8 text-pink-300 font-medium ml-auto`}>
          <li className={`${styles.navLink}`}>
            <a href="/" className={`${styles.navLinkText}`}>
              Home
            </a>
          </li>
          <li className={`${styles.navLink}`}>
            <a href="/nosotros" className={`${styles.navLinkText}`}>
              Nosotros
            </a>
          </li>
          <li className={`${styles.navLink}`}>
            <a href="/propuestas" className={`${styles.navLinkText}`}>
              Propuestas
            </a>
          </li>
          <li className={`${styles.navLink}`}>
            <a href="/yliana" className={`${styles.navLinkText}`}>
              Yliana
            </a>
          </li>
          <li className={`${styles.navLink}`}>
            <a href="/contacto" className={`${styles.navLinkText}`}>
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default BigNav;
