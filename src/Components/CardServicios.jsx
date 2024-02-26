import PropTypes from 'prop-types'
import flecha from '../assets/icon/flecha.svg'
import { useNavigate } from 'react-router-dom'

export const CardServicios = ({titulo, descripcion, img, btnTexto, btnTexto2, bandera = false }) => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/Contactanos')
    }

    return(
        <div className='flex flex-col border-2 border-[#397A80] rounded-[20px] hover:scale-105 hover:duration-300
                        custom:w-[260px] custom:h-[320px]
                        sm:w-[378px] sm:h-[424px]'>
            <img src={img} alt="Img-card" className='rounded-t-[18px] shadow-xl' />
            <div className='flex flex-col m-3 gap-3'>
                <h2 className='text-[#397A80] font-semibold 
                                 sm:text-xl'>{titulo}</h2>
                <p className='font-light
                              custom:text-[10px] custom:tracking-wider
                              sm:leading-6 sm:tracking-widest sm:text-sm'>{descripcion}</p>
                <div className='flex flex-row gap-3'>
                    <div className='bg-[#397A80] rounded-[20px] flex items-center justify-center hover:scale-105 hover:duration-300
                                         custom:w-20 custom:h-[18px] 
                                         sm:w-[112px] sm:h-[22px]'>
                        <h2 className='text-[#FCFEFE] text-center font-light 
                                         custom:text-[10px]
                                         sm:text-sm '>{btnTexto}</h2>
                    </div>
                    {
                        bandera&&
                        <div className='bg-[#397A80] rounded-[20px] flex items-center justify-center hover:scale-105 hover:duration-300
                                          custom:w-20 custom:h-[18px] 
                                          sm:w-[112px] sm:h-[22px]'>
                            <h2 className='text-[#FCFEFE] text-center font-light 
                                             custom:text-[10px]
                                             sm:text-sm '>{btnTexto2}</h2>
                        </div>
                    }
                </div>
                <div>
                    <button onClick={handleNavigate} className='hover:scale-105 hover:duration-300 mt-5 flex rounded-[20px] 
                                                                justify-center items-center text-[#397A80] border-2 
                                                                border-[#397A80] font-bold bg-[#FCFEFE]
                                                                custom:w-24 custom:h-6 custom:text-[10px] custom:gap-1
                                                                sm:w-[112px] sm:h-[31px] sm:text-xs '>
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