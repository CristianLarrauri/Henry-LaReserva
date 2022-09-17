
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../redux/actions"
import { NavLink } from 'react-router-dom';

const TournamentDetail = (props) => {
     let {id} = props.match.params
     const dispatch = useDispatch();
     React.useEffect(()=>{
        dispatch(actions.tournamentDetail(id));
     }, [dispatch]);

     let tournament = useSelector((state) => state.tournamentDetail)

    return (
        <div>
            
            <h2>{`Torneo "${tournament.name}"`}</h2>
            <img src={tournament.image} alt={tournament.name} />
            <h4>Categoria: {tournament.category}</h4>
            <h4>Género: {tournament.genre}</h4>
            <br />
            <h4>{tournament.description}</h4>
            <br />
            <h4>Fecha de inicio: {tournament.dateInit}</h4>
            <h4>Finaliza: {tournament.dateFinish}</h4>
            <h4>{tournament.teams? <ul> {tournament.teams.map((team) => <li>{team}</li>)}</ul> : null}</h4>

            <NavLink to="/home"><button>Volver</button></NavLink>
           
        </div>
    )
}







export default TournamentDetail