import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Card from "./Card";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTournaments } from "../redux/actions/index.js";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { useHistory } from "react-router-dom";

export default function AllTournaments() {
  const history = useHistory();
  const dispatch = useDispatch();
  const tournaments = useSelector((state) => state.tournaments);
  const [page, setPage] = useState(0);
  const handlePrev = (event) => {
    event.preventDefault();
    if (page <= 1) {
      setPage(0);
    } else {
      setPage(page - 6);
    }
  };

  const handleNext = (event) => {
    event.preventDefault();
    if (tournaments?.length < 6) {
      return;
    } else {
      setPage(page + 6);
    }
  };

  const storageOrder = JSON.parse(localStorage.getItem("order"));

  const [property, setProperty] = useState("name");
  const [order, setOrder] = useState(storageOrder);
  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(order));
  }, [order]);

  if (order === null) {
    setOrder("ASC");
  }

  const handleSortName = (e) => {
    e.preventDefault();
    setProperty("name");
    setOrder(e.currentTarget.value);
  };

  const storageCategory = JSON.parse(localStorage.getItem("category"));
  const storageGenre = JSON.parse(localStorage.getItem("genre"));
  const storageState = JSON.parse(localStorage.getItem("state"));

  const [category, setCategory] = useState(storageCategory);
  useEffect(() => {
    localStorage.setItem("category", JSON.stringify(category));
  }, [category]);
  const [genre, setGenre] = useState(storageGenre);
  useEffect(() => {
    localStorage.setItem("genre", JSON.stringify(genre));
  }, [genre]);
  const [valueCategory, setValueCategory] = useState(storageCategory);
  const [valueGenre, setValueGenre] = useState(storageGenre);

  const [state, setState] = useState(storageState);
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);
  const [valueState, setValueState] = useState(storageState);

  if (category === null) {
    setCategory("");
  }

  if (genre === null) {
    setGenre("");
  }

  if (state === null) {
    setState("");
  }

  const handleFilterCategory = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
    setValueCategory(e.target.value);
  };

  const handleFilterGenre = (e) => {
    e.preventDefault();
    setGenre(e.target.value);
    setValueGenre(e.target.value);
  };
  const handleFilterState = (e) => {
    e.preventDefault();
    setState(e.target.value);
    setValueState(e.target.value);
  };

  const handleGetAllTournaments = (e) => {
    e.preventDefault();
    setState("");
    setCategory("");
    setGenre("");
    setValueCategory("");
    setValueGenre("");
    setValueState("");
    setOrder("ASC");
  };
  
  function handleNewSearch(e){
    e.preventDefault();
    handleGetAllTournaments(e);
    dispatch(getAllTournaments(page, order, property, category, genre, state));
  }

  useEffect(() => {
    dispatch(getAllTournaments(page, order, property, category, genre, state));
  }, [dispatch, page, order, property, category, genre, state]);

  return (
    <div className="bg-gray-100 w-full min-h-screen flex flex-col items-center justify-between">
      <Nav />

      <div className="min-h-screen flex flex-col items-center w-5/6">
        {/*main section*/}

        {/*SearchBar*/}
        <div className="bg-white w-5/6 flex justify-center p-4">
          <SearchBar />
        </div>

        <div className="bg-white w-5/6 flex justify-around flex-wrap mt-6 animate-appear">
          {/*filtros*/}

          <div className="flex items-center p-2 m-2">
            <h2 className="text-xl font-medium mr-2">Genero:</h2>

            <select
              className="bg-gray-200 text-center rounded text-xl p-2 cursor-pointer hover:bg-gray-300 font-medium"
              name="genre"
              onChange={(e) => handleFilterGenre(e)}
              value={valueGenre}
            >
              <option value="">Indistinto</option>
              <option value="Masculino">Masculinos</option>
              <option value="Femenino">Femeninos</option>
              <option value="Mixto">Mixtos</option>
            </select>
          </div>

          <div className="flex items-center p-2 m-2">
            <h2 className="text-xl font-medium mr-2">Categoria</h2>

            <select
              className="bg-gray-200 text-center rounded text-xl p-2 cursor-pointer hover:bg-gray-300 font-medium"
              name="category"
              onChange={(e) => handleFilterCategory(e)}
              value={valueCategory}
            >
              <option value="">Indistinto</option>
              <option value="Sub20">Sub 20</option>
              <option value="Libre">Libre</option>
              <option value="Senior">Senior</option>
            </select>
          </div>

          <div className="flex items-center p-2 m-2">
            <h2 className="text-xl font-medium mr-2">Status: </h2>

            <select
              className="bg-gray-200 text-center rounded text-xl p-2 cursor-pointer hover:bg-gray-300 font-medium"
              name="state"
              onChange={(e) => handleFilterState(e)}
              value={valueState}
            >
              <option value="">Indistinto</option>
              <option value="Finalizado">Finalizados</option>
              <option value="En curso">Actual</option>
              <option value="Proximo">Proximos</option>
            </select>
          </div>

          <div className="flex items-center p-2 m-2">
            <h2 className="text-xl font-medium mr-2">Ordenar</h2>
            <button
              name="ASC"
              value="ASC"
              onClick={(e) => handleSortName(e)}
              className="bg-gray-200 text-center rounded text-xl p-3 cursor-pointer
              mx-3 hover:bg-gray-300"
            >
              <AiOutlineArrowDown />
            </button>

            <button
              name="DESC"
              value="DESC"
              onClick={(e) => handleSortName(e)}
              className="bg-gray-200 text-center rounded text-xl p-3 cursor-pointer
              mx-3 hover:bg-gray-300"
            >
              <AiOutlineArrowUp />
            </button>
          </div>

          <div className="flex items-center p-2 m-2">
            <button
              onClick={(e) => handleGetAllTournaments(e)}
              className="bg-gray-200 text-center rounded text-xl p-2 cursor-pointer mx-3 font-medium hover:bg-gray-300"
            >
              Quitar filtros
            </button>
          </div>
        </div>

        <div className="w-full flex justify-between mt-6 bg-white p-1 sm:w-5/6 animate-appear">
          <button
            className="bg-green-700 min-w-[30px] flex justify-center items-center rounded
            text-white shadow shadow-black active:bg-green-500"
            onClick={(event) => handlePrev(event)}
          >
            <AiOutlineArrowLeft />
          </button>

          <div className="w-4/6 flex flex-wrap justify-around min-w-[280px]">
            {tournaments.length
              ? tournaments?.map((ele) => {
                  return (
                    <div>
                      <Card
                        key={ele.id}
                        name={ele.name}
                        dateInit={ele.dateInit}
                        genre={ele.genre}
                        category={ele.category}
                        id={ele.id}
                      />
                    </div>
                  );
                })
              :
              <div className="text-gray-700 p-3">
                <h2 className="font-medium text-lg">{"No se encontro nada :("}</h2>
                <button
                onClick={(e) => handleNewSearch(e)}
                className="bg-gray-200 text-center rounded text-xl p-2 cursor-pointer mx-3 font-medium hover:bg-gray-300 mt-3">
                  Nueva busqueda
                </button>
              </div>
              }
          </div>

          <button
            className="bg-green-700 min-w-[30px] flex justify-center items-center rounded
            text-white shadow shadow-black active:bg-green-500"
            onClick={(event) => handleNext(event)}
          >
            <AiOutlineArrowRight />
          </button>
        </div>

        <button
          to="/home"
          className="bg-green-500 w-[180px] h-[80px] rounded-full m-8 z-50
					hover:bg-white hover:text-green-700 hover:scale-110 duration-300 text-white
					flex justify-center items-center animate-appear"
          onClick={() => history.goBack()}>
          <p className="text-xl font-bold flex items-center justify-center">
            <BiArrowBack className="mr-3" />
            Volver
          </p>
        </button>
      </div>
      <Footer />
    </div>
  );
}
