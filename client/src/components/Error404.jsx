import React from "react";
import { Link } from "react-router-dom";
import notFoundImg from '../images/NotFound.png';
import styles from '../styles/Error404.module.css';
import Footer from '../components/Footer';
import {IoIosArrowBack} from 'react-icons/io';
import Nav from '../components/Nav';

export default function Error404() {
  return (
    <div className = "bg-gray-100 flex flex-nowrap w-5/5 flex-col justify-between">
    <Nav/>
    <button className={styles.btn}>
      <Link to="/home" className="flex justify-center items-center">
        <IoIosArrowBack/>
        <p>Volver</p>
      </Link>
    </button>
    
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-center animate-appear">
        <img src={notFoundImg} alt="notFound.jpg"/>
      </div>
    </div>

    <Footer/>
    </div>
  );
}


