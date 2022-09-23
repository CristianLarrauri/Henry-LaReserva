import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchTournaments } from "../redux/actions";
import {BsSearch} from 'react-icons/bs';
import Error404 from "./Error404";
import popUpStyles from '../styles/PopUpStyles.module.css';

export default function SearchBar() {
  const [name, setName] = useState("");
  const [errorPopUp, setErrorPopUp] = useState(false);//Esto es para controlar el popUp
  const dispatch = useDispatch();

  function handleChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      /* return alert("Debes escribir algo"); //Usar un POP UP  ?? */
      setErrorPopUp(true);//Esto activa el popUp
    } else {
      dispatch(searchTournaments(name));
    }
    setName("");
  }

  return (
    <div className="w-[600px] h-[50px] mr-3 ml-3 mt-3 flex items-center">

      {/*Esta div es el popUp, esta siempre invisible a no ser que el estado "errorPopUp" sea true*/}
      <div className={errorPopUp?popUpStyles.popUpOverlay:popUpStyles.popUpOverlay_hidden}>
				<div className={errorPopUp?popUpStyles.popUp:popUpStyles.popUp_hidden}>
					<h2>Error!</h2>
					<p>Debes escribir algo.</p>
					<button onClick={() => setErrorPopUp(false)} className={popUpStyles.okBtn}>Ok</button>{/*Este boton hace que el estado vuelva a faso, ocultado en popUp*/}
				</div>
			</div>

      <input
        className="w-5/6 rounded-full h-full pl-4 border-2"
        type="text"
        name="search"
        placeholder="Busca tu torneo"
        value={name}
        onChange={(e) => handleChange(e)}
      />
      <button className="h-full" type="submit" onClick={(e) => handleSubmit(e)}>
        <BsSearch className="text-4xl text-green-500 ml-4 mr-4 hover:text-green-800"/>
      </button>
    </div>
  );
}
