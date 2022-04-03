import "./styles/App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Nav";
import Comuniones from "./components/Comuniones";
import Grados from "./components/Grados"
import Bautizos from "./components/Bautizos"
import Matrimonios from "./components/Matrimonios";
import Quinces from "./components/Quinces";
import Publicitarias from "./components/Publicitarias";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/comuniones" element={<Comuniones />} />
        <Route path="/bautizos" element={<Bautizos />} />
        <Route path="/grados" element={<Grados />} />
        <Route path="/matrimonios" element={<Matrimonios />}/>
        <Route path="/15s" element={<Quinces />}/>
        <Route path="/publicitarias" element={<Publicitarias />}/>
      </Routes>
    </Router>
  );
}

export default App;
