import React from "react";
import styles from '../styles/Footer.module.css';
import {VscCircleFilled} from 'react-icons/vsc'
import { Link } from "react-router-dom";
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {AiFillFacebook} from 'react-icons/ai';
import {AiOutlineCopyrightCircle} from 'react-icons/ai';

export default function Footer() {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.subWrapper}>
          <div className={styles.section}>
            <h2>Sobre nosotros</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, neque? Quisquam quae repudiandae magni necessitatibus ad sunt totam voluptas, excepturi blanditiis facilis, ipsa, aspernatur assumenda aliquam. Provident facere voluptas facilis.</p>
          </div>

          <div className={styles.section}>
            <h2>Menu</h2>
            <div className={styles.iconWrapper}>
              <VscCircleFilled className={styles.greenIcon}/>
              <Link className={styles.link} to='/'>Torneos</Link>
            </div>

            <div className={styles.iconWrapper}>
              <VscCircleFilled className={styles.greenIcon}/>
              <Link className={styles.link} to='/inscription'>Inscripciones</Link>
            </div>

          </div>

          <div className={styles.section}>
            <h2>¡Seguinos!</h2>
            
            <div className={styles.iconWrapper}>
              <AiFillInstagram className={styles.iconContact}/>
              <Link className={styles.link} to='/'>Instagram</Link>
            </div>

            <div className={styles.iconWrapper}>
              <AiFillTwitterCircle className={styles.iconContact}/>
              <Link className={styles.link} to='/'>Twitter</Link>
            </div>

            <div className={styles.iconWrapper}>
              <AiFillFacebook className={styles.iconContact}/>
              <Link className={styles.link} to='/'>Facebook</Link>
            </div>
          </div>
        </div> 

        <div className={styles.underBar}>
          <AiOutlineCopyrightCircle/>
          <p>Copyright {new Date().getFullYear()} by Los Magios. All rights reserved.</p>
        </div>
    </div>
  );
}

    /* <div className="container  bg-slate-300 mt-[50%] ">
      <div className="grid grid-cols-3 gap-2 justify-center">
        <div className=" mx-auto">
          <h5 className="text-2xl">Nosotros</h5>
          <ul>
            <li>
              <a className="underline" href="">
                El complejo
              </a>
            </li>
            <li>
              <a className="underline" href="">
                Contactanos
              </a>
            </li>
          </ul>
        </div>
        <div className=" mx-auto">
          <h5 className="text-2xl">Menu</h5>
          <ul>
            <li>
              <a className="underline" href="">
                Torneo
              </a>
            </li>
            <li>
              <a className="underline" href="">
                Inscripcion
              </a>
            </li>
          </ul>
        </div>
        <div className="grid">
          <h5 className="text-2xl">Seguinos!</h5>
          <ul>
            <li>
              {" "}
              <a
                href="https://www.instagram.com"
              ></a>
              <FontAwesomeIcon icon={faInstagram} />
            </li>
            <li>
              <a href="https://www.w3schools.com/" />
              <FontAwesomeIcon
                icon={faFacebook}
                href="https://www.instagram.com"
              />
            </li>
            <li>
              <a href="https://www.w3schools.com/" />
              <FontAwesomeIcon icon={faTwitter} />
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center content-center bg-green-400 ">
        <p>
          &copy;{new Date().getFullYear()} by Los Magios | All Rights Reserved
        </p>
      </div>

    </div> */
