import React from "react";
import styles from '../styles/NextTournaments.module.css';
import TournamentListView from "./TournamentListView";

export default function NextTournaments(tournaments){
    //Esta funciona debera recibir un array de los 5 torneos mas proximos
    //(En realidad deberia arrancar desde el segundo mas proximo al 6 porque el mas proximo va en otro componente)
    return(
    <div className = {styles.mainWrapper}>
        <div className = {styles.titleContainer}>
            <h2>Proximos torneos</h2>
        </div>
        
        <div className={styles.tournamentsContainer}>
            <TournamentListView/>
            <TournamentListView/>
            <TournamentListView/>
            <TournamentListView/>
            <TournamentListView/>
        </div>
    </div>
    );
}