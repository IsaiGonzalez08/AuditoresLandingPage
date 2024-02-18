import { Header } from "../Components/Header"
import { Inicio } from "../Components/Inicio"
import { SeccionDisposicion } from "../Components/SeccionDisposicion"
import { SeccionEspecialista } from "../Components/SeccionEspecialista"
import { SeccionAuditorias } from "../Components/SecciónAuditorias"

export const LandingPage = () => {
    return(
        <div className="w-full h-full bg-[#FCFEFE]">
            <Header></Header>
            <Inicio></Inicio>
            <SeccionAuditorias></SeccionAuditorias>
            <SeccionDisposicion></SeccionDisposicion>
            <SeccionEspecialista></SeccionEspecialista>
        </div>
    )
}