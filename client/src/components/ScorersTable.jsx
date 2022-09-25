import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ScorersTable({id}){
    const [scorersInfo, setScorersInfo] = useState([]);
    useEffect(() => {
        axios.get(
            `http://localhost:3001/scorers?tournament=${id}`
        )
        .then(data => setScorersInfo(data.data));
    }, []);

    return(
        <table className="w-full relative">

            <tr className="font-bold text-xl border border-black bg-gray-400 h-[50px] text-center">
                <td>Posicion</td>
                <td>Jugador</td>
                <td>Goles</td>
            </tr>

            {scorersInfo[0]?scorersInfo.map((player, index) => {
                return(
                    <tr key={`trScr${index}`} className='text-center font-medium border border-black'>
                        <td>{index}</td>
                        <td>{player.name + ` ` + player.surname}</td>
                        <td>{player.goals}</td>
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