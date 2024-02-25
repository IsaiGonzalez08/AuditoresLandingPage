import { useNavigate } from 'react-router-dom'
import ImgEspecialista from '../assets/img/ImgEspecialista.png'

export const SeccionEspecialista = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/Contactanos')
    }

    return(
        <div className="flex bg-[#FAFAFA] custom:justify-center sm:justify-between custom:pb-10 custom:pt-10 sm:p-0 2xl:p-0 2xl:justify-between">
            <div className='custom:hidden sm:block 2xl:block'>
                <img className='sm:w-96 lg:w-[450px] 2xl:w-full' src={ImgEspecialista} alt="Img-Especialista" />
            </div>
            <div className="flex flex-col justify-center items-center custom:mr-0 custom:gap-4 sm:mr-10 md:mr-20 lg:mr-36 2xl:gap-8 2xl:mr-24">
                <h2 className="font-semibold text-[#397A80] custom:text-2xl lg:text-3xl 2xl:text-4xl">Habla con un especialista</h2>
                <p className="text-center font-light
                    custom:text-[10px] custom:left-5 custom:tracking-widest
                    lg:text-sm lg:leading-5 lg:tracking-widest 
                    2xl:text-lg 2xl:leading-6 2xl:tracking-widest">
                    Si desea hablar con un especialista para encontrar la <br /> 
                    solución adecuada para su empresa, regístrese para <br /> 
                    una asesoría gratuita.
                </p>
                <button onClick={handleNavigate} className="
                                bg-[#397A80] font-bold text-[#FCFEFE] rounded-[10px] hover:scale-105 hover:duration-300
                                  custom:w-28 custom:h-8 custom:text-xs 
                                  2xl:w-48 2xl:h-12 2xl:text-base">Contactar
                </button>
            </div>
        </div>
    )
}