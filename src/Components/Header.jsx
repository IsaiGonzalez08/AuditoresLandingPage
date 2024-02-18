import Logo from '../assets/icon/Logo.svg'

export const Header = () => {
    return(
        <div className="flex items-center justify-around bg-[#FCFEFE] w-full h-32">
            <div className="flex items-center">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="flex gap-14 items-center">
                <a className='text-[#548BA5] text-base font-medium hover:scale-105 hover:duration-300 hover:border-b-2 hover:border-[#397A80] hover:font-bold' href="">Inicio</a>
                <a className='text-[#548BA5] text-base font-medium hover:scale-105 hover:duration-300 hover:border-b-2 hover:border-[#397A80] hover:font-bold' href="">Nosotros</a>
                <a className='text-[#548BA5] text-base font-medium hover:scale-105 hover:duration-300 hover:border-b-2 hover:border-[#397A80] hover:font-bold' href="">Servicios</a>
                <a className='text-[#548BA5] text-base font-medium hover:scale-105 hover:duration-300 hover:border-b-2 hover:border-[#397A80] hover:font-bold' href="">Contáctanos</a>
            </div>
            <div className="flex">
                <button className='bg-[#397A80] text-[#FCFEFE] w-32 h-10 rounded-[10px] text-base font-semibold hover:scale-105 hover:duration-300'>Asesorías</button>
            </div>
        </div>
    )
}