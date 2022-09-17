import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchTournaments } from "../redux/actions";
import Error404 from "./Error404";

export default function SearchBar() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  function handleChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      return alert("Debes escribir algo"); //Usar un POP UP  ??
    } else {
      dispatch(searchTournaments(name));
      console.log(name);
    }
    setName("");
  }

  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="Busca tu torneo"
        value={name}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        BUSCAR
      </button>
    </div>
  );
}
