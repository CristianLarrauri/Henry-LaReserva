import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BiDownArrow } from 'react-icons/bi';
import axios from 'axios';

export default function Profile() {
	const { loginWithRedirect, logout, user, isLoading } = useAuth0();

	useEffect(() => {
		//Idea para el login
		if (!isLoading && user) {
			axios
				.post('http://localhost:3001/users/post', {
					email: user.email,
					name: user.name,
					img: user.picture
				})
				.then((info) => {
					console.log('creado con exito');
				})
				.catch((error) => {
					console.log('usuario no creado');
				});
		}
		//Preguntar si el usuario esta logeado (!isLoading && user)
		//Si el usuario esta logeado agarrar su mail y preguntar en el backend si el email existe
		//Si el email existe no hacer nada
		//Si el email no existe crear el usuario en la db
	}, []);

	return (
		<div>
			{!isLoading && !user && (
				<button
					className="bg-gray-200 p-3 rounded font-medium hover:scale-110 duration-300"
					onClick={() =>
						loginWithRedirect({
							redirectUri: 'http://localhost:3000/home'
						})
					}
				>
					Conectarse
				</button>
			)}
			{!isLoading &&
				user && ( //PONER ACA LAS COSAS QUE SE TIENEN QUE VER SI ESTAS CONECTADO
					<button
						className="bg-gray-200 p-3 rounded font-medium hover:scale-110 duration-300"
						onClick={() =>
							logout({
								returnTo: 'http://localhost:3000/home'
							})
						}
					>
						Desconectarse
					</button>
				)}
		</div>
	);
}
