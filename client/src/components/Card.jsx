import React from "react";
import Corner from "../images/Corner.jpeg"

export default function Card({name,id,dateInit,genre,category}) {
    return (
        <div className="max-w-sm rounded-lg border- overflow-hidden shadow-lg border-2 ml-1 my-3 ">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 font-mono underline">{name ? name : "No existe su torneo"}</div>
                    <img className="w-full rounded-lg" src={Corner} alt="Sunset in the mountains"/>
                </div>
                <div className="px-6 pt-4 pb-2 flex">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold font-mono text-gray-700 mr-2 mb-2">{category ? category : "No existe esa categoria"}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold font-mono text-gray-700 mr-2 mb-2">{genre ? genre : "No existe este genero"}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold font-mono text-gray-700 mr-2 mb-2">{dateInit ? dateInit : "No hay fecha de inicio"}</span>
                </div>
        </div>
    )
}