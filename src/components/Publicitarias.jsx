import f1 from "../assets/PUBLICITARIA/1.png";
import f2 from "../assets/PUBLICITARIA/2.jpg";
import f3 from "../assets/PUBLICITARIA/3.jpg";

function Publicitarias(props) {
  return (
    <div className="contenedor-quinces">
      <div>
        <img src={f2} alt="..." />
      </div>
      <div>
        <img src={f1} alt="..." />
      </div>

      <div>
        <img src={f3} alt="..." />
      </div>
    </div>
  );
}

export default Publicitarias;
