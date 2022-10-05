import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { RiFootballLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addGoal, quitGoal } from '../redux/actions';

export default function ScorersTable({ id }) {
	const [scorersInfo, setScorersInfo] = useState([]);
	const dispatch = useDispatch();
	const userDetail = useSelector((state) => state.actualUser);
	const handleAddGoal = (e) => {
		dispatch(addGoal(e.target.value));
	};

	const handleQuitGoal = (e) => {
		dispatch(quitGoal(e.target.value));
	};
	useEffect(() => {
		axios
			.get(`http://localhost:3001/scorers?tournament=${id}`)
			.then((data) => setScorersInfo(data.data));
	}, []);

	return (
		<table className="w-full relative bg-white text-gray-800 shadow shadow-gray-700">
			<div className="min-h-[70px]" />

			<div
				className="absolute w-full top-0 left-0 flex items-center 
            justify-center min-h-[70px] bg-white"
			>
				<RiFootballLine className="text-2xl" />
				<h2 className="text-2xl font-bold py-3 ml-2">TOP GOLEADORES</h2>
			</div>

			<tr className="font-bold text-xl bg-white h-[50px] text-center">
				<td>Posicion</td>
				<td>Jugador</td>
				<td>Goles</td>
			</tr>

			{scorersInfo[0] ? (
				scorersInfo.map((player, index) => {
					return (
						<tr
							key={`trScr${index}`}
							className="text-center font-medium border-b border-t
                     border-black text-lg"
						>
							<td className="py-1">{index + 1}</td>
							<td>{player.name + ` ` + player.surname}</td>
							<td value={player.id} className="text-green-700">
								{player.goals}
							</td>
							{userDetail.admin === true ? (
								<button
									value={player.id}
									onClick={(e) => handleQuitGoal(e)}
									className="mr-3 px-4 py-4 bold text-2xl"
								>
									-
								</button>
							) : null}
							{userDetail.admin === true ? (
								<button
									value={player.id}
									onClick={(e) => handleAddGoal(e)}
									className="mr-3 px-4 py-4 bold text-2xl"
								>
									+
								</button>
							) : null}
						</tr>
					);
				})
			) : (
				<tr className="flex justify-center font-bold text-xl w-full absolute">
					<td className="p-3"></td>
				</tr>
			)}
		</table>
	);
}
