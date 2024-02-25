import { useNavigate } from 'react-router-dom'
import ImgAuditorias from '../assets/img/ImgAuditorias.png'

export const SeccionAuditorias = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/Servicios')
    }

    return(
        <div className="bg-[#F3F3F3] flex 
                          custom:pb-10 custom:pt-10 custom:flex-col-reverse
                          sm:p-0 sm:flex-row sm:justify-around
                          2xl:flex-row 2xl:justify-around 2xl:p-0">
            <div className='custom:flex custom:justify-center'>
                <img className='rounded-[10px] custom:mt-5 custom:w-40 
                                sm:m-0 sm:w-56
                                lg:w-72 
                                2xl:w-full 2xl:m-0' src={ImgAuditorias} alt="Img-Auditorias" />
            </div>

            <div className='flex flex-col custom:gap-4 sm:gap-2 md:gap-3 2xl:gap-4 justify-center'>
                
                <div className="flex flex-row custom:justify-center 
                                custom:items-center custom:gap-20 
                                sm:gap-28
                                lg:gap-52
                                2xl:justify-between">
                    <div className="flex flex-col">
                        <h2 className="text-[#397A80] font-semibold 
                                        custom:text-xl
                                        lg:text-2xl 
                                        2xl:text-3xl">
                        Auditorias
                        </h2>
                        <h4 className="text-[#A1ADAF] font-light 
                                        custom:text-sm 
                                        lg:text-base
                                        2xl:text-base">
                        González Ruiz Auditores
                        </h4>
                    </div>
                    <div className="flex items-center justify-center bg-[#F3F3F3] 
                                    border-[2.5px] border-[#397A80] rounded-xl
                                    custom:w-10 custom:h-10
                                    2xl:w-14 2xl:h-14">
                        <h2 className="text-[#397A80] font-bold 2xl:text-3xl">A</h2>
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
                                2xl:text-lg 2xl:text-start 2xl:leading-6 2xl:tracking-widest'>
                    Servicio para empresas o entidades gubernamentales <br /> 
                    que opten o estén obligados a dictaminar sus estados <br /> 
                    financieros, procesos administrativos, políticas y <br /> 
                    procedimientos, impuestos, obligaciones fiscales y <br /> 
                    patronales, etc.    
                </p>

                <div className='flex justify-center 
                                2xl:gap-8 2xl:mt-4'>
                    <button onClick={handleNavigate} className='border-2 border-[#397A80] rounded-[10px] 
                                     text-[#397A80] font-bold
                                       hover:scale-105 hover:duration-300
                                       custom:w-28 custom:h-8 custom:text-xs
                                       lg:w-36 lg:h-10 lg:text-base
                                       2xl:w-48 2xl:h-12 2xl:text-base'>
                    Categorías
                    </button>
                </div>
            </div>
        </div>
    )
}