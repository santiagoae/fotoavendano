import React from "react";
import Nav from "../components/Nav";
const Home = () => {
  return (
    <div className="contenedor">
      <span className="main"></span>
      <span className="footer bg-dark">
        <h5>
          <a href="https://www.instagram.com/foto_avendano/" target="_blank">
            <img
              src="https://cdn.pixabay.com/photo/2021/06/15/12/17/instagram-6338401_960_720.png"
              alt="Logo IG"
              
            />
          </a>
          @foto_avendano
        </h5>
        <h5>
          <a
            href="https://wa.me/573103928136?text=Hola%2C%20quisiera%20saber%20"
            target="_blank"
          >
            <img
              src="https://es.logodownload.org/wp-content/uploads/2018/10/whatsapp-logo-11.png"
              alt="Logo Wpp"
              
            />
          </a>
          310 392 8136
        </h5>
        <h5>
          <img
            src="https://cdn-icons-png.flaticon.com/512/281/281769.png"
            alt="Logo Correo"
            
          />
          fotoavendano@gmail.com
        </h5>
      </span>
    </div>
  );
};

export default Home;
