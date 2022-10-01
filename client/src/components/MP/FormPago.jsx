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