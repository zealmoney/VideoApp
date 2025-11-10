import DashboardNavbar from "./DashboardNavbar"
import DashboardNavbarMobile from "./DashboardNavbarMobile"
import Footer from "./Footer"
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
                <PopularMovies mobile />
                <PopularTvShows mobile />
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
                <PopularMovies />
                <PopularTvShows />
                <Footer />
            </> 
        )       
    }
}

export default Home