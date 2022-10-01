// import React, { useEffect, useState } from 'react';
// import { useParams } from "react-router-dom";
// import axios from 'axios';
// const FORM_ID = 'payment-form';
// import FormPago from './FormPago';

// export default function BotonPago({ data }) {
//   // let usuario
//   // if(user){
//   //     usuario = {
//   //       name: user.username || "alex",
//   //       surname: user.surname || "jonatan",
//   //       email: user.email,
//   //     };
//   // }
//   //   console.log(usuario,"hola")
//   // const { id } = useParams(); // id de producto
//   const [preferenceId, setPreferenceId] = useState(null);

//   useEffect(() => {
//     // luego de montarse el componente, le pedimos al backend el preferenceId
//     axios
//       .get("http://localhost:3001/checkout")
//       .then((order) => {
//         setPreferenceId(order.data);
//       });
//   }, []);

//   useEffect(() => {
//     if (preferenceId) {
//       // con el preferenceId en mano, inyectamos el script de mercadoPago
//       const script = document.createElement("script");
//       script.type = "text/javascript";
//       script.src =
//         "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
//       script.setAttribute("data-preference-id", preferenceId);
//       const form = document.getElementById(FORM_ID);
//       form.appendChild(script);
//     }
//   }, [preferenceId]);

// ---------------------------------------------------------------

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BotonPago from "./BotonPago";
import axios from "axios";
import Loading from '../Loading';


function FormPago() {
  const dispatch = useDispatch();
  const mpData = useSelector((state) => state.mpData);
  const [datos, setDatos] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/mercadopago`)
      .then((data) => {
        setDatos(data?.data);
      })
      .catch((err) => console.error(err));
  }
    , []);


  const productos = [
    { title: "Torneo Inscripcion", price: 1 },
  ];
  return (
    <div className="">
      {!datos ? (
        <Loading/>
      ) : (
        <BotonPago productos={productos} data={datos} />
      )}
    </div>
  );
}

export default FormPago;