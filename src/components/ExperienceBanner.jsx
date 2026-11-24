import './ExperienceBanner.css';

const BANNER_IMAGE =
  'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=80';

export default function ExperienceBanner() {
  return (
    <section className="experience-banner">
      <div className="experience-left" data-aos="fade-right">
        <div className="experience-text-wrapper">
          <h2 className="experience-title">
            Experiencia que se construye en cada{' '}
            <span className="experience-highlight">proyecto</span>
          </h2>
          <div className="experience-line"></div>
          <p className="experience-desc">
            Tecnología, seguridad y un equipo profesional para brindarte el
            mejor servicio.
          </p>
        </div>
      </div>

      <div className="experience-diagonal"></div>

      <div
        className="experience-image"
        data-aos="fade-left"
        style={{ backgroundImage: `url(${BANNER_IMAGE})` }}
      ></div>
    </section>
  );
}