import React, { useState } from "react";
import { useEffect } from "react";
import Nav from '../Nav';
import Footer from '../Footer';
import mercadoLogo from '../../images/MercadoPago.png';
import axios from "axios";

export default function BotonPago({ productos, data }) {
    useEffect(() => {
        const script = document.createElement("script"); //Crea un elemento html script

        const payload = {
            email:"nico.gye33@gmail.com",
            option:"Pago"
        }

        const attr_data_preference = document.createAttribute("data-preference-id"); //Crea un nodo atribute
        attr_data_preference.value = data.id; //Le asigna como valor el id que devuelve MP

        //Agrega atributos al elemento script
        script.type = 'text/javascript';
        script.src = 'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js';
        // script.crossorigin="anonymous";
        script.setAttributeNode(attr_data_preference);


        //Agrega el script como nodo hijo del elemento form
        document.getElementById("form1").appendChild(script);
        return () => {
            //Elimina el script como nodo hijo del elemento form
            document.getElementById("form1").removeChild(script);
            axios.post("http://localhost:3001/email",payload)
                .then((data)=>{
                    return data
                })
                .catch((err)=> console.log(err))
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