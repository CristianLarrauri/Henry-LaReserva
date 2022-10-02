import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../images/NotFound.png';
import styles from '../styles/Error404.module.css';
import Footer from './Footer';
import { BiArrowBack } from 'react-icons/bi';
import Nav from './Nav';

export default function Error404() {
	return (
		<div className="bg-gray-100 flex flex-nowrap w-5/5 flex-col justify-between min-h-screen">
			<Nav />

			<Link to='/home' className='bg-green-500 w-[180px] h-[80px] rounded-full m-8 z-50
			hover:scale-110 duration-300 text-white
			flex justify-center items-center animate-appear
			absolute top-72 xl:top-28'>
				<p className='text-xl font-bold flex items-center justify-center'>
					<BiArrowBack className="mr-3" />
					Volver
				</p>
			</Link>

			<div className="flex justify-center items-center flex-col text-center">
				<div className="text-center animate-appear mt-28">
					<img src={notFoundImg} alt="notFound.jpg" />
				</div>
				<h2 className='text-black text-lg font-medium mt-6'>
					Si crees que se trata de un error contactanos
					enviando un mail a <p className='text-green-700'>lareserva@gmail.com</p>
				</h2>
			</div>

			<Footer />
		</div>
	);
}
