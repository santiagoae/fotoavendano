import b1 from "../assets/BAUTIZOS/b1.JPG";
import b2 from "../assets/BAUTIZOS/b2.JPG";
import b3 from "../assets/BAUTIZOS/b3.JPG";
import b4 from "../assets/BAUTIZOS/b4.JPG";
import b5 from "../assets/BAUTIZOS/b5.JPG";
import b6 from "../assets/BAUTIZOS/b6.JPG";

function Bautizos(props) {
  return (
    <div className="contenedor-bautizos">
      <div>
        <img src={b1} alt="foto" />
      </div>
      <div>
        <img src={b2} alt="foto" />
      </div>
      <div>
        <img src={b3} alt="foto" />
      </div>
      <div>
        <img src={b4} alt="foto" />
      </div>
      <div>
        <img src={b5} alt="foto" />
      </div>
      <div>
        <img src={b6} alt="foto" />
      </div>
    </div>
  );
}

export default Bautizos;
