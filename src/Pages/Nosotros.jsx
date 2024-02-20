import { Footer } from "../Components/Footer"
import { Header } from "../Components/Header"
import { Nav } from "../Components/Nav"
import { Subtitulos } from "../Components/Subtitulos"
import ImgNosotros from "../assets/icon/ImgNosotros.svg"
import NosotrosImg from '../assets/icon/Nosotros.svg'

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
                    El despacho cuenta con más de 40 años de experiencia <br /> 
                    prestando servicios de contabilidad, auditoría y <br /> 
                    administración así como asesoría en impuestos. Esta <br /> 
                    experiencia en el mercado mexicano representa un valor <br /> 
                    agregado para sus clientes.
                    </p>
                </div>
                <div className="">
                    <Subtitulos subtitulo="Visión" nombre="" ancho="w-[514px]"/>
                    <p className="flex justify-center leading-6 tracking-widest mt-5">
                    El despacho cuenta con más de 40 años de experiencia <br /> 
                    prestando servicios de contabilidad, auditoría y <br /> 
                    administración así como asesoría en impuestos. Esta <br /> 
                    experiencia en el mercado mexicano representa un valor <br /> 
                    agregado para sus clientes.
                    </p>
                </div>
            </div>
            <div className="ml-32">
                <div>
                    <Subtitulos subtitulo="Nuestro Equipo" nombre="Gonzalez Ruiz Auditores" ancho="w-[514px]"></Subtitulos>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}