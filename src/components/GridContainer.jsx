import { useState, useEffect } from "react";
import cartIcon from "../assets/cart.png"; // Cambia la ruta al icono de carrito
import grid1 from "../assets/grid1.png";
import grid2 from "../assets/grid2.png";
import grid3 from "../assets/grid3.png";
import grid4 from "../assets/grid4.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addImagesToCart,
  countElementsInCart,
  removeImageToCart,
} from "../store/cartSlice";
import "../css/grid-container.css"

const GridContainer = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  const images = useSelector((state) => state.imageReducer.images);
  const count = useSelector((state) => state.cartReducer.elements);
  const dispatch = useDispatch();
  const [gridSize, setGridSize] = useState(4); // Por defecto, 4 fotos por fila
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Define si estamos en mobile
      if (window.innerWidth < 768 && gridSize > 3) {
        setGridSize(3); // Limitar el gridSize en mobile
      }
    };
    handleResize(); // Ejecutar al cargar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [gridSize]);

  const handleGridChange = (e) => {
    setGridSize(Number(e.target.value));
  };

  const handleAddToCart = (image) => {
    // si ya existe el elemento en el selector que lo quite
    // si no esta añadirlo al select
    let idElementsInCart = cart.map((el)=> el.id)
    if (idElementsInCart.includes(image.id)) {
      dispatch(countElementsInCart("decrement"));
      dispatch(removeImageToCart(image.id));
    } else {
      dispatch(countElementsInCart("increment"));
      dispatch(addImagesToCart(image));
    }
  };


  return (
    <div className="mt-4 custom-grid-container">
      {/* Selector de tipo de grilla */}
      <div className="range d-flex justify-content-between align-items-center mb-3">
        <p className="m-0">Seleccionado: {count}</p>
        <div className="d-flex gap-3">
          {!isMobile && <p className="m-0">Ver como:</p>}
          <div
            className={`range-container ${
              window.innerWidth < 768 ? "no-rtl" : "rtl"
            }`}
          >
            <input
              value={gridSize}
              onChange={handleGridChange}
              type="range"
              min="1"
              max={isMobile ? "3" : "4"} // Cambiar el rango máximo en móvil
              step="1"
              className="range-slider"
            />
            <div className="range-marks">
              <div className="range-marks">
                <span
                  className="mark"
                  style={{
                    left: "1%",
                    border: `${
                      gridSize === 1 ? "3px solid #E68573" : "2px solid #DEE2E6"
                    }`,
                  }}
                ></span>
                <span
                  className="mark"
                  style={{
                    left: `${isMobile === false ? "32%" : "46.5%"}`,
                    border: `${
                      gridSize === 2 ? "3px solid #E68573" : "2px solid #DEE2E6"
                    }`,
                  }}
                ></span>
                <span
                  className="mark"
                  style={{
                    left: `${isMobile === false ? "62.2%" : "91%"}`,
                    border: `${
                      gridSize === 3 ? "3px solid #E68573" : "2px solid #DEE2E6"
                    }`,
                  }}
                ></span>
                {isMobile === false && (
                  <span
                    className="mark"
                    style={{
                      left: "93%",
                      border: `${
                        gridSize === 4
                          ? "3px solid #E68573"
                          : "2px solid #DEE2E6"
                      }`,
                    }}
                  ></span>
                )}{" "}
                {/* Ocultar marca 4 en mobile */}
              </div>
            </div>
            <div className="range-icons">
              <img
                src={grid1}
                alt="grid-1"
                height={9}
                width={14}
                className="object-fit-contain"
              />
              <img
                src={grid2}
                alt="grid-2"
                height={9}
                width={14}
                className="object-fit-contain"
              />
              <img
                src={grid3}
                alt="grid-3"
                height={9}
                width={14}
                className="object-fit-contain"
              />
              {isMobile === false && (
                <img
                  src={grid4}
                  alt="grid-4"
                  height={9}
                  width={14}
                  className="object-fit-contain"
                />
              )}{" "}
              {/* Ocultar icono 4 en mobile */}
            </div>
          </div>
        </div>
      </div>

      {/* Galería de imágenes */}
      <div className="gallery-container">
        <div
          className="gallery-grid"
          style={{
            gridTemplateColumns: `repeat(${gridSize}, 1fr)`, // Número dinámico de columnas
            justifyContent: "center",
          }}
        >
          {images?.map((img) => {
            let idElementsInCart = cart.map((el)=> el.id)
            
            return (
              <div key={img.id}>
                <div className="card-image position-relative shadow-sm">
                  <img
                    src={img.url}
                    alt={`img-${img.id}`}
                    className="custom-image"
                  />
                  <img
                    src={cartIcon}
                    alt="Carrito"
                    className={`cart-icon position-absolute ${
                      idElementsInCart.includes(img.id) ? "cart-selected" : ""
                    }`}
                    onClick={() => {
                      handleAddToCart(img);
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GridContainer;
