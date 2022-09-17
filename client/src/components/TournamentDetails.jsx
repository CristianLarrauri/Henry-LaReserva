import React from 'react';
import styles from '../styles/TournamentDetails.module.css';
import Card from './Card';
import { useState } from 'react';
import Torneos from "../tournaments.json"
import { useEffect } from 'react';

export default function TournamentDetails(tournaments) {//Esto lo recibe del componente filtros

    const [page, setPage] = useState(0);

  const handlePrev = (event) => {
    event.preventDefault();
    if (page <= 1) {
      setPage(1);
    } else {
      setPage(page - 4);
    }
  };

  const handleNext = (event) => {
    event.preventDefault();
    if (Torneos.length < 4) {
      return;
    } else {
      setPage(page + 4);
    }
  };

  useEffect(()=>{
    
  },[])
    return (
        <div className="bg-red-500 ml-3 mr-3 rounded-lg mb-3 mt-5 justify-between items-center flex">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg ml-5" onClick={handlePrev} >
                {"<<"}
            </button>
            {Torneos?.map((ele)=>{
                return(
                    <div>
                        <Card 
                        key={ele.id}
                        name={ele.name}
                        dateInit={ele.dateInit}
                        genre={ele.genre}
                        category={ele.category}
                        />
                    </div>
                )
            })}
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg mr-[1%]" onClick={handleNext}>
                {">>"}
            </button>
        </div>
    );
}
