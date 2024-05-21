import React, { useState } from 'react';
import { NavLink,  } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    // const location = useLocation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMouseEnter = () => setIsDropdownOpen(true);
    const handleMouseLeave = () => setIsDropdownOpen(false);

    return (
        <div className=' h-20 hello1 flex gap-56'>
            <motion.div className='h-30 w-60 mb-12 mt-5 ml-10'>
                <img src="src/images/Screenshot 2024-02-21 093027.png" alt="bgimage" />
            </motion.div>
            <div className=' sm:hidden md:flex text-[1.7vw] font-normal gap-14 justify-center align-center font-roboto my-10 mt-20'>
                <NavLink
                    to="/"
                    id='home'
                    className={({ isActive }) => `hover:underline hover:decoration-current hover:decoration-solid hover:decoration-zinc-900 ${isActive ? 'text-zinc-900 font-bold' : ''}`}
                >
                    <motion.div>HOME</motion.div>
                </NavLink>
                <NavLink
                 to="/about"
                 id='about'
                
                    className={({ isActive }) => `hover:underline hover:decoration-current hover:decoration-solid hover:decoration-zinc-900 ${isActive ? 'text-zinc-900 font-bold' : ''}`}
                >
                    <motion.div>ABOUT</motion.div>
                </NavLink>
                <div
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <NavLink
                       
                        className='hover:underline hover:text-zinc-900 hover:decoration-current hover:decoration-solid hover:decoration-zinc-900'
                    >
                        <motion.div>SERVICES</motion.div>
                    </NavLink>
                    {isDropdownOpen && (
                        <motion.ul
                            className='absolute bg-white border rounded shadow-lg'
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <li className='px-4 py-2 hover:bg-gray-200 hover:text-zinc-900 ease-custom duration-300' key="tiling">
                                <NavLink to="/tiling">TILING</NavLink>
                            </li>
                            <li className='px-4 py-2 hover:bg-gray-200 hover:text-zinc-900 ease-custom duration-300' key="waterproofing">
                                <NavLink to="/waterproofing">WATERPROOFING</NavLink>
                            </li>
                            <li className='px-4 py-2 hover:bg-gray-200 hover:text-zinc-900 ease-custom duration-300' key="screeding">
                                <NavLink to="/screeding">SCREEDING</NavLink>
                            </li>
                            <li className='px-4 py-2 hover:bg-gray-200 hover:text-zinc-900 ease-custom duration-300' key="screeding">
                                <NavLink to="/caulking">CAULKING</NavLink>
                            </li>
                                <li className='px-4 py-2 hover:bg-gray-200 hover:text-zinc-900 ease-custom duration-300' key="tile-repairs">
                                <NavLink to="/tileRepair">TILE REPAIRS</NavLink>
                            </li>
                            <li className='px-4 py-2 hover:bg-gray-200 hover:text-zinc-900 ease-custom duration-300' key="indoor-outdoor">
                                <NavLink to="/indoor">INDOOR / OUTDOOR</NavLink>
                            </li>

                        </motion.ul>
                    )}
                </div>
                <NavLink
                    to="/portfolio"
                    id='portfolio'
                    className={({ isActive }) => `hover:underline hover:decoration-current hover:decoration-solid hover:decoration-zinc-900 ${isActive ? 'text-zinc-900 font-bold' : ''}`}
                >
                    <motion.div>PORTFOLIO</motion.div>
                </NavLink>
                <NavLink
                    to="/contact"
                    id='contact'
                    className={({ isActive }) => `hover:underline hover:decoration-current hover:decoration-solid hover:decoration-zinc-900 ${isActive ? 'text-zinc-900 font-bold' : ''}`}
                >
                    <motion.div>CONTACT</motion.div>
                </NavLink>
                <motion.div className="text-md border-4 h-16 rounded-md border-black">
                    <NavLink
                        to="/number"
                        id='number'
                        className={({ isActive }) => `${isActive ? 'text-zinc-900 font-bold' : ''}`}
                    >
                        61451580078
                    </NavLink>
                </motion.div>
            </div>
            <div className=' burger sm:block md:hidden  hamburger-menu  justify-center align-center text-[5vh]'>
                <a href="#"
                className=' '>
            <GiHamburgerMenu />

                </a>

            </div>
        </div>
    );
};

export default Navbar;
