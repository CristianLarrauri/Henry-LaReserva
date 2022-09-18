import { React, Fragment } from "react";
import Logo from "../images/LaReservaLogo.png";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { BiDownArrow } from "react-icons/bi";

export default function Nav() {
  return (
    <div className="flex flex-col justify-between items-center w-full bg-white xl:flex-row border-b-8">
      <div>
        <Link to="/home">
          <img src={Logo} alt="logo.png" />
        </Link>
      </div>

      <div className="w-9/12 flex justify-center ml-6 flex-wrap items-center xl:justify-between xl:flex-nowrap">
        <div className="flex justify-between mt-3">
          <Link
            to="/tournaments"
            className="text-stone-400 text-2xl mr-10 hover:text-green-500"
          >
            Torneos
          </Link>
          <Link
            to="/inscription"
            className="text-stone-400 text-2xl hover:text-green-500"
          >
            Inscripciones
          </Link>
        </div>

        <SearchBar />

        <div className="flex items-center mt-3 mb-3 mr-6">
          <Link
            to="/"
            className="min-w-[60px] h-[60px] rounded-full overflow-hidden mr-2 bg-green-600"
          ></Link>

          <Link to="/" className="mr-10">
            <h2 className="text-stone-400 text-xl">Nombre usuario</h2>
            <p className="text-stone-400">Rol</p>
          </Link>

          <BiDownArrow className="mr-3" />
        </div>
      </div>
    </div>
  );
}
