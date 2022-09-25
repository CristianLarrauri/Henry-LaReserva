import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Card from "./Card";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTournaments } from "../redux/actions/index.js";

export default function AllTournaments() {
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

  const [property, setProperty] = useState("name");
  const [order, setOrder] = useState("ASC");
  const handleSortName = (e) => {
    e.preventDefault();
    setProperty("name");
    setOrder(e.target.value);
  };
  const [category, setCategory] = useState("");
  const [genre, setGenre] = useState("");
  const [valueCategory, setValueCategory] = useState("");
  const [valueGenre, setValueGenre] = useState("");
  const [state, setState] = useState("");
  const [valueState, setValueState] = useState("");

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
  useEffect(() => {
    dispatch(getAllTournaments(page, order, property, category, genre, state));
  }, [dispatch, page, order, property, category, genre, state]);

  return (
    <div>
      <Nav />
      <button>
        <Link to="/home">
          <p>Volver</p>
        </Link>
      </button>

      <div>
        <div className="flex container-xl px-[35%] py-[3%] border-2 rounded-lg mt-[10%] justify-center">
          <div className="container">
            <h3 className="text-md font-mono mt-1 items-center justify-between">
              Todos los torneos:
            </h3>
            <select
              className=" text-md mt-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded-lg"
              name="genre"
              onChange={(e) => handleFilterGenre(e)}
              value={valueGenre}
            >
              {" "}
              <option disabled value="">
                Genero
              </option>
              <option value="">Indistinto</option>
              <option value="Male">Masculinos</option>
              <option value="Female">Femeninos</option>
              <option value="Mixed">Mixtos</option>
            </select>
            <select
              className="text-md mt-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded-lg"
              name="category"
              onChange={(e) => handleFilterCategory(e)}
              value={valueCategory}
            >
              <option disabled value="">
                Categoria
              </option>
              <option value="">Indistinto</option>
              <option value="Sub20">Sub 20</option>
              <option value="Free">Libre</option>
              <option value="Senior">Senior</option>
            </select>

            <select
              className="text-md mt-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded-lg"
              name="state"
              onChange={(e) => handleFilterState(e)}
              value={valueState}
            >
              {" "}
              <option disabled value="">
                Status
              </option>
              <option value="">Indistinto</option>
              <option value="Completed">Finalizados</option>
              <option value="In Progress">Actual</option>
              <option value="Comming Soon">Proximos</option>
            </select>
          </div>

          <div className="container ml-[8%] items-center">
            <p className="text-md font-mono mt-1">Ordenar: Por nombre</p>
            <button
              name="ASC"
              value="ASC"
              onClick={(e) => handleSortName(e)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-lg mt-4"
            >
              /\
            </button>
            <button
              name="DESC"
              value="DESC"
              onClick={(e) => handleSortName(e)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-lg ml-5 mt-4"
            >
              \/
            </button>
          </div>

          <div className="container">
            <button
              onClick={(e) => handleGetAllTournaments(e)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg mt-[28%] ml-3"
            >
              Quitar filtros
            </button>
          </div>
        </div>
      </div>

      <div className="bg-red-500 ml-3 mr-3 rounded-lg mb-3 mt-5 justify-center items-center flex w-4/6 flex-wrap">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg ml-5"
          onClick={(event) => handlePrev(event)}
        >
          {"<<"}
        </button>
        {tournaments
          ? tournaments?.map((ele) => {
              return (
                <div>
                  <Card
                    key={ele.id}
                    name={ele.name}
                    dateInit={ele.dateInit}
                    genre={ele.genre}
                    category={ele.category}
                  />
                </div>
              );
            })
          : "No se Encontro nada"}
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg mr-[1%]"
          onClick={(event) => handleNext(event)}
        >
          {">>"}
        </button>
      </div>
      <Footer />
    </div>
  );
}
