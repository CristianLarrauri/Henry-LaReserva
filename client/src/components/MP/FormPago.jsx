// import React, { useState } from "react";
// import BotonPago from "./BotonPago";

// export default function FormPago(){
//     const [pagar,setPagar] = useState(true)

//     const [datos,setDatos] = useState({
//         nombre:"Nico",
//         apellido:"Perez",
//         telefono:"25143898123",
//         añadirinfo:"holas",
//         ciudad:"Mendoza",
//         estado:"Cuyo",
//         postal:"5511",
//         recordar: false,
//         number:"1245",
//         email:"carballonicolas1210@gmail.com",
//         Barrio:"Aconcagua",
//         street_number:"1214",
//         floor:"12",
//         apartment:"15",
//         pictureUrl:""
//     })

//     const handleSubmit = async(e) => {
// 		e.preventDefault();
// 		setPagar(false)
// 	};


//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//             <label>Nombre</label>
//             <input name="nombre" type="text"></input>

//             <button type="submit" className="botoncomprar">Solicitar Pago</button>
//             {(pagar) ? null: <BotonPago data={datos}/>}
//             </form>
//         </div>
//     )
// }

import React, { useState } from "react";
import { useEffect } from "react";

export default function FormPago({ productos, data }) {
    useEffect(() => {
        const script = document.createElement("script"); //Crea un elemento html script

        const attr_data_preference = document.createAttribute("data-preference-id"); //Crea un nodo atribute
        attr_data_preference.value = data.id; //Le asigna como valor el id que devuelve MP

        //Agrega atributos al elemento script
        script.src =
            "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
        script.setAttributeNode(attr_data_preference);


        //Agrega el script como nodo hijo del elemento form
        document.getElementById("form1").appendChild(script);
        return () => {
            //Elimina el script como nodo hijo del elemento form
            document.getElementById("form1").removeChild(script);
        };

    }, [data]);
    return (
        <div className="contenedor_resumen">
            <div style={{ "margin-top": "6pc" }}></div>
            <div className="container">
                <div className="row">

                    <form id='form1'>
                        <div style={{ "margin-top": "3pc" }}></div>

                        <h4>Resumen de cuenta</h4>
                        <div className="row" >
                            <div style={{ "margin-top": "2pc" }}></div>
                            <div className="col-4"></div>

                            <div className="col-4">
                                {productos.map((producto, i) => {
                                    return (
                                        <div key={i}>
                                            <ul className="ul_mp_cont">
                                                <li>{producto.title}</li>
                                                <li>{'$' + producto.price}</li>
                                            </ul>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
