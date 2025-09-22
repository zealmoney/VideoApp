import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Header, Icon, Image, Segment } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import getPopularMovies from '../api';

const PopularMovies = ({mobile}) => {

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

    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        allPopularMovies()
    }, [])

    const allPopularMovies = () => {
        getPopularMovies().get("/")
        .then((res) => setPopularMovies(res.data))
        .catch(console.log('An error has occured'))
    }
   
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
                Popular Movies
                <Icon name='angle right' size='mini' />
            </Header>

            <Carousel
                responsive={responsive}
            >
                {
                    popularMovies.map((v) => {
                        return(
                            <div>
                                <Image centered style={{width: 270, height: 400}} src={v.image} />
                            </div>
                        )
                    })
                }
            </Carousel>
        </Segment>
    )
}

export default PopularMovies