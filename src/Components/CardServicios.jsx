import PropTypes from 'prop-types'
import flecha from '../assets/icon/flecha.svg'
import { useNavigate } from 'react-router-dom'

export const CardServicios = ({titulo, descripcion, img, btnTexto, btnTexto2, bandera = false }) => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/Contactanos')
    }

    return(
        <div className='flex flex-col border-2 border-[#397A80] w-[378px] h-[424px] rounded-[20px] hover:scale-105 hover:duration-300'>
            <img src={img} alt="Img-card" className='rounded-t-[18px] shadow-xl' />
            <div className='flex flex-col m-3 gap-3'>
                <h2 className='text-[#397A80] font-semibold text-xl'>{titulo}</h2>
                <p className='text-sm font-light leading-6 tracking-widest'>{descripcion}</p>
                <div className='flex flex-row gap-3'>
                    <div className='bg-[#397A80] rounded-[20px] w-[112px] h-[22px] flex items-center justify-center hover:scale-105 hover:duration-300'>
                        <h2 className='text-[#FCFEFE] text-sm text-center font-light'>{btnTexto}</h2>
                    </div>
                    {
                        bandera&&
                        <div className='bg-[#397A80] rounded-[20px] w-[112px] h-[22px] flex items-center justify-center hover:scale-105 hover:duration-300'>
                            <h2 className='text-[#FCFEFE] text-sm text-center font-light'>{btnTexto2}</h2>
                        </div>
                    }
                </div>
                <div>
                    <button onClick={handleNavigate} className='hover:scale-105 hover:duration-300 mt-5 flex rounded-[20px] w-[112px] h-[31px] justify-center items-center text-[#397A80] border-2 border-[#397A80] font-bold text-xs bg-[#FCFEFE]'>
                        Contactar
                        <img src={flecha} alt='img-flecha' />
                    </button>
                </div>
            </div>
        </div>
    )
}

CardServicios.propTypes = {
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    btnTexto: PropTypes.string.isRequired,
    btnTexto2: PropTypes.string.isRequired,
    bandera: PropTypes.bool
}