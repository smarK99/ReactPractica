import AboutUs from "../components/AboutUs/AboutUs"
import Carrouselhome from "../components/CarrouselHome/CarrouselHome"

//Este componente page lo que hace es renderizar los componentes que se le pasan
const HomePage = () => {
    return(
        <>
            <Carrouselhome/>
            <AboutUs/>
        </>
    )
}

export default HomePage