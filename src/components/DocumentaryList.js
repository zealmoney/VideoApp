import { useEffect, useState } from "react"
import Carousel from "react-multi-carousel"
import { Embed, Image, Segment } from "semantic-ui-react"
import { getDocumentary } from "../api"
import { useNavigate } from "react-router-dom"


const DocumentaryList = ({mobile}) => {

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

    const [documentaryMovies, setDocumentaryMovies] = useState([])

    useEffect(() => {
        getAllDocumentaryMovies()
    }, [])

    const getAllDocumentaryMovies = () => {
        getDocumentary().get("/")
         .then((res) => setDocumentaryMovies(res.data))
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
                        documentaryMovies.map((d) => {
                            return(
                             <div>
                                <Embed
                                    id={d.id}
                                    placeholder={d.image}
                                    source={d.videoUrl}
                                    style={{width: 270, height: 400, cursor: 'pointer'}}
                                    onClick={() => navigate('/play/' + d.id)}
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

export default DocumentaryList