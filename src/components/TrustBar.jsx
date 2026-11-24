import { Award, MapPin, Handshake } from 'lucide-react';
import './TrustBar.css';

export default function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="container trust-bar-grid">
        <div className="trust-item">
          <Award size={28} strokeWidth={1.6} className="trust-icon" />
          <span>Más de 20 años de trayectoria</span>
        </div>

        <div className="trust-item">
          <MapPin size={28} strokeWidth={1.6} className="trust-icon" />
          <span>Cobertura en Córdoba</span>
        </div>

        <div className="trust-item">
          <Handshake size={28} strokeWidth={1.6} className="trust-icon" />
          <span>Soluciones integrales</span>
        </div>
      </div>
    </section>
  );
}