import React from "react";
import Corner from "../images/Corner.jpeg"
import styles from '../styles/FlippingCard.module.css';

export default function Card({name,id,dateInit,genre,category}) {
    return (
        <div className={styles.card}>

            <div className={styles.front}>
                <h2 className="font-bold text-3xl">{name ? name : "No existe su torneo"}</h2>

                <div className="w-[200px] h-[200px] rounded-full absolute 
                left-0 right-0 ml-auto mr-auto top-0 bottom-0 mt-auto mb-auto overflow-hidden
                border outline outline-green-500 outline-4 outline-offset-4">
                    <img className="min-w-full min-h-full" src={Corner} alt="img.png" />
                </div>
            </div>

            <div className={styles.back}>
                <h2 className="text-2xl font-medium">Categoria: {category ? category : "No existe esa categoria"}</h2>
                <h2 className="text-2xl font-medium">Genero: {genre ? genre : "No existe este genero"}</h2>
                <h2 className="text-2xl font-medium">Inicio: {dateInit ? dateInit : "No hay fecha de inicio"}</h2>
            </div>
        </div>
    )
}