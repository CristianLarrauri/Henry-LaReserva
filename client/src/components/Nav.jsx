import { React, Fragment } from 'react';
import Logo from '../images/LaReservaLogo.png';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import { BiDownArrow } from 'react-icons/bi';
import Profile from './Profile';

export default function Nav() {
	return (
		<div className="flex flex-col justify-between items-center w-full bg-white xl:flex-row border-b-8 border-gray-200">
			<div>
				<Link to="/home">
					<img src={Logo} alt="logo.png" />
				</Link>
			</div>

      <div className="w-9/12 flex justify-center flex-wrap items-center xl:justify-between xl:flex-nowrap">
        <div className="flex justify-between mt-3 w-5/12 min-w-[280px]
         flex-col items-center sm:flex-row sm:min-w-[320px] max-w-[450px]">
          <Link
            to="/tournaments"
            className="text-stone-400 text-2xl hover:text-green-500 mr-3"
          >
            Torneos
          </Link>

          <Link
            to="/inscription"
            className="text-stone-400 text-2xl hover:text-green-500"
          >
            Inscripciones
          </Link>

          <Link
            to="/reviews"
            className="text-stone-400 text-2xl hover:text-green-500 ml-3"
          >
            Reseñas
          </Link>
        </div>

        {/* <SearchBar /> */}

        <div className="flex items-center mt-3 mb-3 mx-6">
          <Profile/>
        </div>
      </div>
    </div>
  );
}
