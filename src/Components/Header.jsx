import { NavLink } from 'react-router-dom'
import Logo from '../assets/icon/Logo.svg'
import { useNavigate } from 'react-router-dom'

export const Header = () => {

    const navigate = useNavigate()

    const handelNavigateContacto = () => {
        navigate('/Contactanos')
    }

    return(
        <div className="flex items-center justify-around bg-[#FCFEFE] w-full h-32">
            <div className="flex items-center">
                <NavLink to="/"><img className='custom:w-8 sm:w-10 md:w-12' src={Logo} alt="Logo" /></NavLink>
            </div>
            <div className="flex gap-14 items-center custom:gap-4 sm:gap-5 md:gap-8 lg:gap-10">
                <NavLink className='text-[#548BA5] text-base font-medium hover:scale-105 
                                    hover:duration-300 hover:border-b-2 hover:border-[#397A80] hover:font-bold 
                                    custom:text-xs sm:text-xs lg:text-base xl:text-lg' to="/">
                Inicio
                </NavLink>
                
                <NavLink className='text-[#548BA5] text-base font-medium hover:scale-105 
                                    hover:duration-300 hover:border-b-2 hover:border-[#397A80] hover:font-bold 
                                    custom:text-xs sm:text-xs lg:text-base xl:text-lg' to="/Nosotros">
                Nosotros
                </NavLink>
               
                <NavLink className='text-[#548BA5] text-base font-medium hover:scale-105 
                                    hover:duration-300 hover:border-b-2 hover:border-[#397A80] hover:font-bold 
                                    custom:text-xs sm:text-xs lg:text-base xl:text-lg' to="/Servicios">
                Servicios
                </NavLink>
                
                <NavLink className='text-[#548BA5] text-base font-medium hover:scale-105 
                                    hover:duration-300 hover:border-b-2 hover:border-[#397A80] hover:font-bold 
                                    custom:text-xs sm:text-xs lg:text-base xl:text-lg' to="/Contactanos">
                Contáctanos
                </NavLink>
            </div>
            <div className="flex">
                <button onClick={handelNavigateContacto} 
                    className='bg-[#397A80] text-[#FCFEFE] w-32 h-10 rounded-[10px] 
                    text-base font-semibold hover:scale-105 hover:duration-300
                    custom:hidden sm:block sm:w-24 sm:h-7 custom:text-sm sm:text-xs
                    md:w-28 md:h-8 md:text-xs lg:w-32 lg:h-10 lg:text-base'
                >Asesorías
                </button>
            </div>
        </div>
    )
}