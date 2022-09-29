import React from "react";
import Logo from "../images/logosinfondo.png";
import Nav from "./Nav";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Birra from "../images/Birra.png"
import Cancha1 from "../images/Cancha001.jpg"
import Cancha2 from "../images/Cancha002.jpg"
import Cancha3 from "../images/Cancha003.jpg"
import Brindis1 from "../images/Brindis_001.jpg"
import Brindis2 from "../images/Brindis_002.jpg"
import Brindis3 from "../images/Brindis_003.jpg"
import Vestuario1 from "../images/Vestuario_001.jpg"
import Vestuario2 from "../images/Vestuario_002.jpg"
import Vestuario3 from "../images/Vestuario_003.jpg"
import { useEffect } from "react";
import { useState } from "react";


export default function ComplexDetail() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if(offset > 800){setOffset(0)}else{setOffset(offset+800)}
    },3000);
  },[offset])


  return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center bg-white text-center">
      <Nav/>
      <div className=" w-full text-center">
        <h1 className="text-gray-700 text-3xl font-bold mt-6">Detalles del complejo</h1>
      </div>

      <div className="w-full flex flex-col justify-around items-center
      2xl:flex-row mt-8">
        
        {/*Vestuario/Brindis wrapper*/}
        <div className="flex w-9/12 justify-around flex-col-reverse
        2xl:flex-row items-center text-left">
          {/*Brindis section*/}
          <div className="max-w-[320px] p-3 m-3">
            <p className="text-gray-700 text-lg">
              Nuestra vision a largo plazo como empresa dedicada a eventos deportivos
              es ser lideres en diseño, produccion, logistica y supervision en eventos
              sociales y deportivos en La Republica Argentina, ofreciendo a los
              miembros de nuestra comunidad la posibilidad de participar en una amplia
              gama de competiciones y actividades relacionadas al deporte rey sin
              hacer distinción por sus capacidades, edad o sexo.
            </p>

            
            <div className="w-[300px] overflow-hidden mt-6">
              <div className={`flex translate-x-[-${offset/2-offset/8}px] duration-300`}>
                <img src={Brindis1} alt='Brindis.jpg' />
                <img src={Brindis2} alt='Brindis.jpg' />
                <img src={Brindis3} alt='Brindis.jpg' />
              </div>
            </div>
          </div>

          {/*middle section*/}
          <div className="max-w-[820px] p-3 m-3 flex flex-col items-center">
            
            <div className="w-[300px] h-[400px] flex overflow-hidden lg:w-[800px]
            sm:w-[600px]">
              <div className={`flex translate-x-[-${offset}px] duration-300`}>
                <img className="min-w-[800px] h-full" src={Cancha1} alt="cancha.png" />
                <img className="min-w-[800px] h-full" src={Cancha2} alt="cancha.png" />
                <img className="min-w-[800px] h-full" src={Cancha3} alt="cancha.png" />
              </div>
            </div>

            <p className="text-gray-700 text-lg mt-3">
              <a>La Reserva®</a> es un predio deportivo con canchas de fútbol 7
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
        </div>
        
        {/*Vestuario section*/}
        <div>

        </div>
          <div className="bg-blue-300 w-[200px] h-[600px] overflow-hidden m-3">
            <div className={`flex w-[200px] h-full translate-x-[-${offset/4}px] duration-300`}>
              <img className="w-full h-full" src={Vestuario1} alt="vestuario.png" />
              <img className="w-full h-full" src={Vestuario2} alt="vestuario.png" />
              <img className="w-full h-full" src={Vestuario3} alt="vestuario.png" />
            </div>
          </div>

      </div>

      <Footer/>
    </div>
  );
}



