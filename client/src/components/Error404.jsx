import React from "react";
import { Link } from "react-router-dom";
import ball404 from "../images/Ball404.jpg";

export default function Error404() {
  return (
    <div>
      <h1>No se encontro lo que buscabas!</h1>
      <img src={ball404}></img>
      <div>
        <Link to="/home">
          <button>Volver</button>
        </Link>
      </div>
    </div>
  );
}
