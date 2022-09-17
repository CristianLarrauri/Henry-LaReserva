import React from 'react';
import Footer from './Footer';
import styles from '../styles/Home.module.css';
import NextTournaments from './NextTournaments';
import jugador from '../images/jugadorHome.png';
import {FaClock} from 'react-icons/fa';
import {MdLocationOn} from 'react-icons/md';
import Filter from '../components/Filter';
import TournamentCards from './TournamentCards';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTournaments } from '../redux/actions';


export default function Home() {

	// const [page,setPage] = useState(0)

	// const dispatch = useDispatch()

	// const tournaments = useSelector((state)=> state.tournaments)

	// useEffect(()=>{
	// 	dispatch(getAllTournaments(page))
	// },[])

	return (
		<div style={{width:'100%',minHeight:'100vh',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
			<div className={styles.mainWrapper}>
				<div className={styles.upperContainer}>
					<NextTournaments/>

					<div className={styles.nextTournamentWrapper}>
						<img src={jugador} alt="jugador.png" />

						<div className={styles.nextTournamentSubWrapper}>
							<div>
								<h2>Torneo</h2>
								<h2>La</h2>
								<h2>Reserva</h2>
							</div>

							<div className={styles.infoContainer}>
								<div>
									<FaClock className={styles.icon}/>
									<p>00:00:00 AM</p>
								</div>

								<div>
									<MdLocationOn className={styles.icon}/>
									<p>Calle falsa 123</p>
								</div>
							</div>
						</div>

						<div className={styles.halfCircle}></div>
						
						<div className={styles.btnContainer}>
							<button>Inscribite</button>
						</div>
					</div>
				</div>

				<Filter/>
				<TournamentCards/>
			</div>

			<Footer/>
		</div>
	);

}
