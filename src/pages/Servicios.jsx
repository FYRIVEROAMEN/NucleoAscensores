import { Link } from 'react-router-dom';
import {
  Wrench,
  Settings,
  ArrowUpDown,
  Zap,
  Warehouse,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import './Pages.css';
import './Servicios.css';

const SERVICES_DETAIL = [
  {
    id: 'mantenimiento',
    title: 'Mantenimiento preventivo y correctivo de ascensores',
    desc: 'Planes mensuales de abono técnico según normativa vigente para consorcios, edificios corporativos e industrias. Guardia de emergencias las 24 horas.',
    icon: Wrench,
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=80',
    bullets: [
      'Inspección periódica de cables, poleas, frenos y seguridades',
      'Libro de inspección y certificaciones municipales al día',
      'Atención rápida de reclamos y rescates 24/7',
    ],
  },
  {
    id: 'reparaciones',
    title: 'Reparaciones y modernizaciones',
    desc: 'Actualizamos equipos antiguos mejorando el confort de marcha, el consumo energético y la estética de cabina sin necesidad de reemplazar toda la estructura.',
    icon: Settings,
    image:
      'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1000&q=80',
    bullets: [
      'Cambio de maniobras electromecánicas a variadores de frecuencia (VVVF)',
      'Revestimiento de cabinas en acero inoxidable, espejos y luz LED',
      'Reemplazo de botoneras, operadores de puerta y limitadores',
    ],
  },
  {
    id: 'venta',
    title: 'Venta e instalación de equipos nuevos',
    desc: 'Provisión llave en mano de ascensores electromecánicos, hidráulicos, montacargas y plataformas para personas con movilidad reducida.',
    icon: ArrowUpDown,
    image:
      'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1000&q=80',
    bullets: [
      'Asesoramiento en obra desde el proyecto arquitectónico',
      'Equipos sin sala de máquinas (MRL) de bajo consumo',
      'Garantía escrita y puesta en marcha certificada',
    ],
  },
  {
    id: 'electricidad',
    title: 'Electricidad y control de acceso',
    desc: 'Instalaciones eléctricas industriales y edilicias, tableros de comando, automatización y sistemas inteligentes de ingreso para consorcios y empresas.',
    icon: Zap,
    image:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80',
    bullets: [
      'Armado y mantenimiento de tableros eléctricos y puestas a tierra',
      'Control de acceso por llavero RFID, código, huella o app móvil',
      'Iluminación de emergencia y automatización de espacios comunes',
    ],
  },
  {
    id: 'portones',
    title: 'Portones automáticos',
    desc: 'Motorización, reparación y mantenimiento de portones corredizos, levadizos y batientes de uso residencial, consorcial e industrial.',
    icon: Warehouse,
    image:
      'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1000&q=80',
    bullets: [
      'Motores de alto tránsito con apertura rápida y cierre suave',
      'Instalación de fotocélulas de seguridad y semáforos de salida',
      'Servicio técnico multimarca y programación de controles',
    ],
  },
];

export default function Servicios() {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header-title">
            Nuestros <span>servicios</span>
          </h1>
          <div className="page-header-line"></div>
          <p className="page-header-subtitle">
            Brindamos soluciones técnicas integrales con respaldo profesional en toda la provincia de Córdoba.
          </p>
        </div>
      </section>

      <section className="servicios-list-section">
        <div className="container servicios-stack">
          {SERVICES_DETAIL.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.id} id={item.id} className="servicio-detail-card">
                <div
                  className="servicio-detail-img"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="servicio-badge-icon">
                    <Icon size={26} />
                  </div>
                </div>

                <div className="servicio-detail-body">
                  <h2>{item.title}</h2>
                  <p className="servicio-detail-desc">{item.desc}</p>

                  <ul className="servicio-bullets">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={18} className="bullet-icon" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contacto" className="btn-primary">
                    Cotizar este servicio <ChevronRight size={18} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}