import { useState } from 'react';
import { useSelector } from 'react-redux';
import cart from '../assets/cart.png';
import "../css/navbar.css"
const Navbar = () => {
  const cartData = useSelector((state) => state.cartReducer.cart);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle para el dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Toggle para el menú hamburguesa en mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar-content navbar navbar-expand-lg navbar-light bg-white fixed-top">
      {/* <!-- Brand Logo --> */}
      <a href="#" className="custom-padding-brand navbar-brand d-flex align-items-center m-0">
        <span className="bg-logo text-white p-1 px-3">Logo</span>
      </a>

      {/* <!-- Carrito de compras y menu hamburguesa en version mobile --> */}
      <div className="d-flex align-items-center d-lg-none">
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMobileMenu}
          aria-controls="navbarNav" 
          aria-expanded={isMobileMenuOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <li className="nav-item px-3 position-relative list-group-item">
          <img src={cart} height={25} width={25} alt="cart" className="custom-cart-navbar" />
          {cartData.length > 0 && (
            <span className="cart-navbar-notification">{cartData.length}</span>
          )}
        </li>
      </div>

      {/* <!-- Contenido de Navbar en version Escritorio --> */}
      <div className={`navbar-content collapse navbar-collapse justify-content-end p-0 ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
        <ul className="color-nav-items navbar-nav d-flex align-items-center gap-1">
          <li className="custom-hover list-group-item nav-item">
            <a className="nav-link" href="#">Inicio</a>
          </li>
          <li className="custom-hover list-group-item nav-item">
            <a className="nav-link" href="#">Quiénes somos</a>
          </li>
          <li className="custom-hover list-group-item nav-item">
            <a className="nav-link" href="#">Ayuda</a>
          </li>
          <li className="custom-hover list-group-item nav-item">
            <a className="nav-link" href="#">Mis compras</a>
          </li>

          {/* <!-- User Dropdown Menu in Desktop --> */}
          <li className={ `custom-hover list-group-item nav-item dropdown ${isDropdownOpen ? 'show' : ''} d-none d-lg-block`}>
            <a 
              className=" nav-link dropdown-toggle d-flex align-items-center"
              href="#" id="userMenu" role="button" aria-expanded="false" onClick={toggleDropdown}
            >
              <span className="wrapper-color me-2 rounded-circle p-2">DS</span>
              Delfina
            </a>
            <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="userMenu">
              <li className="custom-hover list-group-item"><a className="dropdown-item" href="#">Perfil</a></li>
              <li className="custom-hover list-group-item"><a className="dropdown-item" href="#">Configuración</a></li>
              <li className="custom-hover list-group-item"><a className="dropdown-item" href="#">Cerrar sesión</a></li>
            </ul>
          </li>

          {/* <!-- Carrito de compras en version escritorio --> */}
          <li className="nav-item px-3 position-relative d-none d-lg-block">
            <img src={cart} height={25} width={25} alt="cart" className="custom-cart-navbar" />
            {cartData.length > 0 && (
              <span className="cart-navbar-notification">{cartData.length}</span>
            )}
          </li>
        </ul>
        
        {/* <!-- Integracion de contenido de el dropdown (de version escritorio) en contenido de navbar (todo junto) --> */}
        <ul className={`navbar-nav d-lg-none ${isMobileMenuOpen ? 'show' : 'collapse'}`}>
          <li className="custom-hover list-group-item nav-item">
            <a className="nav-link" href="#">Perfil</a>
          </li>
          <li className="custom-hover list-group-item nav-item">
            <a className="nav-link" href="#">Configuración</a>
          </li>
          <li className="custom-hover list-group-item nav-item">
            <a className="nav-link" href="#">Cerrar sesión</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
