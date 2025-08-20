import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Header, Icon, Image, Segment } from 'semantic-ui-react';
import film1 from '../images/film1.webp'
import film2 from '../images/film2.webp'
import film3 from '../images/film3.webp'
import film4 from '../images/film4.webp'
import film5 from '../images/film5.webp'
import film6 from '../images/film6.webp'
import film7 from '../images/film7.webp'
import film8 from '../images/film8.webp'

const PopularMovies = () => {

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
   
    return(

        <Segment
            vertical
            inverted
            style={{
                padding: '50px 80px'
            }}
        >
            <Header
                as="h1"
                 style={{
                    paddingBottom: 10,
                    fontSize: '2em'
                }}
            >
                Popular Movies
                <Icon name='angle right' size='mini' />
            </Header>

            <Carousel
                responsive={responsive}
            >
                <div style={{}}>
                        <img style={{width: 270, height: 400}} src={film1} />                
                </div>
                <div style={{}}>
                
                    <img style={{width: 270, height: 400}} src={film2} />
                
                </div>

                <div style={{width: 270, height: 400}}>

                        <Image style={{height: 400}} src={film3} />

                </div>
                <div style={{width: 270, height: 400}}>
                    
                    <Image style={{height: 400}} src={film4} />
                    
                </div>

                <div style={{width: 270, height: 400}}>
                    
                    <Image style={{height: 400}} src={film5} />
                    
                </div>
                <div style={{width: 270, height: 400}}>
                    
                    <Image style={{height: 400}} src={film6} />
                    
                </div>

                <div style={{width: 270, height: 400}}>
                    
                    <Image style={{height: 400}} src={film7} />
                    
                </div>
                <div style={{width: 270, height: 400}}>
                    
                    <Image style={{height: 400}} src={film8} />
                    
                </div>
            </Carousel>
        </Segment>
    )
}

export default PopularMovies