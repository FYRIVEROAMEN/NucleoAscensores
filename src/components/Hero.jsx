import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import './Hero.css';

const HERO_BACKGROUNDS = [
  {
    id: 0,
    label: 'Ascensores',
    image:
      'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 1,
    label: 'Mantenimiento y obras',
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 2,
    label: 'Electricidad y automatización',
    image:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1920&q=80',
  },
];

export default function Hero() {
  const [activeBg, setActiveBg] = useState(0);
  const currentBg = HERO_BACKGROUNDS[activeBg];

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${currentBg.image})` }}
    >
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <div className="hero-text-box">
          <h1 className="hero-title">
            Soluciones integrales para{' '}
            <span className="highlight">ascensores, electricidad</span> y{' '}
            <span className="highlight">automatización.</span>
          </h1>

          <div className="hero-accent-line"></div>

          <p className="hero-subtitle">
            Experiencia y compromiso en cada proyecto.
            <br />
            Servicios para toda la provincia de Córdoba.
          </p>

          <div className="hero-actions">
            <Link to="/contacto" className="btn-primary">
              Solicitar presupuesto <FaChevronRight size={14} />
            </Link>
            <Link to="/servicios" className="btn-outline hero-btn-secondary">
              Conocer servicios <FaChevronRight size={14} />
            </Link>
          </div>
        </div>

        <div className="hero-dots" role="tablist" aria-label="Cambiar imagen de portada">
          {HERO_BACKGROUNDS.map((bg, index) => (
            <button
              key={bg.id}
              type="button"
              onClick={() => setActiveBg(index)}
              className={`dot ${activeBg === index ? 'active' : ''}`}
              aria-label={`Ver fondo de ${bg.label}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}