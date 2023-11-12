import {React, useState, useEffect} from 'react';
import Logo from '../assets/riadandalouslogo.png';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { NavLink } from 'react-router-dom'
import './style.css';
import downloadPdf from '../../functions/DownloadMenu'

const Nav = () => {
  const [nav, setNav]= useState(false);
  const [scrolledNav , setScrollNav] = useState(false);
    function scrolled(){
            if(window.scrollY >= 100){
                setScrollNav(true)
            }
            if(window.scrollY <= 100){
                setScrollNav(false)
            }
    }
    useEffect(
    () => {
        window.addEventListener('scroll', scrolled);
    },[]
    )

    
      
      
  return (
    <nav className={scrolledNav ? 'p-4  z-40  shadow-lg bg-black sticky top-0 right-0' : ' p-4 relative z-50    '}>
      <div className={scrolledNav ? 'flex flex-row items-center text-white ' : 'flex flex-row items-center text-white '}>

        <div className="basis-1/4 hidden lg:block font-serif">
          <p >Casablanca</p>
          <p className='text-[#f26d35]'>hay 21, nr</p>
        </div>

        <div className="basis-1/2 ">
        <div className="flex flex-col lg:items-center space-y-4">   
            <div className={scrolledNav ? 'lg:hidden w-[60px] z-50' :'lg:w-[100px] w-[60px] z-50'}>
                      <img src={Logo} className='w-full h-full' />
            </div>
            <ul className= "lg:flex hidden gap-8 font-serif">
                <li className='hover:text-[#f26d35] cursor-pointer'>
                    <NavLink to="/">Accueil</NavLink>
                </li>
                <li className='hover:text-[#f26d35] cursor-pointer'>
                  <NavLink to="/About">A propros </NavLink>
                  </li>
                <li className='hover:text-[#f26d35] cursor-pointer'>
                  <NavLink to="/Galerie">Galerie </NavLink>

                  </li>
                <li onClick={downloadPdf} className='hover:text-[#f26d35] cursor-pointer'>
                  <NavLink to="/Menu">Menu </NavLink>

                  </li>
                <li className='hover:text-[#f26d35] cursor-pointer'>
                    <NavLink to="/Contact">Contact </NavLink>

                  </li>
                <li className='hover:text-[#f26d35] cursor-pointer'>
                    <NavLink to="/Booking">Reservation </NavLink>

                </li>
            </ul>
        </div>
        </div>

        <div  className="basis-1/4 hidden lg:block">
            <div className="flex flex-col items-end ">
                <p className='font-serif'>Reservation</p>
                <p className='text-[#f26d35]'>0688605515</p>
            </div>
        </div>

        <div onClick={() => setNav(!nav)} className='basis-1/2 lg:hidden'>
          <div className='flex justify-end items-center space-x-2'>
            {nav ?<AiOutlineClose className='text-white cursor-pointer z-50 hover:text-red-600'  size={20} />  :<>
              <p>Menu</p>
              <AiOutlineMenu size={20} className='text-white cursor-pointer'/>
              </>  }
          </div>
        </div>
      </div>

      <div className={ nav ? 'fixed top-0 left-0  w-full h-full text-white bg-[#252525]/90 ' : 'fixed right-0 top-0 h-[-100%]  p-4 hidden'}>
      
      <ul className='h-full w-full flex flex-col items-center justify-center text-white font-serif space-y-2'>
                <li  className='hover:text-[#f26d35] cursor-pointer'>
                  <NavLink to="/">Accueil</NavLink>

                </li>
                <li className='hover:text-[#f26d35] cursor-pointer'>
                  <NavLink to="/About">A propros </NavLink>

                </li>
                <li className='hover:text-[#f26d35] cursor-pointer'>
                  <NavLink to="/Galerie">Galerie </NavLink>

                </li>
                <li  className='hover:text-[#f26d35] cursor-pointer'>
                  <NavLink  to="/Menu">Menu </NavLink>

                </li>
                <li className='hover:text-[#f26d35] cursor-pointer'>
                    <NavLink to="/Contact">Contact </NavLink>

                  </li>
                <li className='hover:text-[#f26d35] cursor-pointer'>
                    <NavLink to="/Booking">Reservation </NavLink>

                  </li>
            </ul>
      </div>

    </nav>
  );
};

export default Nav;
