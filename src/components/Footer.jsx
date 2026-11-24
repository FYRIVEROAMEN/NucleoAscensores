import { Link } from 'react-router-dom';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaCog,
} from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <FaCog size={42} className="footer-gear" />
            <div>
              <div className="footer-brand-title">NÚCLEO</div>
              <div className="footer-brand-sub">
                ASCENSORES & SOLUCIONES INTEGRALES
              </div>
            </div>
          </div>

          <div className="footer-divider"></div>

          <ul className="footer-contact">
            <li>
              <FaMapMarkerAlt size={16} className="footer-contact-icon" />
              <span>Córdoba, Argentina</span>
            </li>
            <li>
              <FaPhoneAlt size={15} className="footer-contact-icon" />
              <a href="tel:+5493511234567">351 123 4567</a>
            </li>
            <li>
              <FaEnvelope size={16} className="footer-contact-icon" />
              <a href="mailto:info@nucleoascensores.com.ar">
                info@nucleoascensores.com.ar
              </a>
            </li>
          </ul>

          <div className="footer-socials">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Núcleo Ascensores. Todos los derechos reservados.</p>
          <div className="footer-legal">
            <Link to="/contacto">Aviso legal</Link>
            <span>|</span>
            <Link to="/contacto">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}