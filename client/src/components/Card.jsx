import React from "react";
import Corner from "../images/Corner.jpeg"

export default function Card() {
    return (
        <div className="max-w-sm rounded-lg border- overflow-hidden shadow-lg border-2 ml-1 my-3 ">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 font-mono underline">Torneo Sacachispa</div>
                    <img className="w-full rounded-lg" src={Corner} alt="Sunset in the mountains"/>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold font-mono text-gray-700 mr-2 mb-2">Sub-20</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold font-mono text-gray-700 mr-2 mb-2">Femenino</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold font-mono text-gray-700 mr-2 mb-2">12-10</span>
                </div>
        </div>
    )
}