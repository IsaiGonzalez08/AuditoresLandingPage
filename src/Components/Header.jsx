import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/icon/Logo.svg";

export const Header = () => {
  let Links = [
    { name: "Inicio", link: "/" },
    { name: "Nosotros", link: "/Nosotros" },
    { name: "Servicios", link: "/Servicios" },
    { name: "Contáctanos", link: "/Contactanos" },
  ];
  
  let [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handelNavigateContacto = () => {
    navigate("/Contactanos");
  };

  return (
    
      <div className="flex items-center justify-around bg-[#FCFEFE] w-full custom:h-20 sm:h-32">
        <div className="cursor-pointer flex items-center">
          <NavLink to="/">
            <img className="custom:w-10 2xl:w-14" src={Logo} alt="Logo" />
          </NavLink>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="left-26 z-[1] ml-24 top-10 cursor-pointer sm:hidden w-8 h-8"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </button>

        <ul
          className={`sm:flex sm:gap-8 sm:ml-5 sm:items-center 2xl:ml-40 2xl:gap-16 sm:pb-0 pb-12 absolute sm:static bg-white sm:z-auto z-[0] left-10 w-full sm:w-auto sm:pl-0 pl-6 transition-all duration-500 ease-in ${
            open ? "top-10 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className={`text-[#548BA5] sm:text-xs md:text-sm lg:text-base text-base font-medium hover:scale-105 hover:duration-300 hover:border-b-2 hover:border-[#397A80] hover:font-bold ${
                open ? "py-3 " : ""
              }`}
            >
              <a href={link.link} className="">
                {link.name}
              </a>
            </li>
          ))}
          <div className="2xl:ml-14">
            <button
                onClick={handelNavigateContacto}
                className="sm:hidden bg-[#397A80] text-[#FCFEFE] rounded-[10px] text-base font-semibold hover:scale-105 hover:duration-300
                custom:w-24 custom:h-8 custom:text-sm"
            >
                Asesorías
            </button>
          </div>
        </ul>

        <button
            onClick={handelNavigateContacto}
            className="custom:hidden sm:block bg-[#397A80] text-[#FCFEFE] 
            rounded-[10px] text-base font-semibold hover:scale-105 
            hover:duration-300
            sm:w-20 sm:h-7 sm:text-xs
            xl:w-28 xl:h-8 xl:text-sm
            2xl:w-32 2xl:h-10 2xl:text-base"
          >
            Asesorías
          </button>
      </div>
  );
};