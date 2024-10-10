import BreadCrumb from "./components/BreadCrumb";
import CardAlbum from "./components/CardAlbum";
import Navbar from "./components/Navbar";

import "./styles.css";
import GridContainer from "./components/GridContainer";
import { images } from "./utils/images";
import FeaturedPhotographers from "./components/FeaturedPhotographers";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { setImages } from "./store/imageSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setImages(images))
  },[])
 
  return (
    <div className="container-fluid p-0">
     <Navbar />
     <BreadCrumb />
     <CardAlbum />
     <GridContainer/>
     <FeaturedPhotographers />
     <Footer />
    </div>
  );
}

export default App
