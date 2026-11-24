import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronRight, ChevronDown, Settings } from 'lucide-react';
import './Navbar.css';

const SERVICE_LINKS = [
  { label: 'Mantenimiento de ascensores', hash: '#mantenimiento' },
  { label: 'Reparaciones y modernizaciones', hash: '#reparaciones' },
  { label: 'Venta de equipos', hash: '#venta' },
  { label: 'Electricidad y control de acceso', hash: '#electricidad' },
  { label: 'Portones automáticos', hash: '#portones' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="navbar" onMouseLeave={() => setDropdownOpen(false)}>
      <div className="container navbar-container">
        {/* LOGO */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-icon-mobile">
            <Settings size={34} strokeWidth={2.2} />
          </div>
          <div className="logo-divider-desktop"></div>
          <div className="logo-text">
            <span className="logo-title">NÚCLEO</span>
            <span className="logo-subtitle">ASCENSORES</span>
          </div>
        </Link>

        {/* LINKS DESKTOP */}
        <nav className="navbar-links-desktop">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={closeMenu}
          >
            Inicio
          </NavLink>

          <div
            className="nav-dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
          >
            <NavLink
              to="/servicios"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={closeMenu}
            >
              Servicios <ChevronDown size={15} />
            </NavLink>

            {dropdownOpen && (
              <div className="dropdown-menu">
                {SERVICE_LINKS.map((item) => (
                  <Link
                    key={item.hash}
                    to={`/servicios${item.hash}`}
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/empresa"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={closeMenu}
          >
            La empresa
          </NavLink>

          <NavLink
            to="/proyectos"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={closeMenu}
          >
            Proyectos
          </NavLink>

          <NavLink
            to="/contacto"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={closeMenu}
          >
            Contacto
          </NavLink>
        </nav>

        {/* CTA DESKTOP */}
        <div className="navbar-cta-desktop">
          <Link to="/contacto" className="btn-primary" onClick={closeMenu}>
            Solicitar presupuesto <ChevronRight size={18} />
          </Link>
        </div>

        {/* BOTÓN HAMBURGUESA MOBILE */}
        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Abrir menú">
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MENÚ DESPLEGABLE MOBILE */}
      {menuOpen && (
        <nav className="navbar-mobile-drawer">
          <NavLink to="/" end onClick={closeMenu}>Inicio</NavLink>
          <NavLink to="/servicios" onClick={closeMenu}>Servicios</NavLink>
          <NavLink to="/empresa" onClick={closeMenu}>La empresa</NavLink>
          <NavLink to="/proyectos" onClick={closeMenu}>Proyectos</NavLink>
          <NavLink to="/contacto" onClick={closeMenu}>Contacto</NavLink>
          <Link to="/contacto" className="btn-primary mobile-cta" onClick={closeMenu}>
            Solicitar presupuesto <ChevronRight size={18} />
          </Link>
        </nav>
      )}
    </header>
  );
}