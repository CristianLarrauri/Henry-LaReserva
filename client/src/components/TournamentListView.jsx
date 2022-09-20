import React from 'react';
import styles from '../styles/TournamentListView.module.css';
import icon from '../images/tournamentIcon_1.png';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function () {
	return (
		<Link to="/inscription" className={styles.mainWrapper}>
			<div className={styles.tournamentContainer}>
				<img src={icon} alt="icon" className={styles.icon} />
				<p>Tournament name</p>
			</div>

			<div className={styles.inscriptionWrapper}>
				Inscribite
				<AiOutlineArrowRight className={styles.icon} />
			</div>
		</Link>
	);
}
