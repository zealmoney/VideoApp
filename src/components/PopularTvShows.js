import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Header, Icon, Image, Segment } from 'semantic-ui-react';
import { getPopularTvshow } from '../api';
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
                            <div>
                                <Image 
                                    centered 
                                    id={v.id}
                                    source={v.videoUrl}
                                    style={{width: 270, height: 400, cursor: 'pointer'}} 
                                    src={v.image} 
                                    onClick={() => navigate('/play/' + v.id)}
                                />                
                            </div>
                        )
                    })
                }
            </Carousel>
        </Segment>
    )
}

export default PopularTvShows