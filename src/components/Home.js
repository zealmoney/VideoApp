import Navbar from "./Navbar"
import NavbarMobile from "./NavbarMobile"

const Home = ({mobile}) => {
    if(mobile){
        return(
            <NavbarMobile />
        )
    }else{
        return(
            <Navbar />
        )
    }
}

export default Home