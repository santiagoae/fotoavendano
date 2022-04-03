import f1 from "../assets/BODAS/1.jpg";
import f2 from "../assets/BODAS/2.jpg";
import f3 from "../assets/BODAS/3.jpg";
import f4 from "../assets/BODAS/4.jpg";

import f6 from "../assets/BODAS/5.jpg";
import f8 from "../assets/BODAS/7.jpg";

function Matrimonios(props) {
  return (
    <div className="contenedor-matrimonios">
      <div>
        <img src={f6} alt="..." />
      </div>
      
      <div>
        <img src={f8} alt="..." />
      </div>
      <div>
        <img src={f1} alt="..." />
      </div>
      <div>
        <img src={f2} alt="..." />
      </div>
      <div>
        <img src={f3} alt="..." />
      </div>
      <div>
        <img src={f4} alt="..." />
      </div>
      
    </div>
  );
}

export default Matrimonios;
