import { useNavigate } from 'react-router-dom'
import ImgEspecialista from '../assets/img/ImgEspecialista.png'

export const SeccionEspecialista = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/Contactanos')
    }

    return(
        <div className="flex justify-between bg-[#FAFAFA]">
            <div>
                <img src={ImgEspecialista} alt="Img-Especialista" />
            </div>
            <div className="flex flex-col justify-center items-center gap-8 mr-24">
                <h2 className="font-semibold text-[#397A80] text-4xl">Habla con un especialista</h2>
                <p className="text-center text-lg font-light leading-6 tracking-widest">
                    Si desea hablar con un especialista para encontrar la <br /> 
                    solución adecuada para su empresa, regístrese para <br /> 
                    una asesoría gratuita.
                </p>
                <button onClick={handleNavigate} className="bg-[#397A80] font-bold text-[#FCFEFE] w-48 h-12 rounded-[10px] hover:scale-105 hover:duration-300">Contactar</button>
            </div>
        </div>
    )
}