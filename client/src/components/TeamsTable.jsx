import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function TeamsTable({id}){
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/teams?tournament=${id}`)
        .then(data => setTeams(data.data));
    }, []);

    return(
        <table className="w-full relative">

        <tr className="font-bold text-xl border border-black bg-gray-400 h-[50px]">
            <th>Nombre</th>
            <th>Posicion</th>
            <th>Puntos</th>
        </tr>


        {teams[0]?teams.map((team, index) => {
            return (
                <tr key={`tr${index}`} className='text-center font-medium border border-black'>
                    <td>{team.name}</td>
                    <td>{index}</td>
                    <td>{team.points}</td>
                </tr>
            )
        }):
            <tr className='text-center font-bold text-xl border border-black w-full absolute'>
                <p className="p-3">Cargando..</p>
            </tr>
        }
        
        </table>    
    )
}