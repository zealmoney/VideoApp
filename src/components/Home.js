import CarouselComponent from "./CarouselComponent"
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
                <NavbarMobile />
                <Wallpaper />
                <PopularMovies />
                <PopularTvShows />
                <Footer />
            </>
            
        )
    }else{
        return(
            <>
                <Navbar />
                <Wallpaper />
                <PopularMovies />
                <PopularTvShows />
                <Footer />
            </> 
        )       
    }
}

export default Home