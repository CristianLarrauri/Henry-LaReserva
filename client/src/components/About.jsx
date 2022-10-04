import React from "react";
import Footer from "./Footer";
import Nav from './Nav';
import github from '../images/github_icon.png';
import linkedin from '../images/linkedin_icon.png';
import cristian from '../images/pinu_profile.png';
import mati from '../images/mati_profile.png';
import fran from '../images/fran_profile.png';
import braian from '../images/brian_profile.png';
import nico from '../images/nico_profile.png';
import maxi from '../images/maxi_profile.png';
import mauro from '../images/mauro_profile.png';
import juan from '../images/juan_profile.png';
import { useState } from "react";
import {FaReact} from 'react-icons/fa';
import {SiRedux, SiTailwindcss, SiAuth0, SiPostgresql, SiSequelize} from 'react-icons/si';
import {FaNode} from 'react-icons/fa';
import {DiJavascript1} from 'react-icons/di';


import {FaCcVisa} from 'react-icons/fa';


export default function About() {
  const teamInfo = [
    {fullName: 'CRISTIAN LARRAURI', github: 'https://github.com/CristianLarrauri', linkedin: 'https://www.linkedin.com/in/cristianlarrauri', picture: cristian, stats: [84,87,90,81,54,83]},
    {fullName: 'MATIAS FRANCO', github: 'https://github.com/MatiasFranco289', linkedin: 'https://www.linkedin.com/in/matiasfranco289', picture: mati, stats: [68,94,79,65,34,86]},
    {fullName: 'FRANCO BOSCO', github: 'https://github.com/FranBosco', linkedin: 'https://www.linkedin.com/in/franco-bosco-677a62238', picture: fran, stats: [81,67,87,76,65,92]},
    {fullName: 'BRAIAN GARCIA', github: 'https://github.com/braiangarcia99', linkedin: 'https://www.linkedin.com/in/braian-garcia-755a0a122', picture: braian, stats: [88,45,76,82,86,34]},
    {fullName: 'NICOLAS CARBALLO', github: 'https://github.com/Neiko1210', linkedin: 'https://www.linkedin.com/in/nicolas-carballo-5265a422b', picture: nico, stats: [75,54,96,84,74,75]},
    {fullName: 'JUAN MONTYN', github: 'https://github.com/BerrazMontyn', linkedin: 'https://www.linkedin.com/in/juan-manuel-berraz-montyn-b25962194', picture: juan, stats: [63,89,91,82,85,75]},
    {fullName: 'MAXIMILIANO GIAGNORIO', github: 'https://github.com/mxgiagnorio', linkedin: 'https://www.linkedin.com/in/maximiliano-giagnorio', picture: maxi, stats: [84,86,75,78,84,88]},
    {fullName: 'MAURO ALOS', github: 'https://github.com/MauroDavid512', linkedin: 'https://www.linkedin.com/in/mauro-alós-89432b193', picture: mauro, stats: [75,84,69,87,85,62]}
  ];
  const [overlay, setOverlay] = useState(false);

  return (
   <div className="bg-white flex flex-col justify-between min-h-screen text-center items-center overflow-hidden">
      <div className={`w-screen h-screen fixed left-0 top-0 backdrop-blur-lg
      z-20 ${overlay?'opacity-1':'opacity-0'} ${overlay?'delay-300':'delay-0'} 
      duration-300 pointer-events-none z-10`}/>
      <Nav/>
      <h1 className="text-green-500 font-bold text-4xl mt-6">NUESTRO EQUIPO</h1>
      <div className=" w-full flex pt-16 bg-white shadow shadow-gray-700 p-3 mt-12 sm:w-5/6">{/*main section*/}
        <div className="w-full flex justify-around flex-wrap pt-16 bg-white overflow-hidden">
        {teamInfo.map((member, index) => {
          return (
            <div className={`bg-yellow-300 w-[300px] min-w-[300px] h-[530px] relative 
            rounded-t-[100%100px] rounded-b-3xl bg-gradient-to-tr 
            from-yellow-500 via-yellow-200 to-yellow-500 shadow-inner shadow-gray-500
            m-14 duration-300 ${overlay?'hover:scale-110':'scale-100'} animate-appear
            z-0 hover:z-20 ${overlay?'delay-0':'delay-200'} hover:bg-gradient-to-r`}>

            <div className="bg-white w-[100px] h-[100px] absolute 
            top-[-50px] left-[-50px] rounded-full"/>
            <div className="bg-white w-[100px] h-[100px] absolute 
            top-[-50px] right-[-50px] rounded-full"/>

            <div className="bg-white w-[300px] h-[300px] rounded-[100%10px]
            absolute bottom-[-100px] left-[-150px] rotate-[60deg] 
            "/>

            <div className="bg-white w-[300px] h-[300px] rounded-[100%10px]
            absolute bottom-[-100px] right-[-150px] rotate-[-60deg] scale-x-[-1]
            "/>

            <div className="bg-white w-full h-[67px] absolute bottom-0"/>
            
            <div 
            onMouseEnter={() => setOverlay(true)}
            onMouseLeave={() => setOverlay(false)}>
            <div className="bg-transparent w-full h-7/12 flex justify-between items-end">
            
            <div className="h-[200px] w-5/12 flex flex-col justify-around 
            items-center">
              <div className="text-center border-b text-yellow-800 border-yellow-800">
                <h2 className="font-bold text-5xl">{91+index}</h2>
                <h3 className="font-medium text-xl">FULLSTACK</h3>
              </div>

              <a href={member.github} target='_blank' className="w-[53px] h-[56px] border-b border-yellow-800 duration-300 hover:scale-110">
                <img className="w-full" src={github} alt="githubIcon.png" />
              </a>

              <a href={member.linkedin} target='_blank' className="w-[53px] h-[53px] duration-300 hover:scale-110">
                <img className="h-full w-full" src={linkedin} alt="linkedinIcon.png" />
              </a>
            </div>

            <div className="w-7/12 h-full flex items-end">
              <img src={member.picture} className='w-full' alt='portrait.png' />
            </div>
          </div>

          <div className="text-yellow-800 flex flex-col items-center">
            <h2 className="font-bold text-[1.4em]">{member.fullName}</h2>
            <div className="w-5/6 border-b border-yellow-700"/>

            <div className="w-full flex justify-around mt-3">
              <div>
                <div className="flex justify-between w-[75px] items-end">
                  <h3 className="font-bold text-xl">{member.stats[0]}</h3>
                  <p className="font-medium text-xl">PAC</p>
                </div>
                
                <div className="flex justify-between w-[75px] items-end">
                  <h3 className="font-bold text-xl">{member.stats[1]}</h3>
                  <p className="font-medium text-xl">SHO</p>
                </div>
                
                <div className="flex justify-between w-[75px] items-end">
                  <h3 className="font-bold text-xl">{member.stats[2]}</h3>
                  <p className="font-medium text-xl">PASS</p>
                </div>
              </div>

              <div>
                <div className="flex justify-between w-[75px] items-end">
                  <h3 className="font-bold text-xl">{member.stats[3]}</h3>
                  <p className="font-medium text-xl">DRI</p>
                </div>
                
                <div className="flex justify-between w-[75px] items-end">
                  <h3 className="font-bold text-xl">{member.stats[4]}</h3>
                  <p className="font-medium text-xl">DEF</p>
                </div>
                
                <div className="flex justify-between w-[75px] items-end">
                  <h3 className="font-bold text-xl">{member.stats[5]}</h3>
                  <p className="font-medium text-xl">PHY</p>
                </div>
              </div>

            </div>
          </div>
          </div>

          </div>

        )
        })}
        </div>
      </div>

        <div className="w-full flex flex-col items-center mt-24">

          <div className="text-gray-700 text-center w-4/6 bg-white p-6 shadow shadow-gray-700">
            <h2 className="font-bold text-3xl mb-3 text-green-500">Quienes somos?</h2>

            <p className="text-xl text-left">
              Somos un equipo de 8 desarrolladores web Full Stack.
              Para nuestra ultima
              etapa del bootcamp tuvimos como objetivo realizar una web app donde
              los usuarios pudieran registrarse para jugar torneos amateur de futbol.
              A traves de esta pagina pudimos poner en practica y reforzar nuestros
              conocimientos asi como ampliar nuestras habilidades, no solo a nivel
              tecnico, sino tambien aprendiendo a trabajar en equipo, diviendo, organizando
              y cooperando para sacar adelante este proyecto.
            </p>
          </div>

          <div className="text-gray-700 text-center w-4/6 bg-white p-6 shadow shadow-gray-700 mt-6">
            <h2 className="font-bold text-3xl mb-3 text-green-500">Que tecnologias usamos?</h2>

            <div className="w-full flex justify-center flex-wrap">
              <FaReact className="text-8xl m-10 group"/>
              <SiRedux className="text-8xl m-10"/>
              <SiTailwindcss className="text-8xl m-10"/>
              <SiAuth0 className="text-8xl m-10"/>
              <FaNode className="text-8xl m-10"/>
              <DiJavascript1 className="text-8xl m-10"/>
              <SiPostgresql className="text-8xl m-10"/>
              <SiSequelize className="text-8xl m-10"/>
              <FaCcVisa className="text-8xl m-10"/>
            </div>
          </div>
        </div>
      <Footer/>
   </div> 
  )
}




