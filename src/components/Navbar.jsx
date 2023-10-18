import { useEffect, useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { motion } from 'framer-motion';
import styles from '../style';
import Aos from 'aos';
import { Disclosure, Transition } from '@headlessui/react';
import { Divide as Hamburger1 } from 'hamburger-react';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const [activeButton, setActiveButton] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = navLinks.map((nav) => {
        const section = document.getElementById(nav.id);
        return {
          id: nav.id,
          offset: section.offsetTop - window.innerHeight * 0.3,
          height: section.offsetHeight,
        };
      });

      const currentOffset = window.scrollY;

      for (let i = 0; i < sectionOffsets.length; i++) {
        if (
          currentOffset >= sectionOffsets[i].offset &&
          currentOffset < sectionOffsets[i].offset + sectionOffsets[i].height
        ) {
          setActiveButton(sectionOffsets[i].id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeColor = (id) => {
    setActiveButton(id);
  };

  return (
    <div>
      <nav className={`flex py-6 items-center navbar justify-around backdrop-blur-lg shadow-md w-full fixed z-10 ${styles.paddingX} xl:px-[315px]`}>
        <hr className="" />

        <a href="#home" className="cursor-pointer text-white">
          <img src={logo} alt="Hoobank" className="w-[124px] h-[40px] scale-[1.1]" />
        </a>

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[18px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} 
              text-${nav.id === activeButton ? 'white' : 'dimWhite'} hover:text-white ease-linear duration-300`}
              onClick={() => changeColor(nav.id)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center cursor-pointer ">
          <Disclosure>
            <Disclosure.Button className="rounded-xl p-2 text-white hover:text-gray-300 sm:hidden scale-90">
              <Hamburger1 toggled={toggle} toggle={setToggle} />
            </Disclosure.Button>
          </Disclosure>

          <div
            className={`${toggle ? 'flex' : 'hidden'} p-6 bg-gradient-to-r from-gray-600 to bg-gray-900 top-20 mx-4 min-w-[140px] rounded-xl absolute right-0 my-2 sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                  } 
                  text-white`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;