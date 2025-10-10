import { useEffect, useState } from "react"
import Carousel from "react-multi-carousel"
import { Embed, Image, Segment } from "semantic-ui-react"
import { getRomance } from "../api"
import { useNavigate } from "react-router-dom"


const RomanceList = ({mobile}) => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 2000, min: 1500 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 1500, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        },
    }

    const [romanceMovies, setRomanceMovies] = useState([])

    useEffect(() => {
        getAllRomanceMovies()
    }, [])

    const getAllRomanceMovies = () => {
        getRomance().get("/")
         .then((res) => setRomanceMovies(res.data))
          .catch(console.log('An error has occured'))
    }

    const navigate = useNavigate()

    return(
        <>
            <Segment
                vertical
                inverted
                style={{
                    padding: mobile ? '20px 0px' : '50px 80px'
                }}
            >
                <Carousel
                    responsive={responsive}
                >
                    {
                        romanceMovies.map((r) => {
                            return(
                             <div>
                                <Embed 
                                    id={r.id}
                                    placeholder={r.image}
                                    source={r.videoUrl}
                                    style={{width: 270, height: 400, cursor: 'pointer'}}
                                    onClick={() => navigate('/play/' + r.id)}
                                />
                             </div>
                            )
                        })
                    }
                    
                </Carousel>
            </Segment>
        </>
    )
}

export default RomanceList