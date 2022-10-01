import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { useAuth0 } from "@auth0/auth0-react";
import TournamentListView from "./TournamentListView";
import { BiArrowBack } from "react-icons/bi";


export default function PanelUser(){
    
    const {user, logout} = useAuth0();

    return(
        <div className="min-h-screen flex flex-col justify-between">
            <Nav/>
            
            <div className="flex justify-center text-gray-700 flex-wrap">

                <div className="bg-gray-100 p-6 flex flex-col items-center
                 m-10 shadow shadow-gray-700 h-full w-1/6 min-w-fit">
                    <div className="bg-green-700 w-[200px] h-[200px] rounded-full overflow-hidden">
                        <img src={user.picture} className="w-full h-full" alt="imgProfile.png" />
                    </div>

                    <h2 className="text-xl mt-2">{user.nickname}</h2>

                    <button 
                        className='bg-green-500 w-[180px] h-[60px] rounded-full my-3 z-50
                        hover:scale-110 duration-300 text-white
                        flex justify-center items-center animate-appear'
                        onClick={() => logout({returnTo: 'http://localhost:3000/home'})}>

                        <p className='text-xl font-bold flex items-center justify-center'>
                            Desconectarse
                        </p>
				    </button>

                    <button 
                        className='bg-green-500 w-[180px] h-[60px] rounded-full my-3 z-50
                        hover:scale-110 duration-300 text-white
                        flex justify-center items-center animate-appear'
                        onClick={() => logout({returnTo: 'http://localhost:3000/home'})}>

                        <p className='text-xl font-bold flex items-center justify-center'>
                            Eliminar perfil
                        </p>
				    </button>

                    
                </div>

                <div className="bg-gray-100 p-6 m-10 shadow shadow-gray-700 
                w-4/6 flex flex-col items-center min-w-[320px]">
                    <h2 className="text-2xl font-bold border-b-2 border-black">Inscripciones activas</h2>
                    
                    <div className="w-full flex flex-col items-center border-b-2 border-gray-700 mb-3">
                        <TournamentListView name={'Prueba 1'} id='001' dateInit='22/03/19' dateFinish='22/03/19' category='Sub20' genre='Masculino' />
                        <TournamentListView name={'Prueba 1'} id='001' dateInit='22/03/19' dateFinish='22/03/19' category='Sub20' genre='Masculino' />
                        <TournamentListView name={'Prueba 1'} id='001' dateInit='22/03/19' dateFinish='22/03/19' category='Sub20' genre='Masculino' />
                    </div>

                    <h2 className="text-2xl font-bold border-b-2 border-black">Torneos pasados</h2>

                    <div className="w-full flex flex-col items-center">
                        <TournamentListView name={'Prueba 1'} id='001' dateInit='22/03/19' dateFinish='22/03/19' category='Sub20' genre='Masculino' />
                        <TournamentListView name={'Prueba 1'} id='001' dateInit='22/03/19' dateFinish='22/03/19' category='Sub20' genre='Masculino' />
                        <TournamentListView name={'Prueba 1'} id='001' dateInit='22/03/19' dateFinish='22/03/19' category='Sub20' genre='Masculino' />
                    </div>
                </div>
                
            </div>

            <Footer/>
        </div>
    )
}