import React from "react";
import Logo from "../images/LaReservaLogo.png";
import Nav from "./Nav";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export default function ComplexDetail() {
  return (
    <div>
      <Nav />
      <button>
        <Link to="/home" className="flex justify-center items-center">
          <IoIosArrowBack />
          <p>Volver</p>
        </Link>
      </button>
      <h1>sobre Nosotros</h1>
      <p>
        <span>La Reserva® </span> es un predio deportivo con canchas de fútbol 7
        alfombrado con el mejor cesped sintetico del mercado compuesto de fibra
        de polietileno con tratamiento UV. Contamos con 2 Vestuarios de
        capacidad para 60 personas con 20 duchas y servicio de Guardaropa,
        ademas poseemos un amplio Bar donde podras compartir una bebida o comida
        con tu equipo o rivales. En <span>La Reserva®</span> queremos incentivar
        el tercer tiempo y generar camaraderia entre contrincantes y compañeros
        de equipo. Nuestras competiciones se llevan a cabo dentro de un marco
        distendido y familiar logrando que todos los integrantes se diviertan y
        a la vez participen de un torneo competitivo. Nuestra finalidad ademas
        de ser un proyecto serio y con grandes expectativas es que nuestros
        participantes compartan nuestros valores y continua necesidad de
        superacion, <span>se vive como se juega!</span>
      </p>
      <div>
        <img src={Logo} alt="fotodelcomplejo" />
        {/* reemplazar logo por fotos de vestuario/duchas y alguna cancha */}
      </div>
      <h3>Vision:</h3>
      <p>
        NUESTRA VISION a largo plazo como empresa dedicada a eventos deportivos
        es ser lideres en diseño, produccion, logistica y supervision en eventos
        sociales y deportivos en La Republica Argentina, ofreciendo a los
        miembros de nuestra comunidad la posibilidad de participar en una amplia
        gama de competiciones y actividades relacionadas al deporte rey sin
        hacer distinción por sus capacidades, edad o sexo.
      </p>
      <div>
        <img src={Logo} alt="fotodelcomplejo" />
        {/* reemplazar logo por fotos de vestuario/duchas y alguna cancha */}
      </div>
      <ul>
        <li>
          <span>COMPROMISO</span>
        </li>
        <li>HONESTIDAD</li>
        <li>
          <span>CALIDAD</span>
        </li>
        <li>
          <span>INNOVACION</span>
        </li>
      </ul>
      <div>
        <img src={Logo} alt="fotodelcomplejo" />
        {/* reemplazar logo por fotos de vestuario/duchas y alguna cancha */}
      </div>
      <Footer />
    </div>
  );
}
