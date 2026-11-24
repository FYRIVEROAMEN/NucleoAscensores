import { useState } from 'react';
import { MapPin } from 'lucide-react';
import './Pages.css';
import './Proyectos.css';

const PROJECTS = [
  {
    id: 1,
    title: 'Modernización integral de 2 ascensores',
    category: 'Ascensores',
    location: 'Nueva Córdoba, Córdoba',
    image:
      'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    title: 'Tablero general y control de acceso RFID',
    category: 'Electricidad',
    location: 'Villa Carlos Paz',
    image:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    title: 'Portón corredizo industrial automatizado',
    category: 'Portones',
    location: 'Zona Norte, Córdoba',
    image:
      'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    title: 'Instalación de ascensor panorámico',
    category: 'Ascensores',
    location: 'Río Cuarto, Córdoba',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    title: 'Automatización de iluminación y emergencias',
    category: 'Electricidad',
    location: 'Barrio General Paz, Córdoba',
    image:
      'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 6,
    title: 'Doble portón levadizo para cochera de edificio',
    category: 'Portones',
    location: 'Alta Córdoba',
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80',
  },
];

const CATEGORIES = ['Todos', 'Ascensores', 'Electricidad', 'Portones'];

export default function Proyectos() {
  const [selected, setSelected] = useState('Todos');

  const filtered =
    selected === 'Todos'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selected);

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header-title">
            Nuestros <span>proyectos</span>
          </h1>
          <div className="page-header-line"></div>
          <p className="page-header-subtitle">
            Obras, modernizaciones y sistemas instalados en consorcios, comercios e industrias de toda la provincia.
          </p>
        </div>
      </section>

      <section className="proyectos-page-section">
        <div className="container">
          {/* Botones de filtro */}
          <div className="proyectos-filters">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`filter-btn ${selected === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grilla de obras */}
          <div className="proyectos-grid">
            {filtered.map((project) => (
              <article key={project.id} className="proyecto-card">
                <div
                  className="proyecto-card-img"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <span className="proyecto-tag">{project.category}</span>
                </div>
                <div className="proyecto-card-info">
                  <h3>{project.title}</h3>
                  <p className="proyecto-location">
                    <MapPin size={16} /> {project.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}