import { useState } from "react"
import { Footer } from "../Components/Footer"
import { Header } from "../Components/Header"
import SimpleMap from "../Components/Mapa"
import { Nav } from "../Components/Nav"
//import { Subtitulos } from "../Components/Subtitulos"
import ImgContacto from '../assets/img/ImgContacto.png'
import emailjs from 'emailjs-com'

export const Contactanos = () => {

    const [selectedValue, setSelectedValue] = useState("value1");
    
    const enviarEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tr8emmu','template_qhnyoxd',e.target,'-AEnOZ1NIz3dBVu0E').then(res=>{
            console.log(res);
            alert("Correo enviado")
        })
    }

    return(
        <>
            <Header></Header>
            <Nav titulo="Contáctanos" img={ImgContacto}></Nav>
            
            <div className="flex flex-col pb-20 pt-20 gap-5">
                
                <div className="flex custom:justify-center sm:block sm:ml-14 xl:ml-32">
                    <div className='flex flex-col items-start gap-3 custom:gap-1'>
                        <h2 className='text-3xl font-semibold text-[#397A80] custom:text-base md:text-xl lg:text-3xl'>Contacto</h2>
                        <h2 className='text-base font-light text-[#A1ADAF] custom:text-xs md:text-base lg:text-lg'>Gonzalez Ruiz Auditores</h2>
                        <div className={`bg-[#397A80] w-80 sm:w-72 h-[2px] lg:w-[420px]`}/>
                    </div>
                </div>

                <div className="flex flex-row justify-center gap-10
                                custom:flex-col custom:items-center 
                                sm:flex-row sm:items-start sm:gap-12 sm:justify-center
                                md:items-start md:flex-row md:gap-14 
                                lg:justify-center 
                                xl:justify-center
                                2xl:justify-around 2xl:mr-32 2xl:ml-32
                                3xl:justify-around">
                                     
                    <div className="flex flex-col gap-8
                                    md:flex-col 
                                    md:justify-around xl:justify-around">
                        <p className='font-normal text-lg 
                            custom:text-xs md:text-base
                            lg:text-base xl:text-xl'>
                            Tuxtla Gutiérrez, Chiapas. <br />
                            1052, Av 2a. Sur Pte. El cerrito, 30540 <br />
                            +52 (55) 4341 1637 <br />
                            +52 (55) 4341 1637 <br />
                            GRAuditores@gmail.com <br />
                        </p>
                        <div className="flex justify-center">
                            <SimpleMap></SimpleMap>
                        </div>
                    </div>

                    <form className="flex flex-col sm:items-center gap-5" onSubmit={enviarEmail}>
                        <div className="flex flex-row gap-14 custom:gap-8">
                            <div className="flex flex-col">
                                <label className="text-[#397A80] font-medium text-sm custom:text-xs lg:text-base xl:text-base 3xl:text-xl">Nombre(s)</label>
                                <input type="text" placeholder="Nombre(s)" id="nombre"  name='nombre' className="
                                w-60 h-12 bg-[#F3F3F3] pl-2 custom:w-36 custom:h-10 custom:text-xs lg:w-52 lg:h-11 lg:text-sm 3xl:w-64 3xl:h-12 3xl:text-base" />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[#397A80] font-medium text-sm custom:text-xs lg:text-base xl:text-base 3xl:text-xl">Apellidos</label>
                                <input type="text" placeholder="Apellidos" id="apellido" name= "apellido" className="
                                w-60 h-12 bg-[#F3F3F3] pl-2 custom:w-36 custom:h-10 custom:text-xs lg:w-52 lg:h-11 lg:text-sm 3xl:w-64 3xl:h-12 3xl:text-base" />
                            </div>
                        </div>
                        <div className="flex flex-row gap-14 custom:gap-8">
                            <div className="flex flex-col">
                                <label className="text-[#397A80] font-medium text-sm custom:text-xs xl:text-base">Tipo de servicio</label>
                                <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)} id="servicio" name="servicio" className="
                                   w-60 h-12 bg-[#F3F3F3] text-[#768485] pl-2 custom:w-36 custom:h-10 custom:text-xs custom:pl-2 lg:w-52 lg:h-11 lg:text-sm
                                   3xl:w-64 3xl:h-12 3xl:text-base">
                                    <option value="Seleccionar" className="" disabled defaultValue="Seleccionar">--Seleccionar--</option>
                                    <option value="auditoria" className="">Auditoría</option>
                                    <option value="consultoria" className="">Consultoría</option>
                                    <option value="asesoria" className="">Asesoría</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[#397A80] font-medium text-sm custom:text-xs xl:text-base">Teléfono</label>
                                <input type="tel" placeholder="Teléfono" id="tel" name="tel" className="
                                w-60 h-12 bg-[#F3F3F3] pl-2 custom:w-36 custom:h-10 custom:text-xs lg:w-52 lg:h-11 lg:text-sm 3xl:w-64 3xl:h-12 3xl:text-base" />
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="flex flex-col">
                                <label className="text-[#397A80] font-medium text-sm custom:text-xs xl:text-base">Correo Electrónico</label>
                                <input type="email" placeholder="Correo Electrónico" id="email" name="email" 
                                className="w-[537px] h-12 bg-[#F3F3F3] pl-2 custom:w-80 custom:h-10 custom:text-xs custom:pl-2 lg:w-[448px] lg:h-11 lg:text-sm
                                3xl:w-[544px] 3xl:h-12 3xl:text-base"/>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="flex flex-col">
                                <label className="text-[#397A80] font-medium text-sm custom:text-xs xl:text-base">Mensaje</label>
                                <textarea placeholder="Mensaje" id="mensaje" name="mensaje" 
                                className="w-[537px] h-44 bg-[#F3F3F3] pl-2 pt-2 
                                            custom:w-80 custom:text-xs custom:h-32 
                                            lg:w-[448px] lg:h-52 lg:text-sm 3xl:w-[544px] 3xl:h-64 3xl:text-base">
                                </textarea>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button onSubmit={enviarEmail} 
                                    className="bg-[#397A80] text-[#FFFFFF] w-48 h-12 rounded-[10px] font-bold text-base
                                                custom:text-xs custom:w-24 custom:h-8 custom:mr-5 lg:w-36 lg:h-10 lg:text-base
                                                hover:scale-105 hover:duration-300">
                            Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer></Footer>
        </>
    )
}