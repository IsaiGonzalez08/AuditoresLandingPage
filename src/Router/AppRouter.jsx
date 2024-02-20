import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LandingPage } from "../Pages/LandingPage"
import { Nosotros } from "../Pages/Nosotros"
import { Contactanos } from "../Pages/Contactanos"

export const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/Nosotros" element={<Nosotros/>}/>
                <Route path="/Contactanos" element={<Contactanos/>}/>
            </Routes>
        </BrowserRouter>
    )
}