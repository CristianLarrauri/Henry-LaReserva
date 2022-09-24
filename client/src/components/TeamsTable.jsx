import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {RiTeamFill} from 'react-icons/ri';

export default function TeamsTable({id}){
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/teams?tournament=${id}`)
        .then(data => setTeams(data.data));
    }, []);

    return(
        <table className="w-full relative bg-white text-gray-800">
        
            <div className="flex items-center min-h-[70px]"/>

            <div className="absolute w-full top-0 left-0 flex items-center justify-center min-h-[70px]">
                <RiTeamFill className="text-2xl ml-2"/>
                <h2 className="text-2xl font-bold py-3 ml-2">EQUIPOS</h2>
            </div>




            <tr className="font-bold text-2xl border-black h-[50px] border-b border-t">
                <th>Nombre</th>
                <th>Posicion</th>
                <th>Puntos</th>
            </tr>


            {teams[0]?teams.map((team, index) => {
                return (
                    <tr key={`tr${index}`} className='text-center font-bold border-b 
                    border-t border-black'>
                        <td className="py-2">{team.name}</td>
                        <td>{index+1}</td>
                        <td className="text-green-700">{team.points}</td>
                    </tr>
                )
            }):
                <tr className='flex justify-center font-bold text-xl w-full absolute'>
                    <td className="p-3">Cargando..</td>
                </tr>
            }
        
        </table>    
    )
}