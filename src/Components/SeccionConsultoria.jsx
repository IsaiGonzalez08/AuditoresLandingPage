import { useNavigate } from 'react-router-dom'
import ImgDisposicion from '../assets/img/ImgDisposicion.png'

export const SeccionDisposicion = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/Servicios')
    }

    return(
        <div className="bg-[#FCFEFE] flex 
                          custom:pb-10 custom:pt-10 custom:flex-col 
                          sm:p-0 sm:flex-row sm:justify-around
                          2xl:flex-row 2xl:justify-around 2xl:p-0">
            <div className='flex flex-col justify-center gap-4'>


                <div className="flex flex-row 
                                custom:justify-center custom:items-center custom:gap-20
                                sm:gap-28
                                lg:gap-52 
                                2xl:justify-between">
                    <div className="flex flex-col">
                        <h2 className="text-[#397A80] font-semibold 
                                         custom:text-xl 
                                         lg:text-2xl  
                                         2xl:text-3xl">
                        Contribución
                        </h2>
                        <h4 className="text-[#A1ADAF] font-light 
                                         custom:text-sm
                                         lg:text-base 
                                         2xl:text-base">
                        González Ruiz Auditores
                        </h4>
                    </div>
                    <div className="flex items-center justify-center bg-[#FAFAFA] border-[2.5px] border-[#397A80] rounded-xl
                                    custom:w-10 custom:h-10
                                    2xl:w-14 2xl:h-14">
                        <h2 className="text-[#397A80] font-bold 2xl:text-3xl">C</h2>
                    </div>
                </div>


                <div className='bg-[#397A80]
                                custom:w-[306px] custom:h-[2px] custom:ml-[35px]
                                sm:ml-[0px]
                                lg:w-[420px]
                                2xl:w-[539px] 2xl:h-[2px] 2xl:ml-0'>
                </div>

                <p className='text-[#000] 
                                custom:text-[10px] custom:text-center custom:tracking-widest
                                sm:text-start
                                lg:text-sm 
                                2xl:text-lg 2xl:leading-6 2xl:tracking-widest'>
                    Consiste en el análisis de los objetivos de la empresa, <br /> 
                    para verificar que los procesos que se realizan para <br /> 
                    alcanzarlos son los más adecuados. Estos proyectos <br /> 
                    son de un largo alcance, y se realizan conjuntamente <br /> 
                    con el personal de las empresas.
                </p>
                <div className='flex justify-center 2xl:gap-8 2xl:mt-4'>
                    <button onClick={handleNavigate} className='border-2 border-[#397A80] rounded-[10px] text-[#397A80] font-bold
                                       hover:scale-105 hover:duration-300 
                                       custom:w-28 custom:h-8 custom:text-xs
                                       lg:w-36 lg:h-10 lg:text-base
                                       2xl:w-48 2xl:h-12'>
                    Categorías
                    </button>
                </div>
            </div>
            <div className='custom:flex custom:justify-center'>
                <img className='rounded-[10px] custom:mt-5 custom:w-40 
                                sm:m-0 sm:w-60
                                lg:w-80
                                2xl:w-full 2xl:m-0' src={ImgDisposicion} alt="Img-Auditorias" />
            </div>
        </div>
    )
}