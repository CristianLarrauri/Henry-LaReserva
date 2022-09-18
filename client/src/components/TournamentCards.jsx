import React from 'react';
import Card from './Card';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTournaments } from '../redux/actions/index.js';

export default function TournamentCards() {//Esto lo recibe del componente filtros

  const tournaments = useSelector((state)=>state.tournaments)
  const [page, setPage] = useState(0);
    
  const dispatch = useDispatch()


  const handlePrev = (event) => {
    event.preventDefault();
    if (page <= 1) {
      setPage(0);
    } else {
      setPage(page - 4);
    }
  };

  const handleNext = (event) => {
    event.preventDefault();
    if (tournaments?.length < 4) {
      return;
    } else {
      setPage(page + 4);
    }
  };

  useEffect(()=>{
    dispatch(getAllTournaments(page))
  },[dispatch,page])


    return (
        <div className="bg-red-500 ml-3 mr-3 rounded-lg mb-3 mt-5 justify-between items-center flex">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg ml-5" onClick={(event)=>handlePrev(event)} >
                {"<<"}
            </button>
            {tournaments ? tournaments?.map((ele)=>{
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
            }) : "No se Encontro nada"}
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg mr-[1%]" onClick={(event)=>handleNext(event)}>
                {">>"}
            </button>
        </div>
    );
}
