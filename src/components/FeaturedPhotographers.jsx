import "bootstrap/dist/css/bootstrap.min.css";
import photographer1 from "../assets/photographer1.png"; 
import photographer2 from "../assets/photographer2.png"; 
import photographer3 from "../assets/photographer3.png"; 
import photographer4 from "../assets/photographer4.png"; 
import locationIcon from "../assets/location.png"; 
import contactIcon from "../assets/contact-icon.png"; 
import jobIcon from "../assets/stars-icon.png"; 
import starFull from "../assets/full-star.png"; 
import starHalf from "../assets/half-star.png"; 
import starEmpty from "../assets/empty-star.png"; 

// funcionalidad css de revelacion de contenido responsive
import "../css/feature-photographer.css"

const Photographers = () => {
  const photographers = [
    { name: "Paula Pérez", location: "Buenos Aires, CABA", job: "Tienda de mascotas", img: photographer1, valoration: 2.5 },
    { name: "Pedro Fuentes", location: "Buenos Aires, CABA", job: "Eventos", img: photographer2, valoration: 3.5 },
    { name: "Patricio Funes", location: "Buenos Aires, CABA", job: "Fundación rescate", img: photographer3, valoration: 4.5 },
    { name: "Macarena Ramirez", location: "La Plata, GBA", job: "Bicho feliz fundación", img: photographer4, valoration: 5 },
  ];

  // funcionalidad para dar estrellas dependiendo la valoracion que tengan los usuarios
  const renderStars = (valoration) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(valoration)) {
        stars.push(<img key={i} src={starFull} alt="Star full" style={{ width: "16px", height: "16px" }} />);
      } else if (i === Math.ceil(valoration) && valoration % 1 !== 0) {
        stars.push(<img key={i} src={starHalf} alt="Star half" style={{ width: "16px", height: "16px" }} />);
      } else {
        stars.push(<img key={i} src={starEmpty} alt="Star empty" style={{ width: "16px", height: "16px" }} />);
      }
    }
    return stars;
  };

  return (
    <div className="mt-5">
      <h2 className="feature-photographers-title">Fotógrafos destacados</h2>

      <div className="photographers-carousel mt-5 mb-5 d-flex flex-nowrap">
        {photographers.map((photographer, index) => (
          <div key={index} className="custom-card-photographers card py-4 shadow mx-2">
            <img
              height="80px"
              width="80px"
              className="mx-auto rounded-circle object-fit-cover"
              src={photographer.img}
              alt={photographer.name}
            />
            <div className="card-body text-center">
              <h5 className="card-title m-0">{photographer.name}</h5>
              <ul className="list-unstyled mt-2 mb-1">
                <li className="d-flex justify-content-center align-items-center">
                  <img src={locationIcon} alt="Location icon" className="me-2" style={{ width: "16px", height: "16px" }} />
                  {photographer.location}
                </li>
                <li className="d-flex justify-content-center align-items-center">
                  <img src={jobIcon} alt="Job icon" className="me-2" style={{ width: "16px", height: "16px" }} />
                  {photographer.job}
                </li>
              </ul>
              <div className="d-flex justify-content-center align-items-center">
                {renderStars(photographer.valoration)}
              </div>
              <button className="btn btn-light d-flex justify-content-center align-items-center mx-auto mt-3">
                <img src={contactIcon} alt="Contact icon" className="me-2" style={{ width: "16px", height: "16px" }} />
                Contactar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photographers;
