import { Link } from 'react-router-dom';
import { Images, ChevronRight } from 'lucide-react';
import './ProjectsBanner.css';

const PROJECTS_IMAGE =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80';

export default function ProjectsBanner() {
  return (
    <section className="projects-section">
      <div className="container">
        <div className="projects-header" data-aos="fade-up">
          <h2 className="projects-title">
            Nuestros{' '}
            <span className="projects-accent">
              proyectos
              <span className="projects-underline"></span>
            </span>
          </h2>
        </div>

        <Link
          to="/proyectos"
          data-aos="fade-up"
          data-aos-delay="100"
          className="projects-card"
          style={{ backgroundImage: `url(${PROJECTS_IMAGE})` }}
        >
          <div className="projects-card-overlay"></div>

          <div className="projects-card-content">
            <div className="projects-left-info">
              <Images size={34} strokeWidth={1.7} className="projects-icon" />
              <span className="projects-card-text">
                Trabajos realizados en toda la provincia
              </span>
            </div>

            <div className="projects-arrow-circle">
              <ChevronRight size={22} />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}