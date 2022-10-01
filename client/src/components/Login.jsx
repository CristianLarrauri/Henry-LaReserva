import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setActualUser } from '../redux/actions/index';

export default function Login(props){
    const {isLoading, user, loginWithRedirect} = useAuth0();
    const history = useHistory();
	const dispatch = useDispatch();

    useEffect(() => {
        //Preguntar si el usuario esta logeado (!isLoading && user)
		//Si el usuario esta logeado agarrar su mail y preguntar en el backend si el email existe
		//Si el email existe no hacer nada
		//Si el email no existe crear el usuario en la db
		console.log(props.to);
		if(!props.authed) loginWithRedirect({
			redirectUri: `http://localhost:3000${props.to}`
		});

        if(!isLoading && user){
			axios.post('http://localhost:3001/users/post', {
				email: user.email,
				name: user.name,
				img: user.picture
			})
			.then((info) => {//En caso de exito redirige al home
				console.log('Creado con exito');
				let userInfo = info.data[0];
				dispatch(setActualUser(userInfo.name, userInfo.ban, userInfo.admin));
                history.push('/home');
			})
			.catch((error) => {
				console.error('Error al crear el usuario');
				history.push('/home');
			});
        }
    }, [isLoading]);

    return(
        <div>
        </div>
    );
}
