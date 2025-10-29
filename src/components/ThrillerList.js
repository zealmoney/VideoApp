import { useEffect, useState } from "react"
import Carousel from "react-multi-carousel"
import { Button, Embed, Icon, Image, Segment } from "semantic-ui-react"
import { getMyList, getThrillers } from "../api"
import { useNavigate } from "react-router-dom"


const ThrillerList = ({mobile}) => {

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

    const [thrillerMovies, setThrillerMovies] = useState([])

    useEffect(() => {
        getAllThrillerMovies()
    }, [])

    const getAllThrillerMovies = () => {
        getThrillers().get("/")
         .then((res) => setThrillerMovies(res.data))
          .catch(console.log('An error has occured'))
    }

    const addToList = (title, description, image, videoUrl, details) => () => {
            let item = {title, description, image, videoUrl, details, email: localStorage.getItem("email")}
            getMyList().post("/", item)
             .then(() => alert(`${title} has been added to your list`))
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
                        thrillerMovies.map((t) => {
                            return(
                                <div 
                                    class='container'
                                    style={{textAlign: 'center'}} 
                                    key={t.id}
                                >                         
                                    <img
                                        class='image'
                                        id={t.id}
                                        src={t.image}
                                        style={{
                                            width: '100%', 
                                            height: 400
                                        }}
                                    />

                                    <div class='middle'>
                                        <Icon 
                                            link
                                            name='play circle outline'
                                            color='orange'
                                            size='huge'
                                            onClick={() => navigate('/play/' + t.id)}
                                        />
                                    </div>  

                                    <div class='down'>
                                        <Button
                                            fluid   
                                            color="orange"
                                            onClick={addToList(t.title, t.description, t.image, t.videoUrl, t.details)}
                                        >
                                            Add to My List
                                        </Button>
                                    </div>      
                                </div> 
                            )
                        })
                    }
                    
                </Carousel>
            </Segment>
        </>
    )
}

export default ThrillerList