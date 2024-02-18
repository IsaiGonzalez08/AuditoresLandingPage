import ImgInicio from '../assets/img/ImgInicio.svg'

export const Inicio = () => {
    return(
        <div className="flex justify-between">
            <div className="flex flex-col gap-8 justify-center ml-36 mt-[-60px]">
                <h2 className="flex flex-col text-5xl gap-4">
                    <span className="text-[#A1ADAF] font-normal">Despacho de auditorías</span>
                    <span className="text-[#397A80] font-semibold">González Ruiz Auditores</span>
                </h2>
                <p className="text-[#000000] text-base leading-6 tracking-widest">
                    Somos un despacho de Contadores Públicos Certificados con <br /> 
                    mas de 20 años de experiencia, brindado servicios de <br /> 
                    auditoria a sectores públicos y privados.
                </p>
                <button className="flex justify-center items-center w-48 h-12 border-2 bg-[#FCFEFE] 
                                 border-[#397A80] text-[#397A80] rounded-[10px] hover:scale-105 hover:duration-500
                                   hover:bg-[#397A80] hover:text-[#FCFEFE] text-base font-semibold">
                    Quienes somos
                </button>
                <div className='flex items-center justify-start gap-6 mt-8 ml-12'>
                    <h2 className='flex flex-col text-center hover:scale-105 hover:duration-300'>
                        <span className='text-[#397A80] font-semibold text-6xl'>20</span>
                        <span className='text-[#A1ADAF] font-semibold text-base leading-5'>años de</span>
                        <span className='text-[#397A80] font-semibold text-base leading-5'>Experiencia</span>
                    </h2> 
                    <div className='w-[1px] h-20 bg-[#397A80] mt-3'/>
                    <h2 className='flex flex-col text-center hover:scale-105 hover:duration-300'>
                        <span className='text-[#397A80] font-semibold text-6xl'>20</span>
                        <span className='text-[#A1ADAF] font-semibold text-base leading-5'>años de</span>
                        <span className='text-[#397A80] font-semibold text-base leading-5'>Experiencia</span>
                    </h2>
                    <div className='w-[1px] h-20 bg-[#397A80] mt-3'/>
                    <h2 className='flex flex-col text-center hover:scale-105 hover:duration-300'>
                        <span className='text-[#397A80] font-semibold text-6xl'>20</span>
                        <span className='text-[#A1ADAF] font-semibold text-base leading-5'>años de</span>
                        <span className='text-[#397A80] font-semibold text-base leading-5'>Experiencia</span>
                    </h2>
                </div>
            </div>
            <div>
                <img src={ImgInicio} alt="Img-Inicio" />
            </div>
        </div>
    )
}