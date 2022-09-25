import React, { useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { BiDownArrow } from "react-icons/bi";


export default function Profile() {

    const {loginWithRedirect, logout, user, isLoading} = useAuth0();

    
    return (
       <div>
        {!isLoading && !user && (
            <button
                className="bg-gray-200 p-3 rounded font-medium hover:scale-110 duration-300"
                onClick={() => loginWithRedirect({
                    redirectUri: 'http://localhost:3000/home'
                })}
            >
                Conectarse
            </button>
        )}
        {!isLoading && user && (//PONER ACA LAS COSAS QUE SE TIENEN QUE VER SI ESTAS CONECTADO
            <button
                className="bg-gray-200 p-3 rounded font-medium hover:scale-110 duration-300"
                onClick={() => logout({
                    returnTo: 'http://localhost:3000/home'
                })}
            >
                Desconectarse
            </button>
        )}
       </div>

    )
}


