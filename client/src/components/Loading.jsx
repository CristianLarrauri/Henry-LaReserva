import React from "react";
import football from '../images/soccerBallLanding.png';
import Nav from "./Nav";


export default function Loading(){
    return(
        
        <div className="min-h-screen flex flex-col justify-between items-center bg-green-700">
           
           <div className="display-hidden opacity-0">
            <Nav />
           </div>

            <div className=" flex justify-center items-center">
                <div className="flex flex-col items-center">
                    <h1 className="text-6xl font-bold text-white">Cargando..</h1>
                    <img src={football} alt='pelota.png' className="w-[200px] mt-20 animate-bounce"/>
                </div>
            </div>

            <div/>
        </div>
    )
}