import ImgDisposicion from '../assets/img/ImgDisposicion.svg'

export const SeccionDisposicion = () => {
    return(
        <div className="bg-[#FCFEFE] flex justify-around">
            <div className='flex flex-col gap-4 justify-center'>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                        <h2 className="text-[#397A80] text-3xl font-semibold">Consultoría</h2>
                        <h4 className="text-[#A1ADAF] font-light">Gonzalez Ruiz Auditores</h4>
                    </div>
                    <div className="flex items-center justify-center bg-[#FAFAFA] border-[2.5px] border-[#397A80] w-14 h-14 rounded-xl">
                        <h2 className="text-[#397A80] font-bold text-3xl">A</h2>
                    </div>
                </div>
                <div className='bg-[#397A80] w-[539px] h-[2px]'></div>
                <p className='text-[#000] text-lg leading-6 tracking-widest'>
                    Asesoría para clientes, en el correcto, oportuno y <br /> 
                    adecuado cumplimiento de las obligaciones fiscales, <br />
                    fusiones y adquisiciones, creación de fideicomisos, <br />
                    recursos humanos, asistencia en proyectos financieros, <br />
                    etc.  
                </p>
                <div className='flex justify-center gap-8 mt-4'>
                    <button className='border-2 border-[#397A80] w-48 h-12 rounded-[10px] text-[#397A80] font-bold
                                       hover:scale-105 hover:duration-300'>
                    Categorías
                    </button>
                    <button className='bg-[#397A80] w-48 h-12 rounded-[10px] text-[#FAFAFA] font-bold
                                       hover:scale-105 hover:duration-300'>
                    Contactar
                    </button>
                </div>
            </div>
            <div>
                <img className='rounded-[10px]' src={ImgDisposicion} alt="Img-Auditorias" />
            </div>
        </div>
    )
}