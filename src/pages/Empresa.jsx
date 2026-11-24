import { ShieldCheck, Clock, Users, Wrench } from 'lucide-react';
import './Pages.css';
import './Empresa.css';

export default function Empresa() {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header-title">
            La <span>empresa</span>
          </h1>
          <div className="page-header-line"></div>
          <p className="page-header-subtitle">
            Más de 20 años brindando seguridad, tecnología y mantenimiento preventivo en Córdoba.
          </p>
        </div>
      </section>

      <section className="empresa-section">
        <div className="container empresa-grid">
          <div className="empresa-text">
            <h2>Compromiso técnico y respuesta inmediata</h2>
            <p>
              En <strong>Núcleo Ascensores</strong> nos especializamos en el mantenimiento, modernización e instalación de transporte vertical, instalaciones eléctricas y sistemas de automatización de accesos.
            </p>
            <p>
              Contamos con técnicos matriculados, stock permanente de repuestos multimarca y unidades móviles distribuidas estratégicamente para garantizar tiempos mínimos de respuesta ante cualquier eventualidad.
            </p>

            <div className="empresa-stats">
              <div className="stat-box">
                <span className="stat-number">+20</span>
                <span className="stat-label">Años de experiencia</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Guardia de emergencias</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">100%</span>
                <span className="stat-label">Normativa certificada</span>
              </div>
            </div>
          </div>

          <div className="empresa-values">
            <div className="value-card">
              <ShieldCheck size={28} className="value-icon" />
              <div>
                <h3>Seguridad como prioridad</h3>
                <p>Protocolos estrictos de revisión en cada visita preventiva.</p>
              </div>
            </div>

            <div className="value-card">
              <Clock size={28} className="value-icon" />
              <div>
                <h3>Atención ágil en toda la provincia</h3>
                <p>Cobertura en Córdoba Capital, Sierras Chicas e interior.</p>
              </div>
            </div>

            <div className="value-card">
              <Users size={28} className="value-icon" />
              <div>
                <h3>Equipo técnico especializado</h3>
                <p>Capacitación constante en maniobras electrónicas y variadores.</p>
              </div>
            </div>

            <div className="value-card">
              <Wrench size={28} className="value-icon" />
              <div>
                <h3>Soluciones llave en mano</h3>
                <p>Un solo proveedor para ascensores, electricidad y portones.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}