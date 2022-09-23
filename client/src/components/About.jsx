import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

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
        <div>
          <p>
            {" "}
            Franco Bosco
            <span>Full Stack Developer</span>
          </p>
          <div>
            <a href="https://github.com/FranBosco" target="_blank">
              Github
            </a>

            <a href="https://www.linkedin.com/in/??/" target="_blank">
              Linkedin
            </a>
          </div>
        </div>

        <div>
          <p>
            {" "}
            Cristian Larrauri
            <span>Full Stack Developer</span>
          </p>
          <div>
            <a href="https://github.com/CristianLarrauri" target="_blank">
              Github
            </a>

            <a href="https://www.linkedin.com/in/??/" target="_blank">
              Linkedin
            </a>
          </div>
        </div>

        <div>
          <p>
            {" "}
            Braian Emanuel Garcia
            <span>Full Stack Developer</span>
          </p>
          <div>
            <a href="https://github.com/braiangarcia99" target="_blank">
              Github
            </a>

            <a href="https://www.linkedin.com/in/??/" target="_blank">
              Linkedin
            </a>
          </div>
        </div>

        <div>
          <p>
            {" "}
            Maximiliano Giagnorio
            <span>Full Stack Developer</span>
          </p>
          <div>
            <a href="https://github.com/mxgiagnorio" target="_blank">
              Github
            </a>

            <a
              href="https://www.linkedin.com/in/maximiliano-giagnorio/"
              target="_blank"
            >
              Linkedin
            </a>
          </div>
        </div>

        <div>
          <p>
            {" "}
            Mauro Alós
            <span>Full Stack Developer</span>
          </p>
          <div>
            <a href="https://github.com/MauroDavid512" target="_blank">
              Github
            </a>

            <a href="https://www.linkedin.com/in/??/" target="_blank">
              Linkedin
            </a>
          </div>
        </div>

        <div>
          <p>
            {" "}
            Nicolas Carballo
            <span>Full Stack Developer</span>
          </p>
          <div>
            <a href="https://github.com/Neiko1210" target="_blank">
              Github
            </a>

            <a
              href="https://www.linkedin.com/in/nicolas-carballo-5265a422b/"
              target="_blank"
            >
              Linkedin
            </a>
          </div>
        </div>

        <div>
          <p>
            {" "}
            Juan Manuel Berraz Montyn
            <span>Full Stack Developer</span>
          </p>
          <div>
            <a href="https://github.com/BerrazMontyn" target="_blank">
              Github
            </a>

            <a
              href="https://www.linkedin.com/in/juan-manuel-berraz-montyn-b25962194/"
              target="_blank"
            >
              Linkedin
            </a>
          </div>
        </div>

        <div>
          <p>
            {" "}
            Matias Franco
            <span>Full Stack Developer</span>
          </p>
          <div>
            <a href="https://github.com/MatiasFranco289" target="_blank">
              Github
            </a>

            <a href="https://www.linkedin.com/in/??/" target="_blank">
              Linkedin
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
