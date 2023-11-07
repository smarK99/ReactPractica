import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Componentes from "../pages/Componentes"
import Administracion from "../pages/Administracion"

//Se configuran las distintas urls que van a utilizar nuestros componentes
const AppRoutes: React.FC = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/componentes" element={<Componentes/>} />
                <Route path="/administracion" element={<Administracion/>} />
            </Routes>
        </>
    )
}

export default AppRoutes