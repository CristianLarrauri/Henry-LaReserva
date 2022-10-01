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
import Nav from '../Nav';
import Footer from '../Footer';
import mercadoLogo from '../../images/MercadoPago.png';

export default function BotonPago({ productos, data }) {
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
        <div className="min-h-screen flex flex-col items-center
        justify-between bg-gray-100">
            <Nav/>

            <div>

            <div className="bg-white rounded-lg shadow shadow-gray-700 overflow-hidden animate-appear">{/*Formulario section*/}

                <div className="bg-white w-[300px] h-[60px] p-3
                rounded-t-lg z-20 mb-5 shadow-lg shadow-gray-300 sm:w-[600px]">
                    <img src={mercadoLogo} alt="logo.png" className="h-full"/>
                </div>
                    

                <form id='form1' className="bg-white flex flex-col
                overflow-hidden p-3">

                    <div className="w-full text-center text-gray-700
                    text-2xl font-bold my-4">
                        <h4>Resumen de cuenta</h4>
                    </div>



                    {productos?.map((producto, i) => {
                        return (
                            <div key={i} className='my-3'>
                                <ul className="ul_mp_cont flex justify-between
                                font-medium text-gray-700">
                                    <li>{producto.title}</li>
                                    <li>{'$' + producto.price}</li>
                                </ul>
                            </div>
                        )
                    })}
                            
                       
                </form>

                </div>
            </div>

            <Footer/>
        </div>
    )
}
