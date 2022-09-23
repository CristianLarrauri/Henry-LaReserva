import React from "react";
import Logo from "../images/logosinfondo.png";
import Nav from "./Nav";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Birra from "../images/Birra.png"
import Cancha from "../images/Captura.PNG"
import Vestuario from "../images/Vestuario.png"


export default function ComplexDetail() {
  return (
    <div>
      {/* <Nav /> */}
      <div className="items-center justify-center flex flex-col z-10">
        <Link to="/home" >
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold mt-[3%] py-2 px-4 rounded-lg ml-5 text-center mb-[-4%]">
            <p>Home</p>
            <p>{"<<"}</p>
        </button>
        </Link>
        <img src={Logo} alt="" className="img-fluid w-[18%] h-[1%] mt-[-2%]" />
      </div>


      {/* CONTAINER MAYOR */}
      <div className="flex container-xl items-center w-full mt-[-5%] mb-5 border-4 justify-between max-h-full z-20">


        {/* CONTAINER VISION */}
        <div className="w-[20%] px-[2%] mb-5 mt-1 py-[3%] items-center flex flex-col container mx-5 border-lime-400 border-2 rounded-lg">
          <h3 className="text-2xl font-mono text-center underline mb-3 mt-5  hover:underline-offset-4">Vision:</h3>
          <p className="text-md font-mono text-center">
            Nuestra vision a largo plazo como empresa dedicada a eventos deportivos
            es ser lideres en diseño, produccion, logistica y supervision en eventos
            sociales y deportivos en La Republica Argentina, ofreciendo a los
            miembros de nuestra comunidad la posibilidad de participar en una amplia
            gama de competiciones y actividades relacionadas al deporte rey sin
            hacer distinción por sus capacidades, edad o sexo.
          </p>
          <div className="mt-5">
            <img src={Birra} alt="fotodelcomplejo" className="mb-1 rounded-lg" />
            {/* reemplazar logo por fotos de vestuario/duchas y alguna cancha */}
          </div>
        </div>

        {/* CONTAINER QUIENES SOMOS? */}
        <div className="mb-[1%] px-[5%] py-[2%] items-center justify-between w-[70%] mx-[3%] border-lime-400 border-2 rounded-lg">
          <div className="px-[5%] ml-3 rounded-lg">
            <img src={Cancha} alt="fotodelcomplejo" className="rounded-lg" />
            {/* reemplazar logo por fotos de vestuario/duchas y alguna cancha */}
          </div>

          <h1 className="text-2xl font-mono text-center underline mb-3 hover:underline-offset-4">¿Quienes somos?</h1>

          <p className="text-md font-mono text-center">
            <a className="underline decoration-lime-600">La Reserva®</a> es un predio deportivo con canchas de fútbol 7
            alfombrado con el mejor cesped sintetico del mercado compuesto de fibra
            de polietileno con tratamiento UV. Contamos con 2 Vestuarios de
            capacidad para 60 personas con 20 duchas y servicio de Guardaropa,
            ademas poseemos un amplio Bar donde podras compartir una bebida o comida
            con tu equipo o rivales. En <a className="underline decoration-lime-600">La Reserva®</a> queremos incentivar
            el tercer tiempo y generar camaraderia entre contrincantes y compañeros
            de equipo. Nuestras competiciones se llevan a cabo dentro de un marco
            distendido y familiar logrando que todos los integrantes se diviertan y
            a la vez participen de un torneo competitivo. Nuestra finalidad ademas
            de ser un proyecto serio y con grandes expectativas es que nuestros
            participantes compartan nuestros valores y continua necesidad de
            superacion, se vive como se juega!
          </p>
        </div>

        {/* CONTAINER LISTA */}
        <div className="w-[20%] text-center font-mono items-center flex flex-col container border-lime-400 border-2 rounded-lg h-[50%] py-[60px]">
          <ul className="flex flex-col justify-between text-xl">
            <li>
              <span>-<a className="underline decoration-lime-600">COMPROMISO</a></span>
            </li>
            <span>-<a className="underline decoration-lime-600">HONESTIDAD</a></span>
            <li>
              <span>-<a className="underline decoration-lime-600">CALIDAD</a></span>
            </li>
            <li>
              <span>-<a className="underline decoration-lime-600">INNOVACION</a></span>
            </li>
          </ul>
          <div>
            <img src={Vestuario} alt="fotodelcomplejo" className="rounded-lg w-full h-[50%] " />
            {/* reemplazar logo por fotos de vestuario/duchas y alguna cancha */}
          </div>
        </div>


      </div>




      <div className="w-full container-xl">
        <Footer />
      </div>

    </div>
  );
}
