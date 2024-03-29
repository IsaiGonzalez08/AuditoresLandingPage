import Logo2 from '../assets/icon/Logo2.svg'
import Facebook from '../assets/icon/Facebook.svg'
import LinkedIn from '../assets/icon/LinkedIn.svg'
import X from '../assets/icon/X.svg'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return(
        <footer className="flex flex-col bg-[#F3F3F3] pt-10 pb-10 ">
            <div className="flex custom:flex-col custom:items-center sm:flex-row sm:justify-around sm:items-start lg:flex-row lg:justify-around 2xl:flex-row 2xl:justify-around">
                <div className="flex flex-col gap-3">
                    <div className='flex items-center gap-3 mt-[-10px] custom:justify-center'>
                        <img src={Logo2} alt="Logo-Footer" className='w-12 h-10' />
                        <h2 className='font-semibold text-xs mt-2 custom:hidden lg:block'>
                            <span className='text-[#52ADB6]'>Gonzalez Ruiz </span>
                            <span className='text-[#548BA5]'>Auditores</span>
                        </h2>
                    </div>
                    <p className='font-normal custom:text-[12px] sm:text-xs sm:leading-5 sm:text-[9px] 2xl:text-xs 2xl:mt-3 2xl:leading-6'>
                        Tuxtla Gutiérrez, Chiapas. <br />
                        1052, Av 2a. Sur Pte. El cerrito.<br />
                        +52 (55) 4341 1637 <br />
                        +52 (55) 4341 1637 <br />
                        GRAuditores@gmail.com <br />
                    </p>
                </div>
                <div className='flex flex-col gap-3 custom:items-center custom:mt-5 sm:mt-[0px] md:m-0 lg:items-start 2xl:m-0'>
                    <Link to="/Servicios" 
                    className='text-[#000000] font-semibold text-sm hover:text-[#397A80] hover:duration-300
                                custom:text-xs 2xl:text-sm'>
                    Servicios
                    </Link>
                    <div className='bg-[#397A80] h-[2px] custom:w-72 sm:w-[280px] lg:w-[340px] 2xl:w-[474px] '/>
                    <div className='flex flex-row custom:gap-2 lg:gap-10 2xl:gap-24'>
                        <ul className='list-inside list-disc flex flex-col gap-2'> 
                            <li className='font-medium text-xs custom:text-[10px] sm:text-[9px] 2xl:text-xs'>Auditoria Fiscal</li>
                            <li className='font-medium text-xs custom:text-[10px] sm:text-[9px] 2xl:text-xs'>Auditoria Financiera</li>
                            <li className='font-medium text-xs custom:text-[10px] sm:text-[9px] 2xl:text-xs'>Auditoria Interna</li>
                            <li className='font-medium text-xs custom:text-[10px] sm:text-[9px] 2xl:text-xs'>Auditoría Gubernamental</li>
                            <li className='font-medium text-xs custom:text-[10px] sm:text-[9px] 2xl:text-xs'>Auditoria de Contribuciones</li>
                            <li className='font-medium text-xs custom:text-[10px] sm:text-[9px] 2xl:text-xs'>Valuación Financiera</li>
                        </ul>
                        <ul className='list-inside list-disc flex flex-col gap-2'>
                            <li className='font-medium text-xs custom:text-[10px] sm:text-[9px] 2xl:text-xs'>Consultoría Fiscal</li>
                            <li className='font-medium text-xs custom:text-[10px] sm:text-[9px] 2xl:text-xs'>Auditoría IMSS e INFONAVIT</li>
                            <li className='font-medium text-xs custom:text-[10px] sm:text-[9px] 2xl:text-xs'>Liquidación de Empresas</li>
                            <li className='font-medium text-xs custom:text-[10px] sm:text-[9px] 2xl:text-xs'>Sistema de Costos</li>
                            <li className='font-medium text-xs custom:text-[10px] sm:text-[9px] 2xl:text-xs'>Tesorería</li>
                            <li className='font-medium text-xs custom:text-[10px] sm:text-[9px] 2xl:text-xs'>Reingeniería de Procesos</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col gap-3 custom:items-center custom:mt-5 sm:mt-0 lg:items-start 2xl:m-0'>
                    <h2 className='font-semibold text-sm custom:text-xs 2xl:text-sm'>Redes sociales</h2>
                    <div className='bg-[#397A80] h-[2px] custom:w-72 sm:w-28 lg:w-40 2xl:w-52 '/>
                    <div className='flex flex-col gap-3 mt-2 sm:mr-5 2xl:m-0'>
                        <div className='flex flex-row custom:items-center 2xl:items-center'>
                            <a href="https://www.facebook.com/?locale=es_LA"><img className='sm:w-6 2xl:w-9' src={Facebook} alt="Logo-Facebook" /></a> 
                            <h2 className='font-medium custom:text-xs custom:ml-3 sm:ml-2 sm:text-[10px] 2xl:ml-3 2xl:text-xs'>Facebook</h2>
                        </div>
                        <div className='flex flex-row items-center'>
                            <a href="https://www.linkedin.com/home"><img className='sm:w-6 2xl:w-9' src={LinkedIn} alt="Logo-LinkenIn" /></a> 
                            <h2 className='font-medium custom:text-xs custom:ml-3 sm:ml-2 sm:text-[10px] 2xl:ml-3 2xl:text-xs'>LinkedIn</h2>
                        </div>
                        <div className='flex flex-row items-center'>
                            <a href="https://twitter.com/i/flow/login"><img className='sm:w-6 2xl:w-9' src={X} alt="Logo-X" /></a> 
                            <h2 className='font-medium custom:text-xs custom:ml-3 sm:ml-2 sm:text-[10 custom:text-xspx] 2xl:ml-3 2xl:text-xs'>X</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col custom:items-center lg:items-start lg:ml-12'>
                <div className='bg-[#397A80] h-[2px] mt-5 custom:w-72 sm:w-[693px] md:w-[775px] lg:ml-5 lg:w-[980px] 2xl:w-[1271px] 2xl:ml-[48px]'/>
            </div>
            <h2 className='mt-4 text-[#777575] text-xs 
                           custom:text-center lg:text-start
                           lg:ml-[66px] 2xl:ml-[115px]'>
            ©2024 González Ruiz Auditores. All rights reserved.
            </h2>
        </footer>
    )
}