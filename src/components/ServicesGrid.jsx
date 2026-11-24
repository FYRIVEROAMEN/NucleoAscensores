import { Link } from 'react-router-dom';
import {
  Wrench,
  Settings,
  ArrowUpDown,
  Zap,
  Warehouse,
  ChevronRight,
} from 'lucide-react';
import './ServicesGrid.css';

const SERVICES = [
  {
    id: 'mantenimiento',
    title: 'Mantenimiento de ascensores',
    icon: Wrench,
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
    hideOnMobile: false,
  },
  {
    id: 'reparaciones',
    title: 'Reparaciones y modernizaciones',
    icon: Settings,
    image:
      'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80',
    hideOnMobile: false,
  },
  {
    id: 'venta',
    title: 'Venta de equipos',
    icon: ArrowUpDown,
    image:
      'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=80',
    hideOnMobile: true,
  },
  {
    id: 'electricidad',
    title: 'Electricidad y control de acceso',
    icon: Zap,
    image:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    hideOnMobile: false,
  },
  {
    id: 'portones',
    title: 'Portones automáticos',
    icon: Warehouse,
    image:
      'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=800&q=80',
    hideOnMobile: false,
  },
];

export default function ServicesGrid() {
  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            Nuestros{' '}
            <span className="title-accent">
              servicios
              <span className="title-underline"></span>
            </span>
          </h2>
        </div>

        <div className="services-grid">
          {SERVICES.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <Link
                key={service.id}
                to={`/servicios#${service.id}`}
                data-aos="fade-up"
                data-aos-delay={index * 70}
                className={`service-card ${
                  service.hideOnMobile ? 'hide-mobile' : ''
                }`}
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="service-card-overlay"></div>

                <div className="service-card-content">
                  <IconComponent
                    size={28}
                    strokeWidth={1.8}
                    className="service-icon"
                  />
                  <h3 className="service-card-title">{service.title}</h3>
                  <ChevronRight
                    size={20}
                    className="service-arrow-mobile"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}