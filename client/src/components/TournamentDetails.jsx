import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../redux/actions";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "./Footer";
import ScorersTable from "../components/ScorersTable";
import TeamsTable from "../components/TeamsTable";
import {
  BsCalendarDate,
  BsGenderFemale,
  BsGenderMale,
  BsGenderAmbiguous,
  BsFillPersonFill,
} from "react-icons/bs";

import { BiCategoryAlt, BiArrowBack } from "react-icons/bi";

const TournamentDetail = (props) => {
  let { id } = props.match.params;
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.tournamentDetails(id));
    console.log(tournament);
  }, [dispatch]);

  let tournament = useSelector((state) => state.tournamentDetail);




  let adminUser = false

  const [fixture, setFixture] = React.useState("")
  const [errorFixture, setErrorFixture] = React.useState("")
  const [loading, setLoading] = React.useState(1)

  const handleFixture = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    let size = 0
    if (files) {
      size += files[0].size
    }
    console.log(size)
    data.append("file", files[0]);
    data.append("upload_preset", "ReservaTeams");
    setLoading(2);
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/maurodavid/image/upload",
        {
          method: "POST",
          body: data,
        }
      )
      const file = await res.json();
      let array = file.secure_url.split(".")
      let format = array[array.length - 1]
      console.log(format)
      if (size > 2000000) {
        setErrorFixture("El archivo es demasiado grande")
      } else {
        if (format === "jpg" || format === "png") {
          setErrorFixture("")
          setFixture(file.secure_url)
          setLoading(0)
        } else {
          setErrorFixture("Solo se admiten archivos formato jpeg o png")
          setLoading(1)
        }
      }
    } catch (error) {
      setErrorFixture("Solo se admiten archivos formato jpeg o png")
      setLoading(1)
    }
  }

  const handleUpdateFixture = (e) => {
    e.preventDefault()
    console.log(fixture)
    dispatch(actions.putFixture(id, fixture));
  }

  return (
    <div className="bg-white w-full min-h-screen flex flex-col justify-between items-center">
      <Nav />
      <div className="w-full min-h-screen flex flex-col items-center relative animate-appear">
        <div className="bg-gray-100 w-5/6 p-5 mt-10 flex flex-col items-center">
          {/*info container*/}

          <div className="w-3/6 text-gray-800 text-center">
            <h1 className="font-bold text-2xl">TORNEO</h1>
            <h2 className="font-bold text-xl">{`"${tournament.name}"`}</h2>

            <div className="w-full flex justify-between my-3 flex-wrap">
              <div className="flex items-center my-1">
                <BsCalendarDate className="text-2xl" />
                <p className="font-medium text-xl ml-3">{`Desde: ${tournament.dateInit}`}</p>
              </div>

              <div className="flex items-center my-1">
                <BsCalendarDate className="text-2xl" />
                <p className="font-medium text-xl ml-3">{`Hasta: ${tournament.dateFinish}`}</p>
              </div>
            </div>

            <div className="flex justify-between mt-6 flex-wrap">
              <div className="flex my-1">
                <BiCategoryAlt className="text-2xl" />
                <p className="font-medium text-xl ml-3">{`Categoria: ${tournament.category === "Free"
                  ? "Libre"
                  : tournament.category === "Sub20"
                    ? "Sub20"
                    : "Senior"
                  }`}</p>
              </div>

              <div className="flex my-1">
                {tournament.genre === "Male" ? (
                  <BsGenderMale className="text-2xl" />
                ) : tournament.genre === "Female" ? (
                  <BsGenderFemale className="text-2xl" />
                ) : (
                  <BsGenderAmbiguous className="text-2xl" />
                )}
                <p className="font-medium text-xl ml-3">{`Genero: ${tournament.genre === "Male"
                  ? "Masculino"
                  : tournament.genre === "Female"
                    ? "Femenino"
                    : "Mixto"
                  }`}</p>
              </div>

              <div className="flex my-1">
                <BsFillPersonFill className="text-2xl" />
                <p className="font-medium text-xl ml-3">{`Cantidad: ${tournament.amountOfTeams}`}</p>
              </div>
            </div>

            <div className="text-left mt-10">
              <h3 className="font-medium text-xl ml-3">
                Descripcion: {tournament.description}
              </h3>
            </div>

            <div className="w-full flex justify-center items-center">
              {tournament.state === "Proximo" ? (
                <Link
                  to={`/inscription?id=${id}`}
                  className="bg-green-500 w-[180px] h-[80px] rounded-full m-8 z-50
								hover:bg-white hover:text-green-700 hover:scale-110 duration-300 text-white
								flex justify-center items-center"
                >
                  <p className="text-xl font-bold">Inscribite</p>
                </Link>
              ) : (
                false
              )}
            </div>
          </div>
        </div>

       
        <div
          className="w-5/6 mt-10 flex items-center flex-col 
					lg:flex-row lg:justify-between lg:items-start"
        >
          <div className="bg-gray-100 w-7/12 h-full min-h-[150px] p-5 m-3 min-w-[340px]">
            <TeamsTable id={id} />
          </div>

          <div className="w-2/6 h-full min-h-[220px] min-w-[340px] m-3 bg-gray-100 p-5">
            <ScorersTable id={id} />
          </div>
        </div>

        {adminUser ?
        <div >
           <label className='text-2xl font-medium
						text-green-500 mb-2'>Actualizar fixture </label>
								<input id='inputFile' type="file" name='image'
									onChange={e => handleFixture(e)}
									className="w-3/6 h-[50px] bg-gray-100 border-b border-green-500 outline-none
						pl-[10px] min-w-[300px] ml-3 text-lg text-gray-500"/> 

          {loading === 2 ? <p>Cargando imagen...</p> : false}
          {loading === 0 ? <div><img className="h-[800px] textaling:center" src={fixture} alt="" />
          <br />
          <button className="bg-green-500 w-[180px] h-[80px] rounded-full m-8 z-50
								hover:bg-white hover:text-green-700 hover:scale-110 duration-300 text-white
								flex justify-center items-center" onClick={e => handleUpdateFixture(e)}>Actualizar</button>
          </div>
          : false}

          <div className='absolute right-50 top-2 bg-red-600 text-white rounded-lg
p-2 font-medium shadow shadow-black duration-500 lg:right-0 lg:top-4'
            style={errorFixture ? { opacity: 1 } : { opacity: 0 }}>
            <p>{errorFixture}</p>
          </div>
        </div>
        : false}

          <img  className="h-[800px] textaling:center" src={tournament.fixture} alt="fixture tournament" />


        <Link
          to="/home"
          className="bg-green-500 w-[180px] h-[80px] rounded-full m-8 z-50
								hover:scale-110 duration-300 text-white
								flex justify-center items-center animate-appear"
        >
          <p className="text-xl font-bold flex items-center justify-center">
            <BiArrowBack className="mr-3" />
            Volver
          </p>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default TournamentDetail;
