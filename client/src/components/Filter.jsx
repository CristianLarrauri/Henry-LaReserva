/* import "./Filter.css" */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../redux/actions'
import { NavLink } from 'react-router-dom'

const Filter = () => {
    const dispatch = useDispatch();

    const handleGetAllTournaments = () => {
        dispatch(actions.getAllTournaments())
    }

    const handleNameSort= (e) => {
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
            

            <p>Mostrar torneos: </p>
                <select name="genero" onClick={e => handleGenderFilter(e)}>
                    <option value="all">Indistinto</option>
                    <option value="masc">Masculinos</option>
                    <option value="fem">Femeninos</option>
                </select>
                <select name="division" onClick={e => handleDivFilter(e)}>
                    <option value="all">Indistinto</option>
                    <option value="sub20">Sub 20</option>
                    <option value="senior">Senior</option>
                </select>
                <p>Ordenar:</p>
                Por nombre <br />
                <button name="nameUp" value="up" onClick={e => handleNameSort(e)}>/\</button>
                <button name="nameDown" value="down" onClick={e => handleNameSort(e)}>\/</button>
                <button onClick={handleGetAllTournaments}>Quitar filtros</button>
        </div>
    )
}


export default Filter