import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import "../css/footer.css"
const Footer = () => {
  return (
    <>
      <div className="footer-d">
        <div className="footer-desk">
        <div className="footer-logo">
          <h4>LOGO</h4>
        </div>
        <ul>
          <li>Inicio</li>
          <li>Quiénes somos</li>
          <li>Mi perfil</li>
          <li>Mis compras</li>
          <li>Ayuda</li>
        </ul>
        <div className="captcha-social">
          <div className="custom-position">
            <p>Protegido por <span>reCAPTCHA Privacidad Condiciones</span></p>
            <img src={instagram} height={24} width={24} alt="instagram" />
            <img src={facebook} height={24} width={24} alt="facebook" />
          </div>
        </div>
      </div>
        </div>
    {/* footer version mobile */}
      <div className="footer-mobile">
        <p className="m-1">
          Cómo cuidamos tu privacidad <span>Copyright © 1999-2024 Photeala S.R.L.</span>
        </p>
        <p className="m-1">Protegido por <span>reCAPTCHA Privacidad Condiciones</span></p>
      </div>
    </>
  );
};

export default Footer;
