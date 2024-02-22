import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/icon/Logo.svg'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
    let Links =[
        {name:"Inicio",link:"/"},
        {name:"Nosotros",link:"/Nosotros"},
        {name:"Servicios",link:"/Servicios"},
        {name:"Contáctanos",link:"/Contactanos"},
      ];
      let [open, setOpen] =useState(false);
      const navigate = useNavigate()

      const handelNavigateContacto = () => {
          navigate('/Contactanos')
      }

    return (
        <div className=' '>
           <div className='md: flex items-center justify-around bg-[#FCFEFE] w-full h-32'>
           
            <div className='cursor-pointer flex items-center'>
            <NavLink to="/"><img src={Logo} alt="Logo" /></NavLink>
            </div>
           
            <div onClick={()=>setOpen(!open)} className='left-26  z-[1] ml-24 top-10 cursor-pointer md:hidden w-12 h-12'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
          
            <ul className={`md:flex md:gap-14 md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[0] left-10 w-full md:w-auto md:pl-0 pl-6 transition-all duration-500 ease-in ${open ? 'top-10 ' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className={`text-[#548BA5] text-base font-medium hover:scale-105 hover:duration-300 hover:border-b-2 hover:border-[#397A80] hover:font-bold ${open ? 'py-3 ' : ''}`}>
                        <a href={link.link} className=''>{link.name}</a>
                    </li>))
                }
               
                <button onClick={handelNavigateContacto} className='bg-[#397A80] text-[#FCFEFE] w-32 h-10 rounded-[10px] text-base font-semibold hover:scale-105 hover:duration-300'>Asesorías</button>

            </ul>
           </div>
        </div>
    );
};

