import Logo2 from '../assets/icon/Logo2.svg'
import Facebook from '../assets/icon/Facebook.svg'
import LinkedIn from '../assets/icon/LinkedIn.svg'
import X from '../assets/icon/X.svg'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return(
        <footer className="flex flex-col bg-[#F3F3F3] pt-10 pb-10">
            <div className="flex flex-row justify-around custom:flex-col custom:items-center lg:flex-row">
                <div className="flex flex-col gap-3">
                    <div className='flex items-center gap-3 mt-[-10px] custom:justify-center'>
                        <img src={Logo2} alt="Logo-Footer" className='w-12 h-10' />
                        <h2 className='font-semibold text-xs mt-2 custom:hidden lg:block'>
                            <span className='text-[#52ADB6]'>Gonzalez Ruiz </span>
                            <span className='text-[#548BA5]'>Auditores</span>
                        </h2>
                    </div>
                    <p className='mt-3 font-normal text-xs leading-6'>
                        Tuxtla Gutiérrez, Chiapas. <br />
                        1052, Av 2a. Sur Pte. El cerrito, 30540 <br />
                        +52 (55) 4341 1637 <br />
                        +52 (55) 4341 1637 <br />
                        GRAuditores@gmail.com <br />
                    </p>
                </div>
                <div className='flex flex-col gap-3 custom:items-center custom:mt-5 lg:items-start'>
                    <Link to="/Servicios" 
                    className='text-[#000000] font-semibold text-sm hover:text-[#397A80] hover:duration-300
                                custom:text-xs 2xl:text-sm'>
                    Servicios
                    </Link>
                    <div className='bg-[#397A80] w-[474px] h-[2px] custom:w-72 lg:w-[340px]'/>
                    <div className='flex flex-row gap-24 custom:gap-2 lg:gap-10'>
                        <ul className='list-inside list-disc flex flex-col gap-2'> 
                            <li className='font-medium text-xs custom:text-[10px] 2xl:text-xs'>Auditoria Fiscal</li>
                            <li className='font-medium text-xs custom:text-[10px] 2xl:text-xs'>Auditoria Financiera</li>
                            <li className='font-medium text-xs custom:text-[10px] 2xl:text-xs'>Auditoria Interna</li>
                            <li className='font-medium text-xs custom:text-[10px] 2xl:text-xs'>Auditoría Gubernamental</li>
                            <li className='font-medium text-xs custom:text-[10px] 2xl:text-xs'>Auditoria de Contribuciones</li>
                            <li className='font-medium text-xs custom:text-[10px] 2xl:text-xs'>Valuación Financiera</li>
                        </ul>
                        <ul className='list-inside list-disc flex flex-col gap-2'>
                            <li className='font-medium text-xs custom:text-[10px] 2xl:text-xs'>Consultoría Fiscal</li>
                            <li className='font-medium text-xs custom:text-[10px] 2xl:text-xs'>Auditoría IMSS e INFONAVIT</li>
                            <li className='font-medium text-xs custom:text-[10px] 2xl:text-xs'>Liquidación de Empresas</li>
                            <li className='font-medium text-xs custom:text-[10px] 2xl:text-xs'>Sistema de Costos</li>
                            <li className='font-medium text-xs custom:text-[10px] 2xl:text-xs'>Tesorería</li>
                            <li className='font-medium text-xs custom:text-[10px] 2xl:text-xs'>Reingeniería de Procesos</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col gap-3 custom:items-center custom:mt-5 lg:items-start'>
                    <h2 className='font-semibold text-sm custom:text-xs 2xl:text-sm'>Redes sociales</h2>
                    <div className='bg-[#397A80] w-52 h-[2px] custom:w-72 lg:w-40'/>
                    <div className='flex flex-col gap-5 mt-2'>
                        <div className='flex flex-row items-center'>
                            <img src={Facebook} alt="Logo-Facebook" />
                            <h2 className='font-medium text-xs ml-3'>Facebook</h2>
                        </div>
                        <div className='flex flex-row items-center'>
                            <img src={LinkedIn} alt="Logo-LinkenIn" />
                            <h2 className='font-medium text-xs ml-3'>LinkedIn</h2>
                        </div>
                        <div className='flex flex-row items-center'>
                            <img src={X} alt="Logo-X" />
                            <h2 className='font-medium text-xs ml-3'>X</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col custom:items-center lg:items-start lg:ml-12'>
                <div className='bg-[#397A80] w-[1578px] h-[2px] mt-5 custom:w-72 lg:w-[922px] 2xl:w-[1228px] 2xl:ml-[68px]'/>
            </div>
            <h2 className='mt-4 text-[#777575] text-xs 
                           custom:text-center lg:text-start
                           lg:ml-12 2xl:ml-[115px]'>
            ©2024 González Ruiz Auditores. All rights reserved.
            </h2>
        </footer>
    )
}