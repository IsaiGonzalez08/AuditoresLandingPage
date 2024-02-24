import { useNavigate } from 'react-router-dom'
import ImgInicio from '../assets/img/ImgInicio.png'

export const Inicio = () => {
    const Navigate = useNavigate()

    const handleNavigate = () => {
        Navigate('/Nosotros')
    }

    return (
        <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col gap-8 justify-center md:ml-32 md:mt-[-60px]">
                <h2 className="flex flex-col text-4xl md:text-5xl gap-4">
                    <span className="text-[#A1ADAF] font-normal">Despacho de auditorías</span>
                    <span className="text-[#397A80] font-semibold">González Ruiz Auditores</span>
                </h2>
                <p className="text-[#000000] text-sm md:text-base leading-6 tracking-widest">
                    Somos un despacho de Contadores Públicos Certificados con <br />
                    más de 20 años de experiencia, brindando servicios de <br />
                    auditoría a sectores públicos y privados.
                </p>
                <button onClick={handleNavigate} className="flex justify-center items-center w-full md:w-48 h-12 md:h-16 border-2 bg-[#FCFEFE] 
                                 border-[#397A80] text-[#397A80] rounded-[10px] hover:scale-105 hover:duration-500
                                   hover:bg-[#397A80] hover:text-[#FCFEFE] text-base font-semibold">
                    Quiénes somos
                </button>
                <div className='flex items-center justify-start gap-6 mt-8 ml-12'>
                    <h2 className='flex flex-col text-center hover:scale-105 hover:duration-300'>
                        <span className='text-[#397A80] font-semibold text-6xl'>20</span>
                        <span className='text-[#A1ADAF] font-semibold text-base leading-5'>años de</span>
                        <span className='text-[#397A80] font-semibold text-base leading-5'>experiencia</span>
                    </h2>
                    <div className='w-[1px] h-20 bg-[#397A80] mt-3' />
                    <h2 className='flex flex-col text-center hover:scale-105 hover:duration-300'>
                        <span className='text-[#397A80] font-semibold text-6xl'>10</span>
                        <span className='text-[#A1ADAF] font-semibold text-base leading-5'>tipos de</span>
                        <span className='text-[#397A80] font-semibold text-base leading-5'>auditorías</span>
                    </h2>
                    <div className='w-[1px] h-20 bg-[#397A80] mt-3' />
                    <h2 className='flex flex-col text-center hover:scale-105 hover:duration-300'>
                        <span className='text-[#397A80] font-semibold text-6xl'>10</span>
                        <span className='text-[#A1ADAF] font-semibold text-base leading-5'>plazas de</span>
                        <span className='text-[#397A80] font-semibold text-base leading-5'>certificación</span>
                    </h2>
                </div>
            </div>
            <div>
                <img src={ImgInicio} alt="Img-Inicio" className='w-16 md:w-32 lg:w-full' />
            </div>
        </div>
    )
}
