import React from "react";
import Footer from "./Footer";
import NextTournaments from "./NextTournaments";
import jugador from "../images/jugadorHome.png";
import { BsCalendarDate } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { RiFootballLine } from "react-icons/ri";
import TournamentCards from "./TournamentCards";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNextTournament } from "../redux/actions";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const nextTournaments = useSelector((store) => store.nextTournaments);

  useEffect(() => {
    dispatch(getNextTournament());
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-gray-200">
      <Nav />
      <div className="flex justify-start flex-col">
        {/*div principal*/}

        <div className="w-full flex flex-wrap justify-center md:flex-nowrap md:justify-start">
          {/*div superior*/}
          <NextTournaments />

          <div
            className="bg-green-700 w-4/6 min-w-[300px] m-6 rounded-lg flex justify-between items-center 
					flex-col lg:flex-row lg:items-end relative overflow-hidden min-h-[532px]"
          >
            {/*green card*/}

            <div className=" flex flex-col xl:flex-row z-10">
              <img
                src={jugador}
                alt="jugandor.png"
                className="min-w-[262px] max-w-[262px] h-[390px] mx-3"
              />

              <div className="w-6/6 flex flex-col justify-around mx-3">
                {/*Title container*/}
                <h2 className="text-white text-4xl font-bold">
                  {nextTournaments.next[0]
                    ? nextTournaments.next[0].name
                    : "Torneo la reserva"}
                </h2>

                <div className="flex justify-around text-white flex-wrap">
                  <div className="flex items-center m-3">
                    <BsCalendarDate className="text-3xl" />
                    <p className="ml-2 text-xl">
                      {nextTournaments.next[0]
                        ? nextTournaments.next[0].dateInit
                        : "00:00:00 AM"}
                    </p>
                  </div>

                  <div className="flex items-center m-3 text-xl">
                    <BiCategory className="text-3xl" />
                    <p>
                      {nextTournaments.next[0]
                        ? nextTournaments.next[0].category
                        : "Cargando.."}
                    </p>
                  </div>

                  <div className="flex items-center m-3 text-xl">
                    <BsFillPersonFill className="text-3xl" />
                    <p>
                      {nextTournaments.next[0]
                        ? nextTournaments.next[0].genre
                        : "Cargando.."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col-reverse items-end mx-3 h-full">
              <Link
                to={`/details/${
                  nextTournaments.next[0] ? nextTournaments.next[0].id : "0"
                }`}
                className="bg-white min-w-[180px] h-[80px] rounded-full m-8 z-50
							hover:bg-green-500 hover:text-white hover:scale-110 duration-300 text-green-700
							flex justify-center items-center"
              >
                <p className="text-xl font-bold">Inscribite</p>
              </Link>
            </div>

            <div className="bg-green-600 absolute right-0 bottom-0 w-[300px] h-[300px] rounded-tl-full z-0" />
          </div>
        </div>
        <div className="flex justify-center items-center bg-green-600 font-bold text-white text-2xl">
          <RiFootballLine className="text-2xl" />
          <h2>Torneos en curso</h2>
        </div>
        <div>
          <TournamentCards />
        </div>
      </div>
      <Footer />
    </div>
  );
}
