import React from 'react';
import styles from '../styles/TournamentDetails.module.css';
import Card from './Card';

export default function TournamentDetails(tournaments) {//Esto lo recibe del componente filtros
    return (
        <div className="bg-red-500 ml-3 mr-3 rounded-lg mb-3 mt-5 justify-between items-center flex">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg ml-5">
                {"<<"}
            </button>
            <Card />
            <Card />
            <Card />
            <Card />
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg mr-[1%]">
                {">>"}
            </button>
        </div>
    );
}
