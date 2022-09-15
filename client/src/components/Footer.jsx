import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="container mx-auto bg-slate-300 ">
      <div className="grid grid-cols-3 gap-2 justify-center">
        <div className=" mx-auto">
          <h5 className="text-2xl">Nosotros</h5>
          <ul>
            <li>
              <a className="underline" href="">
                El complejo
              </a>
            </li>
            <li>
              <a className="underline" href="">
                Contactanos
              </a>
            </li>
          </ul>
        </div>
        <div className=" mx-auto">
          <h5 className="text-2xl">Menu</h5>
          <ul>
            <li>
              <a className="underline" href="">
                Torneo
              </a>
            </li>
            <li>
              <a className="underline" href="">
                Inscripcion
              </a>
            </li>
          </ul>
        </div>
        <div className="grid">
          <h5 className="text-2xl">Seguinos!</h5>
          <ul>
            <li>
              {" "}
              <a
                href="https://www.instagram.com
"
              ></a>
              <FontAwesomeIcon icon={faInstagram} />
            </li>
            <li>
              <a href="https://www.w3schools.com/" />
              <FontAwesomeIcon
                icon={faFacebook}
                href="https://www.instagram.com"
              />
            </li>
            <li>
              <a href="https://www.w3schools.com/" />
              <FontAwesomeIcon icon={faTwitter} />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center content-center bg-green-400 ">
        <p>
          &copy;{new Date().getFullYear()} by Los Magios | All Rights Reserved
        </p>
      </div>
    </div>
  );
}
