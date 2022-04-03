import g1 from "../assets/GRADOS/g1.jpg";
import g2 from "../assets/GRADOS/g2.jpg";
import g3 from "../assets/GRADOS/g3.jpg";
import g4 from "../assets/GRADOS/g4.jpg";
import g5 from "../assets/GRADOS/g6.jpg";
import g7 from "../assets/GRADOS/g7.jpg";

function Grados(props) {
  return (
    <div className="contenedor-grados">
      <div>
        <img src={g1} alt="foto" />
      </div>
      <div>
        <img src={g2} alt="foto" />
      </div>
      <div>
        <img src={g3} alt="foto" />
      </div>
      <div>
        <img src={g4} alt="foto" />
      </div>
      <div>
        <img src={g5} alt="foto" />
      </div>
      <div>        
        <img src={g7} alt="foto" />
      </div>
    </div>
  );
}

export default Grados;
