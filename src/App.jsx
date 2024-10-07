import BreadCrumb from "./components/BreadCrumb";
import Navbar from "./components/Navbar";
import "./styles.css";

function App() {

  return (
    <div className="container border vh-100">
     <Navbar />
     <BreadCrumb />
    </div>
  );
}

export default App
