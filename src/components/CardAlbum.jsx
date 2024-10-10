import bannerImage from "../assets/diana-macesanu-FoY0-gwa9N4-unsplash.jpg";
import userImage from "../assets/smart-prf4NsEctEA-unsplash.jpg";
import iconAlbum from "../assets/icon-album.png";
import camera from "../assets/camera.png";
import location from "../assets/location.png";
import star from "../assets/star.png";
import cart from "../assets/cart.png";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAllImagesToCart, countElementsInCart } from "../store/cartSlice";
import "../css/card-album.css"

const CardAlbum = () => {
  const [buttonStatus, setButtonStatus] = useState(false);
  const dispatch= useDispatch()
  const countImages = useSelector((state) => state.cartReducer.elements);
  const images = useSelector((state) => state.imageReducer.images);


  // cuando se agreguen todos los elementos se desactiva el boton
  useEffect(() => {
    if (countImages === images.length && images.length > 0) {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
    }
  }, [countImages, images]);


  const handleAddAllImages=()=>{
    dispatch(addAllImagesToCart(images))
    dispatch(countElementsInCart("all"))
  }
  
  return (
    <div className="card-album card ">
      {/* BANNER ALBUM*/}
      <div className="custom-banner position-relative w-100">
        <img
          src={bannerImage}
          alt="banner-Image"
          height="158px"
          className="object-fit-cover w-100 rounded"
        />
        <img
          src={userImage}
          alt="user-Image"
          height="112px"
          width="112px"
          className="custom-position-image position-absolute  rounded-circle object-fit-cover"
        />
      </div>
      {/* INFO CARD */}
      <div className="custom-card-body card-body ">
        <h5 className="custom-card-title card-title">Expo mascotas 2024</h5>
        <div className="mt-5 d-flex align-items-center gap-1 justify-content-center">
          <img src={camera} height={12} />
          <p className="custom-color card-text">Juan Bianchi</p>
        </div>
        <div className="d-flex align-items-center gap-1 justify-content-center">
          <img src={location} height={12} />
          <p className="custom-card-text card-text">
            Centro de covenciones, Bariloche
          </p>
        </div>
        <div className="d-flex justify-content-center gap-3">
          <div className="d-flex align-items-center gap-1">
            <img src={iconAlbum} height={12} className="custom-color-image" />
            <p className="m-0 custom-card-text card-text">12 fotos</p>
          </div>

          <p className="card-text m-0 custom-date-color">Exp. 15/06/2024</p>
        </div>
      </div>

      <div className="d-flex gap-4 mt-5 justify-content-center w-100 p-1">
        <div className="d-flex align-items-center">
          <button className="btn custom-button-star d-flex align-items-center gap-1">
            <img src={star} alt="star" height={12} />
            Calificar
          </button>
        </div>

        <div className="d-flex align-items-center">
          {/* Boton funcional (se deshabilita cuando todo los elementos quedan seleccionados) */}
          <button
            disabled={buttonStatus}
            onClick={handleAddAllImages}
            className="btn custom-button-cart d-flex align-items-center justify-content-center gap-2"
          >
            <img src={cart} alt="star" height={12} />
            Agregar todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardAlbum;
