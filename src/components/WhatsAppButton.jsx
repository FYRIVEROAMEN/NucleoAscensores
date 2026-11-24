import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5493511234567?text=Hola!%20Quisiera%20solicitar%20un%20presupuesto."
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Chatear por WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}