import { useState } from "react"
import { Footer } from "../Components/Footer"
import { Header } from "../Components/Header"
import SimpleMap from "../Components/Mapa"
import { Nav } from "../Components/Nav"
import { Subtitulos } from "../Components/Subtitulos"
import ImgContactanos from '../assets/icon/ImgNosotros.svg'
import emailjs from 'emailjs-com'

export const Contactanos = () => {

    const [selectedValue, setSelectedValue] = useState("value1");
    
    const enviarEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tr8emmu','template_ads0sty',e.target,'-AEnOZ1NIz3dBVu0E').then(res=>{
            console.log(res);
            alert("Correo enviado")
        })
    }

    return(
        <>
            <Header></Header>
            <Nav titulo="Contáctanos" img={ImgContactanos}></Nav>
            <div className="flex flex-col pb-20 pt-20">
                <div className="ml-20">
                    <Subtitulos subtitulo="Contacto" nombre="González Ruiz Auditores" ancho="w-[600px]"></Subtitulos>
                </div>
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
                    <form className="flex flex-col gap-5" onSubmit={enviarEmail}>
                        <div className="flex flex-row gap-14">
                            <div className="flex flex-col">
                                <label className="text-[#397A80] font-medium text-sm">Nombre(s)</label>
                                <input type="text" placeholder="Nombre(s)" id="nombre"  name='nombre' className="w-60 h-12 bg-[#F3F3F3] pl-2" />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[#397A80] font-medium text-sm">Apellidos</label>
                                <input type="text" placeholder="Apellidos" id="apellido" name= "apellido" className="w-60 h-12 bg-[#F3F3F3] pl-2" />
                            </div>
                        </div>
                        <div className="flex flex-row gap-14">
                            <div className="flex flex-col">
                                <label className="text-[#397A80] font-medium text-sm">Tipo de servicio</label>
                                <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)} id="servicio" name="servicio" className="w-60 h-12 bg-[#F3F3F3] text-[#768485] pl-2">
                                    <option value="Seleccionar" disabled defaultValue="Seleccionar">--Seleccionar--</option>
                                    <option value="auditoria" className="">Auditoría</option>
                                    <option value="consultoria" className="">Consultoría</option>
                                    <option value="asesoria" className="">Asesoría</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[#397A80] font-medium text-sm">Teléfono</label>
                                <input type="tel" placeholder="Teléfono" id="tel" name="tel" className="w-60 h-12 bg-[#F3F3F3] pl-2" />
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="flex flex-col">
                                <label className="text-[#397A80] font-medium text-sm">Correo Electrónico</label>
                                <input type="email" placeholder="Correo Electrónico" id="email" name="email" className="w-[537px] h-12 bg-[#F3F3F3] pl-2" />
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="flex flex-col">
                                <label className="text-[#397A80] font-medium text-sm">Mensaje</label>
                                <textarea placeholder="Mensaje" id="mensaje" name="mensaje" className="w-[537px] h-44 bg-[#F3F3F3] pl-2 pt-2">

                                </textarea>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button onSubmit={enviarEmail} className="bg-[#397A80] text-[#FFFFFF] w-48 h-12 rounded-[10px] font-bold text-base">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer></Footer>
        </>
    )
}