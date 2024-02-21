import { CardServicios } from "../Components/CardServicios"
import { Footer } from "../Components/Footer"
import { Header } from "../Components/Header"
import { Nav } from "../Components/Nav"
import { Subtitulos } from "../Components/Subtitulos"
import ImgContactanos from '../assets/icon/ImgNosotros.svg'
import Card1 from '../assets/img/Card1.png'

export const Servicios = () => {
    return(
        <>
            <Header></Header>
            <Nav titulo="Servicios" img={ImgContactanos}></Nav>
            <div className="flex flex-col">
                <Subtitulos subtitulo="Auditorias" nombre="González Ruiz Auditores" ancho="w-[539px]"/>
                <div className="flex flex-row">
                    <CardServicios img={Card1} titulo="Auditoría financiera" btnTexto="Auditoría" bandera={true} btnTexto2="Finanzas"
                    descripcion={`Revisamos los estados financieros y asi obtener un base sobre la cual emitiremos una opinión evaluando su razonabilidad.`}
                    />
                </div>

            </div>
            <Footer></Footer>
        </>
    )
}