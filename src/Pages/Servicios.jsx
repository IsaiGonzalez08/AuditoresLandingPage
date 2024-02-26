import { CardServicios } from "../Components/CardServicios"
import { Footer } from "../Components/Footer"
import { Header } from "../Components/Header"
import { Nav } from "../Components/Nav"
import { Subtitulos } from "../Components/Subtitulos"
import ImgServicios from '../assets/img/ImgServicios.png'
import Card1 from '../assets/img/Card1.png'
import Card2 from '../assets/img/Card2.png'
import Card3 from '../assets/img/Card3.png'
import Card4 from '../assets/img/Card4.png'
import Card5 from '../assets/img/Card5.png'
import Card6 from '../assets/img/Card6.png'

export const Servicios = () => {
    return(
        <>
            <Header></Header>
            <Nav titulo="Servicios" img={ImgServicios}></Nav>
            <div className="flex flex-col
                            custom:pt-10 custom:pb-10 
                            lg:pt-20 lg:pb-20 lg:ml-20">
                <Subtitulos subtitulo="Auditorias" nombre="González Ruiz Auditores" ancho="custom:w-[300px] sm:w-[539px]"/>
                <div className="flex items-center  
                                custom:flex-col custom:gap-8 custom:mt-5
                                lg:flex-row lg:pl-8 lg:pr-10 lg:gap-14 lg:mt-16 lg:pb-20">
                    <CardServicios
                        img={Card1}
                        titulo="Auditoría financiera"
                        btnTexto="Auditoría"
                        bandera={true}
                        btnTexto2="Finanzas"
                        descripcion={`Revisamos los estados financieros y así obtener una base sobre la cual emitiremos una opinión evaluando su razonabilidad.`}
                    />
                    <CardServicios
                        img={Card2}
                        titulo="Auditoria fiscal"
                        btnTexto="Auditoría"
                        bandera={false}
                        btnTexto2="Finanzas"
                        descripcion={`Se realiza para empresas que opten a dictaminar sus estados financieros de acuerdo con el Código Fiscal.`}
                    />
                    <CardServicios
                        img={Card3}
                        titulo="Auditoría interna"
                        btnTexto="Auditoría"
                        bandera={false}
                        btnTexto2="Finanzas"
                        descripcion={`Se centra en analizar los procesos administrativos en empresas para verificar que lleven a cabo sus operaciones.`}
                    />
                </div>

                <div className="custom:mt-14">
                    <Subtitulos subtitulo="Contribución" nombre="González Ruiz Auditores" ancho="custom:w-[300px] sm:w-[539px]"/>
                </div>
                <div className="flex items-center  
                                custom:flex-col custom:gap-8 custom:mt-5
                                lg:flex-row lg:pl-8 lg:pr-10 lg:gap-14 lg:mt-16 lg:pb-20">
                    <CardServicios
                        img={Card4}
                        titulo="Valuación financiera"
                        btnTexto="Contribución"
                        bandera={true}
                        btnTexto2="Finanzas"
                        descripcion={`Realizamos servicios de valuación de empresas o de activos, para diferentes objetivos.`}
                    />
                    <CardServicios
                        img={Card5}
                        titulo="Liquidación de empresas"
                        btnTexto="Contribución"
                        bandera={true}
                        btnTexto2="Finanzas"
                        descripcion={`Servicios en procesos de liquidación, incluyendo que nuestros socios funjan como liquidadores.`}
                    />
                    <CardServicios
                        img={Card6}
                        titulo="Sistema de costos"
                        btnTexto="Contribución"
                        bandera={false}
                        btnTexto2="Finanzas"
                        descripcion={`Soluciones en este aspecto, análisis de los objetivos de las empresas, hasta el diseño, implementación y capacitación.`}
                    />
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}