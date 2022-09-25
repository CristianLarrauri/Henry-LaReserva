import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import icon from "../images/tournamentIcon_1.png";

export default function About() {
  return (
    <div>
      <button>
        <Link to="/home">
          <p>Volver</p>
        </Link>
      </button>
      <header>
        <span>El dream Team</span>
      </header>
      <div>
        <p>
          Somos un equipo de 8 desarrolladores Full Stack. Para nuestra ultima
          etapa del bootcamp tuvimos como objetivo realizar una web app donde
          los usuarios pudieran registrarse a jugar torneos amateur de futbol.
        </p>
        <p>Contactate con nosotros</p>
      </div>

      <div>
        <p>En este proyecto utilizamos los siguientes tecnologias:</p>
        {/* Buscar logos de todas las tecnologias que usamos y listarlas */}
      </div>
      <div>
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden mt-2">
          <img src={icon} alt="icon" className="h-full w-full" />
        </div>

        <div className="w-9/12">
          <h2 className="text-gray-800 font-bold mb-2">Franco Bosco</h2>

          <div className="flex justify-between font-medium text-gray-800">
            <div className="flex flex-col items-center">
              <a href="https://github.com/FranBosco" target="_blank">
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden mt-2">
          <img src={icon} alt="icon" className="h-full w-full" />
        </div>

        <div className="w-9/12">
          <h2 className="text-gray-800 font-bold mb-2">Cristian Larrauri</h2>

          <div className="flex justify-between font-medium text-gray-800">
            <div className="flex flex-col items-center">
              <a href="https://github.com/CristianLarrauri" target="_blank">
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden mt-2">
          <img src={icon} alt="icon" className="h-full w-full" />
        </div>

        <div className="w-9/12">
          <h2 className="text-gray-800 font-bold mb-2">Braian Garcia</h2>

          <div className="flex justify-between font-medium text-gray-800">
            <div className="flex flex-col items-center">
              <a href="https://github.com/braiangarcia99" target="_blank">
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden mt-2">
          <img src={icon} alt="icon" className="h-full w-full" />
        </div>

        <div className="w-9/12">
          <h2 className="text-gray-800 font-bold mb-2">
            Maximiliano Giagnorio
          </h2>

          <div className="flex justify-between font-medium text-gray-800">
            <div className="flex flex-col items-center">
              <a href="https://github.com/mxgiagnorio" target="_blank">
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden mt-2">
          <img src={icon} alt="icon" className="h-full w-full" />
        </div>

        <div className="w-9/12">
          <h2 className="text-gray-800 font-bold mb-2">Mauro Alós</h2>

          <div className="flex justify-between font-medium text-gray-800">
            <div className="flex flex-col items-center">
              <a href="https://github.com/MauroDavid512" target="_blank">
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden mt-2">
          <img src={icon} alt="icon" className="h-full w-full" />
        </div>

        <div className="w-9/12">
          <h2 className="text-gray-800 font-bold mb-2">Nicolas Carballo</h2>

          <div className="flex justify-between font-medium text-gray-800">
            <div className="flex flex-col items-center">
              <a href="https://github.com/Neiko1210" target="_blank">
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden mt-2">
          <img src={icon} alt="icon" className="h-full w-full" />
        </div>

        <div className="w-9/12">
          <h2 className="text-gray-800 font-bold mb-2">
            Juan Manuel Berraz Montyn
          </h2>

          <div className="flex justify-between font-medium text-gray-800">
            <div className="flex flex-col items-center">
              <a href="https://github.com/BerrazMontyn" target="_blank">
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-9/12">
        <h2 className="text-gray-800 font-bold mb-2">Matias Franco</h2>
        <div className="flex justify-between font-medium text-gray-800">
          <div className="flex flex-col items-center">
            <a href="https://github.com/MatiasFranco289" target="_blank">
              Github
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
