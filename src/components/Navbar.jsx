const Navbar = () => {
  return (
    // <!-- Navbar -->
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-2">
      {/* <!-- navbar/brand --> */}
      <a href="#" className="navbar-brand d-flex align-items-center">
        <span className="bg-logo text-white p-1 px-3">Logo</span>
      </a>
    
      {/* <!-- Button for responsive collapse (hamburger icon) --> */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      {/* <!-- navbar/collapse --> */}
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="color-nav-items navbar-nav d-flex align-items-center gap-3">
          <li className="custom-hover nav-item mx-2">
            <a className="nav-link" href="#">Inicio</a>
          </li>
          <li className="custom-hover nav-item mx-2">
            <a className="nav-link" href="#">Quiénes somos</a>
          </li>
          <li className="custom-hover nav-item mx-2">
            <a className="nav-link" href="#">Ayuda</a>
          </li>
          <li className="custom-hover nav-item mx-2">
            <a className="nav-link" href="#">Mis compras</a>
          </li>
    
          {/* <!-- User menu with dropdown --> */}
          <li className="nav-item dropdown mx-2">
            <a 
              className="nav-link dropdown-toggle d-flex align-items-center"
              href="#" id="userMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false"
            >
              <span className="wrapper-color me-2 rounded-circle p-2">DS</span>
              Delfina
            </a>
            <ul className="dropdown-menu" aria-labelledby="userMenu">
              <li className="custom-hover"><a className="dropdown-item" href="#">Perfil</a></li>
              <li className="custom-hover"><a className="dropdown-item" href="#">Configuración</a></li>
              <li className="custom-hover"><a className="dropdown-item" href="#">Cerrar sesión</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    
  );
};

export default Navbar;
