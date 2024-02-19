import { Footer } from "../Components/Footer"
import { Header } from "../Components/Header"
import { Nav } from "../Components/Nav"
import { Subtitulos } from "../Components/Subtitulos"
import ImgContactanos from '../assets/icon/ImgNosotros.svg'

export const Contactanos = () => {
    return(
        <>
            <Header></Header>
            <Nav titulo="Contáctanos" img={ImgContactanos}></Nav>
            <div className="flex flex-col pb-20">
                <Subtitulos subtitulo="Contacto"></Subtitulos>
                <div className="flex flex-row justify-around mt-5">
                    <div className="flex flex-col mr-28">
                        <p className='font-normal text-lg'>
                            Tuxtla Gutiérrez, Chiapas. <br />
                            1052, Av 2a. Sur Pte. El cerrito, 30540 <br />
                            +52 (55) 4341 1637 <br />
                            +52 (55) 4341 1637 <br />
                            GRAuditores@gmail.com <br />
                        </p>

                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-row gap-14">
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-[#397A80] font-medium text-sm">Nombre(s)</label>
                                <input type="text" placeholder="Nombre(s)" className="w-60 h-12 bg-[#FAFAFA] pl-2" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-[#397A80] font-medium text-sm">Apellidos</label>
                                <input type="text" placeholder="Apellidos" className="w-60 h-12 bg-[#FAFAFA] pl-2" />
                            </div>
                        </div>
                        <div className="flex flex-row gap-14">
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-[#397A80] font-medium text-sm">Tipo de servicio</label>
                                <select className="w-60 h-12 bg-[#FAFAFA] text-[#768485] pl-2">
                                    <option value="" disabled autoFocus>--Seleccionar--</option>
                                    <option value="" className="">Auditoría</option>
                                    <option value="" className="">Consultoría</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-[#397A80] font-medium text-sm">Teléfono</label>
                                <input type="tel" placeholder="Teléfono" className="w-60 h-12 bg-[#FAFAFA] pl-2" />
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-[#397A80] font-medium text-sm">Correo Electrónico</label>
                                <input type="email" placeholder="Correo Electrónico" className="w-[537px] h-12 bg-[#FAFAFA] pl-2" />
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-[#397A80] font-medium text-sm">Mensaje</label>
                                <textarea placeholder="Mensaje" className="w-[537px] h-44 bg-[#FAFAFA] pl-2 pt-2">

                                </textarea>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-[#397A80] text-[#FFFFFF] w-48 h-12 rounded-[10px] font-bold text-base">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    )
}