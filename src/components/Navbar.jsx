import {useEffect, useState} from 'react'
import {close, logo1, menu} from '../assets'
import {navLinks} from '../constants'
import { motion } from "framer-motion";
import styles from '../style';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  useEffect(() => {
    Aos.init({duration: 3000});
  }, [])

  const [activeButton, setActiveButton] = useState('home');
  const [active, setActive] = useState('')

  const changeColor = (id) => {
    setActiveButton(id)
  };

  return (
    <div id="home">
    <nav className={`flex py-6 items-center navbar justify-around backdrop-blur-lg shadow-md w-full fixed z-10 ${styles.paddingX} xl:px-[315px]`}>
      <hr className=''/>
      
      <a 
      href='#home' 
      // onClick={() => {setActive(""); window.scrollTo(0, 0) }} 
      className='cursor-pointer text-white'>

        <img src={logo1} alt="Dockerly" className='w-[124px] h-[40px] scale-[1.1]'/>

      </a>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
          key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[18px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} 
          text-${nav.id === activeButton ? 'white' : 'dimWhite'} hover:text-white ease-linear duration-300`}
          onClick={() => changeColor(nav.id)}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center cursor-pointer '>
        <div>
          <img src={toggle ? close : menu} 
            alt="menu" 
            className='w-[24px] h-[28px] object-contain'
            onClick={() => setToggle((prev) => !prev)}
          />

            {/* <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            /> */}
        </div>

          <div
          className={`${toggle ? 'flex' : 'hidden'} p-6 bg-gradient-to-r from-gray-600 to bg-gray-900 top-20 mx-4 min-w-[140px] rounded-xl absolute right-0 my-2 sidebar`}
          >
              <ul className='list-none flex flex-col justify-end items-center flex-1'>
                {navLinks.map((nav, index) => (
                <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} 
                    text-white`}
                  >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
                </li>
              ))}
            </ul> 
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar

// import React, { useEffect, useState } from "react";
// import styles from '../style';
// import { navLinks } from "../constants";
// import { logo, menu, close } from "../assets";

// const Navbar = () => {

//   const [active, setActive] = useState('')
//   const [toggle, setToggle] = useState(false)

//   return (
//     <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>

//         <div className=" w-full flex justify-between items-center max-w-7xl mx-auto">

//         <a href='#' 
//         // onClick={() => {setActive(""); window.scrollTo(0, 0) }} 
//         className='cursor-pointer text-white'>

//           <img src={logo} alt="Dockerly" className='w-[124px] h-[32px]'/>

//         </a>

//           <ul className=" list-none hidden sm:flex flex-row gap-10">
//               {navLinks.map((link) => (
//                 <li
//                   key={link.id}
//                   className={`${
//                     active === link.title 
//                       ? "text-white" 
//                       : "text-dimWhite"
//                   } hover:text-white text-[18px] font-medium cursor-pointer ease-in duration-150 font-poppins`}
//                   onClick={() => setActive (link.title)}
//                 >
//                   <a href={`#${link.id}`}>{link.title}</a>
//                 </li>
//               ))}
//           </ul>

//           <div className=" sm:hidden justify-end flex flex-1 items-center">
//             <img 
//               src={toggle ? close : menu} 
//               alt="menu" 
//               className="w-[28px] h-[28px] 
//               object-contain cursor-pointer"
//               onClick={() => setToggle(!toggle)}
//             />

//             <div className={`${!toggle ? 'hidden' : 'flex' } 
//             p-6  black-gradient absolute top-20 right-0 
//             mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>

//               <ul className=" list-none flex justify-in items-start flex-col gap-4">
//                 {navLinks.map((link) => (
//                   <li
//                     key={link.id}
//                     className={`${
//                       active === link.title 
//                         ? "text-white" 
//                         : "text-dimWhite"
//                     } font-poppins font-medium text-[16px] 
//                     cursor-pointer ease-in duration-150`}
//                     onClick={() => {
//                       setToggle(!toggle)
//                       setActive (link.title)
//                     }}
//                   >
//                     <a href={`#${link.id}`}>{link.title}</a>
//                   </li>
//                 ))}
//               </ul>

//             </div>
            
//           </div>
//         </div>

//     </nav>
//   )
// }

// export default Navbar