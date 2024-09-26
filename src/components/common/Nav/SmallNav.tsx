import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import styles from "../../../styles/navbar.module.css";
import Logo from "../../../assets/Logo.webp";

const SmallNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Ícono de menú hamburguesa */}
      <button
        onClick={toggleMenu}
        className="text-orange-500 p-2 focus:outline-none"
        aria-label="Abrir menú"
      >
        <FiMenu size={24} />
      </button>

      {/* Menú deslizante */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-orange-500 p-2 focus:outline-none"
            aria-label="Cerrar menú"
          >
            <FiX size={24} />
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-6 mt-8 text-orange-500 font-medium">
          <li className={`${styles.navLink}`}>
            <a
              href="/"
              className="transition-colors duration-300"
              onClick={toggleMenu}
            >
              Home
            </a>
          </li>
          <li className={`${styles.navLink}`}>
            <a
              href="/nosotros"
              className="transition-colors duration-300"
              onClick={toggleMenu}
            >
              Nosotros
            </a>
          </li>
          <li className={`${styles.navLink}`}>
            <a
              href="/propuestas"
              className="transition-colors duration-300"
              onClick={toggleMenu}
            >
              Propuestas
            </a>
          </li>
          <li className={`${styles.navLink}`}>
            <a
              href="/yliana"
              className="transition-colors duration-300"
              onClick={toggleMenu}
            >
              Yliana
            </a>
          </li>
          <li className={`${styles.navLink}`}>
            <a
              href="/contacto"
              className="transition-colors duration-300"
              onClick={toggleMenu}
            >
              Contacto
            </a>
          </li>
          </ul>
          {/* Redes sociales */}
          <div className="flex justify-center space-x-4 mt-16">
            <a
              href="https://www.facebook.com/SERlavalleja"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 text-2xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/serlavalleja/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/59891000182"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 text-2xl"
            >
              <FaWhatsapp />
            </a>
          </div>
          <div className="flex justify-center space-x-4 mt-16">
            <a href="/" onClick={toggleMenu}>
              <img
                src={Logo.src}
                alt="Logo Ser"
                className="max-h-[100px] max-w-[100px]"
              />
            </a>
          </div>

      </div>
    </div>
  );
};

export default SmallNav;
