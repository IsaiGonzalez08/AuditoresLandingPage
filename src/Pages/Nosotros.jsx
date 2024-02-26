import { Footer } from "../Components/Footer"
import { Header } from "../Components/Header"
import { Nav } from "../Components/Nav"
import { Subtitulos } from "../Components/Subtitulos"
import ImgNosotros from "../assets/img/ImgNosotros.png"
import NosotrosImg from '../assets/img/Nosotros.png'
import ImgMision from '../assets/icon/Mision.svg'
import ImgVision from '../assets/icon/Vision.svg'
import { CardEmpleados } from "../Components/CardEmpleados"
import Empleado1 from '../assets/img/Empleado1.png'
import Empleado2 from '../assets/img/Empleado2.png'
import Empleado3 from '../assets/img/Empleado3.png'
import Empleado4 from '../assets/img/Empleado4.png'

export const Nosotros = () => {
    return(
        <>
            <Header></Header>
            <Nav titulo="Nosotros" img={ImgNosotros}></Nav>

            <div className="flex items-center justify-center 
                            custom:flex-col-reverse custom:pt-10 custom:pb-10 custom:gap-5
                            lg:gap-20 lg:flex-row lg:pt-20 lg:pb-20">

                <div className="lg:mt-10 xl:m-0">
                    <img src={NosotrosImg} alt="Img-Nosotros" className="custom:w-56 sm:w-80 md:w-80 lg:w-[440px] xl:w-full" />
                </div>

                <div className="flex flex-col custom:items-center sm:block">
                    <Subtitulos subtitulo="Nosotros" nombre="González Ruiz Auditores" ancho="custom:w-[306px] sm:w-[510px] md:w-[460px] 2xl:w-[539px]"/>
                    <p className="font-light mt-5
                    custom:text-[12px]
                    sm:text-base sm:leading-6 sm:tracking-widest
                    md:text-sm
                    2xl:text-lg">

                    El despacho cuenta con más de 20 años de experiencia <br /> 
                    prestando servicios de contabilidad, auditoría y <br /> 
                    administración así como asesoría en impuestos. Esta <br /> 
                    experiencia en el mercado mexicano representa un valor <br /> 
                    agregado para sus clientes. <br /> <br />
                    Los socios han obtenido sus conocimientos no sólo al <br /> 
                    trabajar en nuestra firma, sino que han desempeñado <br /> 
                    importantes funciones fuera de la misma, ya sea en <br /> 
                    niveles altos del sector privado y en el gobierno o bien a <br /> 
                    través de la docencia en reconocidas universidades de la <br /> 
                    República Mexicana.
                    </p>
                </div>

            </div>

            <div className="flex gap-2 bg-[#FAFAFA] w-full
                            custom:flex-col custom:pt-5 custom:pb-5
                            sm:gap-10 sm:pt-10 sm:pb-10
                            
                            lg:pb-14 lg:pt-14 lg:flex-row lg:justify-center lg:gap-14
                            xl:gap-32">
                <div>
                    <Subtitulos subtitulo="Misión" nombre="" ancho="custom:w-[306px] sm:w-[514px] md:w-[460px] 2xl:w-[580px]"/>
                    <p className="flex justify-center mt-5
                    custom:text-[12px]
                    sm:leading-6 sm:tracking-widest sm:text-base
                    md:text-sm
                    2xl:text-lg">
                    Proporcionar servicios de auditoría y contabilidad de alta <br /> 
                    calidad que agreguen valor a nuestros clientes, <br /> 
                    ayudándoles a cumplir con sus obligaciones legales y ha <br /> 
                    tomar decisiones financieras informadas. 
                    </p>
                    <div className="flex justify-center custom:mt-5 sm:mt-16">
                        <img src={ImgMision} alt="Img-Mision" className="custom:w-28 sm:w-40 xl:w-56" />
                    </div>
                </div>
                <div className="">
                    <Subtitulos subtitulo="Visión" nombre="" ancho="custom:w-[306px] sm:w-[514px] md:w-[460px] 2xl:w-[580px]"/>
                    <p className="flex justify-center mt-5
                    custom:text-[12px] 
                    sm:leading-6 sm:tracking-widest sm:text-base
                    md:text-sm
                    2xl:text-lg">
                    Ser reconocidos como líderes en el campo de la auditoría <br /> 
                    y la contabilidad, destacando por nuestra excelencia <br /> 
                    técnica, nuestra integridad inquebrantable y nuestro <br /> 
                    compromiso con la innovación y el servicio al cliente.
                    </p>
                    <div className="flex justify-center custom:mt-5 sm:mt-16">
                        <img src={ImgVision} alt="Img-Vision" className="custom:w-28 sm:w-40 xl:w-56" />
                    </div>
                </div>
            </div>


            <div className="flex flex-col 
                            custom:gap-5 custom:pt-5 custom:pb-5
                            sm:pt-10 sm:pb-10
                            md:p-0 md:pt-14 
                            2xl:pb-32 2xl:pt-20
                            ">
                    <div className="flex flex-col items-center custom:gap-1 sm:gap-3">
                        <h2 className="flex justify-center font-semibold text-[#397A80] custom:text-xl sm:text-4xl">Equipo profesional a tú servicio</h2>
                        <h2 className="flex text-[#889597] font-light custom:text-xs sm:text-xl">González Ruiz Auditores</h2>
                        <div className="flex bg-[#397A80] h-[2px] custom:w-[306px] sm:w-[514px] md:w-[604px] lg:w-[910px] 2xl:w-[1200px]"/>
                    </div>
                    
                    <div className="flex 
                                    custom:flex-col custom:gap-8 custom:pt-5
                                    sm:items-center sm:gap-5 sm:pt-5
                                    lg:flex-row lg:justify-center lg:pt-10 lg:pb-10 lg:gap-5
                                    2xl:gap-14">
                        <div className="custom:flex custom:flex-row sm:flex-row sm:gap-10 md:gap-0 2xl:gap-14">
                            <CardEmpleados img={Empleado1} Puesto="Fundador" Profesion="Licenciado en Contaduría" Nombre="Gerardo González"/>
                            <CardEmpleados img={Empleado2} Puesto="Auditora" Profesion="Licenciada en Administración" Nombre="Antonio Gómez"/>
                        </div>
                        <div className="custom:flex custom:flex-row sm:flex-row sm:gap-10 md:gap-0 2xl:gap-14">
                            <CardEmpleados img={Empleado3} Puesto="Asesora legal" Profesion="Asistente contable" Nombre="Patricia Hernández"/>
                            <CardEmpleados img={Empleado4} Puesto="Especialista en costos" Profesion="Licenciado en Finanzas" Nombre="Roberto Trujillo"/>
                        </div>
                    </div>
            </div>
            <Footer></Footer>
        </>
    )
}