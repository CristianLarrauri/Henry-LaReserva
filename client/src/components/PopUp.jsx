import React from "react";
import styles from '../styles/PopUp.module.css';
import { useState, useEffect } from "react";

export default function PopUp(msg){
    const [actualState, setActualState] = useState(false);
    console.log(msg);
    useEffect(() => {
        setActualState(Object.keys(msg.msg).length!==0);
    },[msg]);

    return(
    <div className={actualState?styles.mainWrapper_visible:styles.mainWrapper_hidden}>
        <div className={actualState?styles.msgWrapper_open:styles.msgWrapper_hidden}>
            <h2 className={styles.msgTitle}>{msg.msg.title?msg.msg.title:'Error!'}</h2>
            <p>{msg.msg.msg?msg.msg.msg:'Ha ocurrido un error.'}</p>
            <button onClick={() => setActualState(false)} className={styles.popUpBtn}>Ok</button>
        </div>
    </div>
    );
}
//Este componente abre un popUp con el mensaje que le mandes por props

//Como usar:
//1 - Importar el componente en donde lo vayas a usar.
//2 - Poner el componente dentro del return asi: <PopUp msg={x}/>
//3 - x debera ser un estado de react, inicialmente x sera un objeto vacio {}
//4 - Cuando quieras abrir el popUp hacer que x cambie su valor de la forma siguiente
// x = {title: 'Titulo del popUp', msg: 'Mensaje del popUp'}
//5 - El popUp deberia estar ahora funcionando correctamente