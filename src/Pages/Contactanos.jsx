import { useState } from "react"
import { Footer } from "../Components/Footer"
import { Header } from "../Components/Header"
import SimpleMap from "../Components/Mapa"
import { Nav } from "../Components/Nav"
import { Subtitulos } from "../Components/Subtitulos"
import ImgContactanos from '../assets/icon/ImgNosotros.svg'


export const Contactanos = () => {

    const [selectedValue, setSelectedValue] = useState("value1");

    return(
        <>
            <Header></Header>
            <Nav titulo="Contáctanos" img={ImgContactanos}></Nav>
            <div className="flex flex-col pb-20 pt-20">
                <Subtitulos subtitulo="Contacto" nombre="González Ruiz Auditores" ancho="w-[600px]"></Subtitulos>
                <div className="flex flex-row justify-around mt-5">
                    <div className="flex flex-col">
                        <p className='font-normal text-lg'>
                            Tuxtla Gutiérrez, Chiapas. <br />
                            1052, Av 2a. Sur Pte. El cerrito, 30540 <br />
                            +52 (55) 4341 1637 <br />
                            +52 (55) 4341 1637 <br />
                            GRAuditores@gmail.com <br />
                        </p>
                        <div className="mt-5">
                            <SimpleMap></SimpleMap>
                        </div>

                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-row gap-14">
                            <div className="flex flex-col">
                                <label className="text-[#397A80] font-medium text-sm">Nombre(s)</label>
                                <input type="text" placeholder="Nombre(s)" className="w-60 h-12 bg-[#F3F3F3] pl-2" />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[#397A80] font-medium text-sm">Apellidos</label>
                                <input type="text" placeholder="Apellidos" className="w-60 h-12 bg-[#F3F3F3] pl-2" />
                            </div>
                        </div>
                        <div className="flex flex-row gap-14">
                            <div className="flex flex-col">
                                <label className="text-[#397A80] font-medium text-sm">Tipo de servicio</label>
                                <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)} className="w-60 h-12 bg-[#F3F3F3] text-[#768485] pl-2">
                                    <option value="Seleccionar" disabled defaultValue="Seleccionar">--Seleccionar--</option>
                                    <option value="auditoria" className="">Auditoría</option>
                                    <option value="consultoria" className="">Consultoría</option>
                                    <option value="asesoria" className="">Asesoría</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[#397A80] font-medium text-sm">Teléfono</label>
                                <input type="tel" placeholder="Teléfono" className="w-60 h-12 bg-[#F3F3F3] pl-2" />
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="flex flex-col">
                                <label className="text-[#397A80] font-medium text-sm">Correo Electrónico</label>
                                <input type="email" placeholder="Correo Electrónico" className="w-[537px] h-12 bg-[#F3F3F3] pl-2" />
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="flex flex-col">
                                <label className="text-[#397A80] font-medium text-sm">Mensaje</label>
                                <textarea placeholder="Mensaje" className="w-[537px] h-44 bg-[#F3F3F3] pl-2 pt-2">

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