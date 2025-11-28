import DashboardNavbar from "./DashboardNavbar"
import DashboardNavbarMobile from "./DashboardNavbarMobile"
import Footer from "./Footer"
import LoadingPage from "./LoadingPage"
import Navbar from "./Navbar"
import NavbarMobile from "./NavbarMobile"
import PopularMovies from "./PopularMovies"
import PopularTvShows from "./PopularTvShows"
import Wallpaper from "./Wallpaper"

const Home = ({mobile}) => {
    if(mobile){
        return(
            <>
                {
                    localStorage.getItem("email") ?
                    <DashboardNavbarMobile /> :
                    <NavbarMobile />
                }
                <Wallpaper mobile />
                <Footer mobile />
            </>
            
        )
    }else{
        return(
            <>
                {
                    localStorage.getItem("email") ?
                    <DashboardNavbar /> :
                    <Navbar />
                }
                <Wallpaper />
                <Footer />
            </> 
        )       
    }
}

export default Home