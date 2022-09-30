import React, { useState } from "react";
import { useEffect } from "react";

export default function BotonPago({ productos, data }) {
    useEffect(() => {
        const script = document.createElement("script"); //Crea un elemento html script

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
        };

    }, [data]);
    return (
        <div >
            <div >
                <div >
                    <form id='form1'>
                        <h4>Resumen de cuenta</h4>
                        <div>
                            {productos?.map((producto, i) => {
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
                    </form>
                </div>
            </div>
        </div>
    )
}