import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';
import { getMyList, getPopularTvshow } from '../api';
import { useNavigate } from 'react-router-dom';

const PopularTvShows = ({mobile}) => {

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

    const [popularTvshows, setPopularTvshows] = useState([])

    useEffect(() => {
        allPopularTvshows()
    }, [])

    const allPopularTvshows = () => {
        getPopularTvshow().get("/")
        .then((res) => setPopularTvshows(res.data))
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

        <Segment
            vertical
            inverted
            style={{
                padding: mobile ? '20px 0px' : '20px 80px'
            }}
        >
            <Header
                as="h1"
                 style={{
                    fontSize: '2em'
                }}
            >
                Popular TV Shows
                <Icon name='angle right' size='mini' />
            </Header>

            <Carousel
                responsive={responsive}
            >
                {
                    popularTvshows.map((v) => {
                        return(
                            <div 
                                            class='container'
                                            style={{textAlign: 'center'}} 
                                            key={v.id}
                                        >                         
                                            <img
                                                alt="tvshowImage"
                                                class='image'
                                                id={v.id}
                                                src={v.image}
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
                                                    onClick={() => navigate('/play/' + v.id)}
                                                />
                                            </div>  

                                            <div class='down'>
                                                <Button
                                                    fluid   
                                                    color="orange"
                                                    onClick={addToList(v.title, v.description, v.image, v.videoUrl, v.details)}
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
    )
}

export default PopularTvShows