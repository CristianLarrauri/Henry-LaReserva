import React, { useState } from "react";
import BotonPago from "./BotonPago";

export default function FormPago(){
    const [pagar,setPagar] = useState(true)

    const [datos,setDatos] = useState({
        nombre:"Nico",
        apellido:"Perez",
        telefono:"25143898123",
        añadirinfo:"holas",
        ciudad:"Mendoza",
        estado:"Cuyo",
        postal:"5511",
        recordar: false,
        number:"1245",
        email:"carballonicolas1210@gmail.com",
        Barrio:"Aconcagua",
        street_number:"1214",
        floor:"12",
        apartment:"15",
        pictureUrl:""
    })

    const handleSubmit = async(e) => {
		e.preventDefault();
		setPagar(false)
	};


    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input name="nombre" type="text"></input>

            <button type="submit" className="botoncomprar">Solicitar Pago</button>
            {(pagar)?null:<BotonPago items={datos} />}
            </form>
        </div>
    )
}