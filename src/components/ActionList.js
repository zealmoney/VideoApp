import { useEffect, useState } from "react"
import Carousel from "react-multi-carousel"
import { Embed, Image, Reveal, RevealContent, Segment } from "semantic-ui-react"
import { getActionMovies } from "../api"
import { useNavigate } from "react-router-dom"


const ActionList = ({mobile}) => {

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

    const [actionMovies, setActionMovies] = useState([])

    useEffect(() => {
        getAllActionMovies()
    }, [])

    const getAllActionMovies = () => {
        getActionMovies().get("/")
         .then((res) => setActionMovies(res.data))
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
                        actionMovies.map((a) => {
                            return(  
                                <div>                          
                                    <Image
                                        as={Embed}
                                        id={a.id}
                                        placeholder={a.image}
                                        source={a.videoUrl}
                                        style={{width: 270, height: 400, cursor: 'pointer'}}
                                        onClick={() => navigate('/play/' + a.id)}
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

export default ActionList