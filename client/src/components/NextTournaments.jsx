import React from "react";
import styles from '../styles/NextTournaments.module.css';
import TournamentListView from "./TournamentListView";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {getNext5Tournaments} from '../redux/actions/index';

export default function NextTournaments(){
    const dispatch = useDispatch();
    const nextTournaments = useSelector((store) => store.nextTournaments);

    useEffect(() => {
        dispatch(getNext5Tournaments());
    }, [])

    return(
    <div className = "bg-white rounded-lg flexflex-col justify-around p-3 max-h-[532px] mt-6 sm:ml-6 ">
        <div className = {styles.titleContainer}>
            <h2>Proximos torneos</h2>
        </div>
        
        <div className={styles.tournamentsContainer}>
            {nextTournaments.nextFive?.map(element => {
                return <TournamentListView
                name={element.name} id={element.id} 
                dateInit = {element.dateInit} category={element.category} 
                genre={element.genre} key={element.id}/>
            })}
        </div>
    </div>
    );
}