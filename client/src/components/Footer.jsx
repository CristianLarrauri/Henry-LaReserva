import React from 'react';
import styles from '../styles/Footer.module.css';
import { VscCircleFilled } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

export default function Footer() {
	return (
		<div className={styles.mainWrapper}>
			<div className={styles.subWrapper}>
				<div className={styles.section}>
					<h2>Sobre nosotros</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis,
						neque? Quisquam quae repudiandae magni necessitatibus ad sunt totam
						voluptas, excepturi blanditiis facilis, ipsa, aspernatur assumenda
						aliquam. Provident facere voluptas facilis.
					</p>
				</div>

				<div className={styles.section}>
					<h2>Menu</h2>
					<div className={styles.iconWrapper}>
						<VscCircleFilled className={styles.greenIcon} />
						<Link className={styles.link} to="/">
							Torneos
						</Link>
					</div>

					<div className={styles.iconWrapper}>
						<VscCircleFilled className={styles.greenIcon} />
						<Link className={styles.link} to="/inscription">
							Inscripciones
						</Link>
					</div>
				</div>

				<div className={styles.section}>
					<h2>¡Seguinos!</h2>

					<div className={styles.iconWrapper}>
						<AiFillInstagram className={styles.iconContact} />
						<Link className={styles.link} to="/">
							Instagram
						</Link>
					</div>

					<div className={styles.iconWrapper}>
						<AiFillTwitterCircle className={styles.iconContact} />
						<Link className={styles.link} to="/">
							Twitter
						</Link>
					</div>

					<div className={styles.iconWrapper}>
						<AiFillFacebook className={styles.iconContact} />
						<Link className={styles.link} to="/">
							Facebook
						</Link>
					</div>
				</div>
			</div>

			<div className={styles.underBar}>
				<AiOutlineCopyrightCircle />
				<p>
					Copyright {new Date().getFullYear()} by Los Magios. All rights
					reserved.
				</p>
			</div>
		</div>
	);
}
