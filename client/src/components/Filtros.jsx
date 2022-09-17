import React from "react";
import styles from "../styles/Filtros.module.css"
// import TournamentDetails from "./TournamentDetails";

export default function Filtros(){
    return(
        <div className={styles.mainWrapper}>
            <h2>Hacer el componente filtro aca</h2>
            {/*Esto deberia traer de la ruta get X torneos, segun la pagina
               apenas inicia (DiMount/useEffect), luego cada vez que se toque un boton de filtrado
               deberia llamar a la ruta del back correspondiente y actualizar un estado local,
               ese estado es el que se le deberia pasar al componente de abajo, que es el que renderizara las cartas*/}
            {/* <TournamentDetails tournaments = {[]}/> */}
        </div>
    );
}