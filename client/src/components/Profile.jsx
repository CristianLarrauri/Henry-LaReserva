import React, { useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { BiDownArrow } from "react-icons/bi";
import { Link, useHistory } from "react-router-dom";


export default function Profile() {

    const { user, isAuthenticated } = useAuth0()
    const {loginWithRedirect} = useAuth0(),
    {logout} = useAuth0()

    let history = useHistory()

    
    return (
        isAuthenticated ? (
            <div className="text-center items-center flex mt-[4%] justify-between mr-5 py-1">
                <img src={user.picture} alt="" className="rounded-lg h-8 mr-5" />
                <h2 className="text-stone-400 text-xl font-mono mr-5">{user.name}</h2>
                {/* ACA PONER LA PROP ADMINISTRADOR O USUARIO */}
                {/* <p className="text-stone-400">Rol</p> */}
                {/* <p className="font-mono">Email: {user.email}</p> */}
                {/* SI SOS ADMIN, ESTE BIDOWN TE DARIA OPCIONES DE HACER COSAS */}
                <BiDownArrow className="mr-3" />
                    <button onClick={() => {
                    logout()
                    }} 
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-[2%] rounded-lg mr-[5%]">
                        Cerrar Sesion
                    </button>          
            </div>
        ) : (
            <div className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-[10%] rounded-lg mr-[45%]">               
                    <button onClick={() => {
                        loginWithRedirect()
                        }}>
                        Registrate
                    </button>     
            </div>
        )

    )
}