import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  RotateCcw,
} from 'lucide-react';
import './Pages.css';
import './Contacto.css';

const INITIAL_FORM = {
  nombre: '',
  telefono: '',
  email: '',
  servicio: 'Mantenimiento de ascensores',
  mensaje: '',
};

const SERVICIOS_OPCIONES = [
  'Mantenimiento de ascensores',
  'Reparaciones y modernizaciones',
  'Venta de equipos nuevos',
  'Electricidad y control de acceso',
  'Portones automáticos',
];

const INFO_CONTACTO = [
  {
    icon: MapPin,
    titulo: 'Ubicación',
    valor: 'Córdoba Capital y cobertura provincial',
  },
  {
    icon: Phone,
    titulo: 'Teléfono / Guardia 24 hs',
    valor: '351 123 4567',
  },
  {
    icon: Mail,
    titulo: 'Correo electrónico',
    valor: 'info@nucleoascensores.com.ar',
  },
  {
    icon: Clock,
    titulo: 'Horario administrativo',
    valor: 'Lunes a Viernes de 8:00 a 18:00 hs',
  },
];

const WHATSAPP_NUMBER = '5493511234567';

export default function Contacto() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  const handleWhatsAppSend = () => {
    const lineas = [
      'Hola Núcleo Ascensores! Quiero solicitar presupuesto:',
      `• Nombre/Consorcio: ${formData.nombre}`,
      `• Teléfono: ${formData.telefono}`,
      formData.email ? `• Email: ${formData.email}` : null,
      `• Servicio: ${formData.servicio}`,
      `• Detalle: ${formData.mensaje}`,
    ].filter(Boolean);

    const textoEncoded = encodeURIComponent(lineas.join('\n'));
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${textoEncoded}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setEnviado(false);
  };

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header-title">
            Solicitar <span>presupuesto</span>
          </h1>
          <div className="page-header-line"></div>
          <p className="page-header-subtitle">
            Completá el formulario o escribinos por WhatsApp. Te respondemos a la
            brevedad con asesoramiento sin cargo.
          </p>
        </div>
      </section>

      <section className="contacto-section">
        <div className="container contacto-grid">
          {/* Datos directos */}
          <aside className="contacto-info-card">
            <h2>Canales de atención</h2>
            <p className="contacto-info-sub">
              Atendemos consorcios, administradores, empresas y particulares en
              toda Córdoba.
            </p>

            <ul className="contacto-list">
              {INFO_CONTACTO.map(({ icon: Icon, titulo, valor }) => (
                <li key={titulo}>
                  <Icon size={22} className="c-icon" />
                  <div>
                    <strong>{titulo}</strong>
                    <span>{valor}</span>
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          {/* Formulario */}
          <div className="contacto-form-card">
            {enviado ? (
              <div className="form-success">
                <CheckCircle size={52} className="success-icon" />
                <h3>¡Consulta lista para enviar!</h3>
                <p>
                  Gracias <strong>{formData.nombre}</strong>. Podés enviar tu
                  solicitud directo al WhatsApp de nuestro equipo o realizar otra
                  consulta.
                </p>

                <div className="form-success-actions">
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={handleWhatsAppSend}
                  >
                    <MessageCircle size={18} /> Enviar por WhatsApp
                  </button>
                  <button
                    type="button"
                    className="btn-outline form-reset-btn"
                    onClick={handleReset}
                  >
                    <RotateCcw size={17} /> Nueva consulta
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contacto-form">
                <div className="form-group">
                  <label htmlFor="nombre">
                    Nombre y apellido / Consorcio *
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    name="nombre"
                    required
                    placeholder="Ej: Juan Pérez / Edificio Torre Azul"
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="telefono">Teléfono / WhatsApp *</label>
                    <input
                      id="telefono"
                      type="tel"
                      name="telefono"
                      required
                      placeholder="Ej: 351 123 4567"
                      value={formData.telefono}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="correo@ejemplo.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="servicio">Servicio a cotizar</label>
                  <select
                    id="servicio"
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                  >
                    {SERVICIOS_OPCIONES.map((opcion) => (
                      <option key={opcion} value={opcion}>
                        {opcion}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">Detalle de la consulta *</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows="4"
                    required
                    placeholder="Contanos ubicación, cantidad de paradas o qué trabajo necesitás..."
                    value={formData.mensaje}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary form-submit-btn">
                  Continuar y enviar <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}