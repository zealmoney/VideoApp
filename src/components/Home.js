import CarouselComponent from "./CarouselComponent"
import Footer from "./Footer"
import Navbar from "./Navbar"
import NavbarMobile from "./NavbarMobile"

const Home = ({mobile}) => {
    if(mobile){
        return(
            <>
                <NavbarMobile />
                <CarouselComponent />
                <Footer />
            </>
            
        )
    }else{
        return(
            <>
                <Navbar />
                <CarouselComponent />
                <Footer />
            </> 
        )       
    }
}

export default Home