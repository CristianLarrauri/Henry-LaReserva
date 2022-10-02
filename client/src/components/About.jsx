import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Nav from './Nav';
import icon from "../images/tournamentIcon_1.png";
import github from '../images/github_icon.png';
import linkedin from '../images/linkedin_icon.png';
import maxi from '../images/maxi_profile.png';

export default function About() {
  return (
   <div className="bg-red-300 flex flex-col justify-between min-h-screen">
      <Nav/>

      <div className="flex justify-center overflow-hidden">{/*main section*/}

        <div className="bg-yellow-300 w-[300px] h-[530px] relative 
        rounded-t-[100%100px] rounded-b-3xl bg-gradient-to-tr 
        from-yellow-500 via-yellow-200 to-yellow-500 shadow-inner shadow-gray-500
        mt-3 overflow-hidden ">

          <div className="bg-red-300 w-[100px] h-[100px] absolute 
          top-[-50px] left-[-50px] rounded-full shadow shadow-gray-500"/>
          <div className="bg-red-300 w-[100px] h-[100px] absolute 
          top-[-50px] right-[-50px] rounded-full shadow shadow-gray-500"/>

          <div className="bg-red-300 w-[300px] h-[300px] rounded-[100%10px]
          absolute bottom-[-100px] left-[-150px] rotate-[60deg] 
          shadow-inner shadow-gray-500"/>

          <div className="bg-red-300 w-[300px] h-[300px] rounded-[100%10px]
          absolute bottom-[-100px] right-[-150px] rotate-[-60deg] scale-x-[-1]
          shadow-inner shadow-gray-500"/>

          <div className="bg-red-300 w-full h-[67px] absolute bottom-0"/>

          <div className="bg-transparent w-full h-7/12 flex justify-between items-end">
            
            <div className="h-[200px] w-5/12 flex flex-col justify-around 
            items-center">
              <div className="text-center border-b text-yellow-800 border-yellow-800">
                <h2 className="font-bold text-5xl">91</h2>
                <h3 className="font-medium text-xl">FULLSTACK</h3>
              </div>

              <div className="w-[53px] h-[56px] overflow-hidden border-b border-yellow-800">
                <img className="w-full" src={github} alt="githubIcon.png" />
              </div>

              <div className="w-[53px] h-[53px] overflow-hidden">
                <img className="h-full w-full" src={linkedin} alt="linkedinIcon.png" />
              </div>
            </div>

            <div className="w-7/12 h-full flex items-end">
              <img src={maxi} className='w-full' alt='portrait.png' />
            </div>
          </div>

          <div className="text-yellow-800 flex flex-col items-center">
            <h2 className="font-bold text-[1.4em]">MAXIMILIANO GIAGNORIO</h2>
            <div className="w-5/6 border-b border-yellow-700"/>

            <div className="w-full flex justify-around mt-3">
              <div>
                <div className="flex justify-between w-[75px] items-end">
                  <h3 className="font-bold text-xl">84</h3>
                  <p className="font-medium text-xl">PAC</p>
                </div>
                
                <div className="flex justify-between w-[75px] items-end">
                  <h3 className="font-bold text-xl">87</h3>
                  <p className="font-medium text-xl">SHO</p>
                </div>
                
                <div className="flex justify-between w-[75px] items-end">
                  <h3 className="font-bold text-xl">90</h3>
                  <p className="font-medium text-xl">PASS</p>
                </div>
              </div>

              <div>
                <div className="flex justify-between w-[75px] items-end">
                  <h3 className="font-bold text-xl">81</h3>
                  <p className="font-medium text-xl">DRI</p>
                </div>
                
                <div className="flex justify-between w-[75px] items-end">
                  <h3 className="font-bold text-xl">54</h3>
                  <p className="font-medium text-xl">DEF</p>
                </div>
                
                <div className="flex justify-between w-[75px] items-end">
                  <h3 className="font-bold text-xl">83</h3>
                  <p className="font-medium text-xl">PHY</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <Footer/>
   </div> 
  )
}




