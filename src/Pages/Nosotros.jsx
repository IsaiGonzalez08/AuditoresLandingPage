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
            <div className="flex items-center justify-center pt-20 pb-20 gap-20">
                <div>
                    <img src={NosotrosImg} alt="Img-Nosotros" />
                </div>
                <div className="flex flex-col">
                    <Subtitulos subtitulo="Nosotros" nombre="González Ruiz Auditores" ancho="w-[539px]"/>
                    <p className="font-light text-base leading-6 tracking-widest mt-5">
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
                    República Mexicana.</p>
                </div>
            </div>
            <div className="flex justify-around mr-24 pb-20 ml-16 gap-2">
                <div>
                    <Subtitulos subtitulo="Misión" nombre="" ancho="w-[514px]"/>
                    <p className="flex justify-center leading-6 tracking-widest mt-5">
                    Proporcionar servicios de auditoría y contabilidad de alta <br /> 
                    calidad que agreguen valor a nuestros clientes, <br /> 
                    ayudándoles a cumplir con sus obligaciones legales y ha <br /> 
                    tomar decisiones financieras informadas. 
                    </p>
                    <div className="flex justify-center mt-16">
                        <img src={ImgMision} alt="Img-Mision" />
                    </div>
                </div>
                <div className="">
                    <Subtitulos subtitulo="Visión" nombre="" ancho="w-[514px]"/>
                    <p className="flex justify-center leading-6 tracking-widest mt-5">
                    Ser reconocidos como líderes en el campo de la auditoría <br /> 
                    y la contabilidad, destacando por nuestra excelencia <br /> 
                    técnica, nuestra integridad inquebrantable y nuestro <br /> 
                    compromiso con la innovación y el servicio al cliente.
                    </p>
                    <div className="flex justify-center mt-16">
                        <img src={ImgVision} alt="Img-Vision" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col gap-3">
                    <h2 className="flex justify-center font-semibold text-[#397A80] text-4xl">Equipo profesional a tú servicio</h2>
                    <h2 className="flex ml-[132px] text-[#889597] font-light text-base">Gonzalez Ruiz Auditores</h2>
                    <div className="flex ml-[132px] bg-[#397A80] w-[1169px] h-[2px]"/>
                    <div className="flex flex-row ml-20 pt-10 pb-10 gap-8">
                        <CardEmpleados img={Empleado1} Puesto="Fundador" Profesion="Licenciado en Contaduría" Nombre="Gerardo González"/>
                        <CardEmpleados img={Empleado2} Puesto="Auditora" Profesion="Licenciada en Administración" Nombre="Antonio Gómez"/>
                        <CardEmpleados img={Empleado3} Puesto="Asesora legal" Profesion="Asistente contable" Nombre="Patricia Hernández"/>
                        <CardEmpleados img={Empleado4} Puesto="Especialista en costos" Profesion="Licenciado en Finanzas" Nombre="Roberto Trujillo"/>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}