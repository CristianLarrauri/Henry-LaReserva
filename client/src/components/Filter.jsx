import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../redux/actions'
import { NavLink } from 'react-router-dom'
import TournamentCards from "./TournamentCards";

const Filter = () => {
    const dispatch = useDispatch();

    const handleGetAllTournaments = () => {
        dispatch(actions.getAllTournaments())
    }

    const handleNameSort = (e) => {
        dispatch(actions.nameSort(e.target.value))
    }

    const handleGenderFilter = (e) => {
        dispatch(actions.genderFilter(e.target.value))
    }

    const handleDivFilter = (e) => {
        dispatch(actions.divFilter(e.target.value))
    }


    return (
        <div >
            <div className="flex container-xl px-[5%] py-[5%] border-2 rounded-lg mt-[2%] justify-center">
                <div className="container">
                    <h3 className="text-md font-mono mt-1 items-center justify-between">Mostrar torneos: </h3>
                    <select className=" text-md mt-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded-lg" name="genero" onClick={e => handleGenderFilter(e)}>
                        <option value="all">Indistinto</option>
                        <option value="masc">Masculinos</option>
                        <option value="fem">Femeninos</option>
                    </select>
                    <select className="text-md mt-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded-lg" name="division" onClick={e => handleDivFilter(e)}>
                        <option value="all">Indistinto</option>
                        <option value="sub20">Sub 20</option>
                        <option value="senior">Senior</option>
                    </select>
                </div>

                <div className="container ml-[8%] items-center">
                    <p className="text-md font-mono mt-1">Ordenar: Por nombre</p>
                    <button name="nameUp" value="up" onClick={e => handleNameSort(e)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-lg mt-4">/\</button>
                    <button name="nameDown" value="down" onClick={e => handleNameSort(e)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-lg ml-5 mt-4">\/</button>
                </div>

                <div className="container">

                    <button onClick={handleGetAllTournaments} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg mt-[28%] ml-3">Quitar filtros</button>
                </div>
            </div>

        </div>
    )
}


export default Filter