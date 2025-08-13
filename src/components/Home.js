import Footer from "./Footer"
import Navbar from "./Navbar"
import NavbarMobile from "./NavbarMobile"

const Home = ({mobile}) => {
    if(mobile){
        return(
            <>
                <NavbarMobile />
                <Footer />
            </>
            
        )
    }else{
        return(
            <>
                <Navbar />
                <Footer />
            </> 
        )       
    }
}

export default Home