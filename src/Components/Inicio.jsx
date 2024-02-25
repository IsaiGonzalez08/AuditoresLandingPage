import { useNavigate } from 'react-router-dom'
import ImgInicio from '../assets/img/ImgInicio.png'

export const Inicio = () => {
    const Navigate = useNavigate()

    const handleNavigate = () => {
        Navigate('/Nosotros')
    }

    return (
        <div className="flex custom:justify-center custom:pt-5 custom:pb-10 sm:p-0 sm:justify-between 2xl:justify-between 2xl:p-0">
            <div className="flex flex-col 
                            custom:ml-0 custom:gap-3 custom:mt-0 custom:pb-5 custom:items-center
                            sm:gap-4 sm:ml-10 sm:mt-[-30px] sm:justify-center sm:items-start
                            md:ml-20 md:mt-6
                            lg:ml-32 lg:gap-5
                            2xl:gap-8 2xl:ml-32 2xl:mt-[-60px] 2xl:justify-center 2xl:items-start">

                <h2 className="flex flex-col 
                               custom:text-2xl custom:gap-0 
                               sm:text-3xl
                               md:text-3xl
                               lg:text-[40px] lg:gap-4 lg:leading-9
                               2xl:text-5xl 2xl:gap-4">
                    <span className="text-[#A1ADAF] font-normal">Despacho de auditorías</span>
                    <span className="text-[#397A80] font-semibold">González Ruiz Auditores</span>
                </h2>

                <p className="text-[#000000]
                                custom:text-[10px] custom:text-center custom:tracking-normal
                                sm:text-[10px] sm:text-start sm:tracking-normal
                                md:text-[11px] md:text-start md:tracking-widest
                                lg:text-[12px] lg:text-start lg:tracking-widest
                                2xl:text-base 2xl:text-start 2xl:leading-6 2xl:tracking-widest">
                    Somos un despacho de Contadores Públicos Certificados con <br />
                    más de 20 años de experiencia, brindando servicios de <br />
                    auditoría a sectores públicos y privados.
                </p>

                <button onClick={handleNavigate} className="
                                transition-all flex justify-center items-center border-2 bg-[#FCFEFE] 
                                border-[#397A80] text-[#397A80] rounded-[10px] hover:scale-105 
                                hover:duration-500 hover:bg-[#397A80] hover:text-[#FCFEFE] font-semibold
                                custom:text-xs custom:w-32 custom:h-8
                                md:w-36 md:h-9 md:text-sm 
                                2xl:text-base 2xl:w-52 2xl:h-12">
                    Quiénes somos
                </button>

                <div className='flex items-center justify-start   
                                custom:ml-0 custom:gap-3
                                sm:ml-10
                                md:ml-14
                                2xl:ml-20 2xl:mt-8 2xl:gap-6'>
                    <h2 className='flex flex-col text-center hover:scale-105 hover:duration-300'>
                        <span className='text-[#397A80] font-semibold custom:text-2xl md:text-4xl 2xl:text-6xl'>20</span>
                        <span className='text-[#A1ADAF] font-semibold custom:text-xs md:text-sm 2xl:text-base 2xl:leading-5'>Años de</span>
                        <span className='text-[#397A80] font-semibold custom:text-xs md:text-sm 2xl:text-base 2xl:leading-5'>Experiencia</span>
                    </h2>
                    <div className='w-[1px] bg-[#397A80] mt-3 custom:h-16 2xl:h-20' />
                    <h2 className='flex flex-col text-center hover:scale-105 hover:duration-300'>
                        <span className='text-[#397A80] font-semibold custom:text-2xl md:text-4xl 2xl:text-6xl'>10</span>
                        <span className='text-[#A1ADAF] font-semibold custom:text-xs md:text-sm 2xl:text-base 2xl:leading-5'>Tipos de</span>
                        <span className='text-[#397A80] font-semibold custom:text-xs md:text-sm 2xl:text-base 2xl:leading-5'>Auditorías</span>
                    </h2>
                    <div className='w-[1px] bg-[#397A80] mt-3 custom:h-16 2xl:h-20' />
                    <h2 className='flex flex-col text-center hover:scale-105 hover:duration-300'>
                        <span className='text-[#397A80] font-semibold custom:text-2xl md:text-4xl 2xl:text-6xl'>10</span>
                        <span className='text-[#A1ADAF] font-semibold custom:text-xs md:text-sm 2xl:text-base 2xl:leading-5'>Plazas de</span>
                        <span className='text-[#397A80] font-semibold custom:text-xs md:text-sm 2xl:text-base 2xl:leading-5'>Certificación</span>
                    </h2>
                </div>
            </div>
            <div className='custom:hidden sm:block md:block'>
                <img src={ImgInicio} alt="Img-Inicio" className='sm:w-96 md:block lg:block xl:block: 2xl:w-full 3xl:block' />
            </div>
        </div>
    )
}
