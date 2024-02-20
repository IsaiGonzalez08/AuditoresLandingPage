import { NavLink } from 'react-router-dom'
import Logo from '../assets/icon/Logo.svg'

export const Header = () => {
    return(
        <div className="flex items-center justify-around bg-[#FCFEFE] w-full h-32">
            <div className="flex items-center">
                <NavLink to="/"><img src={Logo} alt="Logo" /></NavLink>
            </div>
            <div className="flex gap-14 items-center">
                <NavLink className='text-[#548BA5] text-base font-medium hover:scale-105 hover:duration-300 hover:border-b-2 hover:border-[#397A80] hover:font-bold' to="/">Inicio</NavLink>
                <NavLink className='text-[#548BA5] text-base font-medium hover:scale-105 hover:duration-300 hover:border-b-2 hover:border-[#397A80] hover:font-bold' to="/Nosotros">Nosotros</NavLink>
                <NavLink className='text-[#548BA5] text-base font-medium hover:scale-105 hover:duration-300 hover:border-b-2 hover:border-[#397A80] hover:font-bold' to="">Servicios</NavLink>
                <NavLink className='text-[#548BA5] text-base font-medium hover:scale-105 hover:duration-300 hover:border-b-2 hover:border-[#397A80] hover:font-bold' to="/Contactanos">Contáctanos</NavLink>
            </div>
            <div className="flex">
                <button className='bg-[#397A80] text-[#FCFEFE] w-32 h-10 rounded-[10px] text-base font-semibold hover:scale-105 hover:duration-300'>Asesorías</button>
            </div>
        </div>
    )
}