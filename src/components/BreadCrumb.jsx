import iconAlbum from "../assets/icon-album.png"
import "../css/bread-crum.css"
const BreadCrumb = () => {
    return (
      <nav
        style={{
          "--bs-breadcrumb-divider": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E")`, 
        }}
        aria-label="breadcrumb"
        className=" breadcrumb-container"
      >
        <ol className="breadcrumb">
          <li className="bread-item-custom-color breadcrumb-item d-flex gap-2 align-items-center">
            <img src={iconAlbum} alt="icon-album" height={15} width={15} />
            <a href="#">Álbumes</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            15/06/2024
          </li>
        </ol>
      </nav>
    );
  };
  
  export default BreadCrumb;
  