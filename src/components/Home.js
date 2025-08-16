import CarouselComponent from "./CarouselComponent"
import Footer from "./Footer"
import Navbar from "./Navbar"
import NavbarMobile from "./NavbarMobile"
import Wallpaper from "./Wallpaper"

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
                <Wallpaper />
                <Footer />
            </> 
        )       
    }
}

export default Home