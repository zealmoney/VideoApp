import Carousel from "react-multi-carousel"
import pic from '../images/pic.webp'
import pic2 from '../images/pic2.webp'
import pic3 from '../images/pic3.webp'
import pic4 from '../images/pic4.webp'
import pic5 from '../images/pic5.webp'
import pic6 from '../images/pic6.webp'
import pic7 from '../images/pic7.webp'
import pic8 from '../images/pic8.webp'
import { Image, Segment } from "semantic-ui-react"


const MyList = ({mobile}) => {

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
                    <div style={{}}>
                            <Image centered style={{width: 270, height: 400}} src={pic} />                
                    </div>
                    <div style={{}}>
                    
                        <Image centered style={{width: 270, height: 400}} src={pic2} />
                    
                    </div>

                    <div style={{}}>

                            <Image centered style={{width: 270, height: 400}} src={pic3} />

                    </div>
                    <div style={{}}>
                        
                        <Image centered style={{width: 270, height: 400}} src={pic4} />
                        
                    </div>

                    <div style={{}}>
                        
                        <Image centered style={{width: 270, height: 400}} src={pic5} />
                        
                    </div>
                    <div style={{}}>
                        
                        <Image centered style={{width: 270, height: 400}} src={pic6} />
                        
                    </div>

                    <div style={{}}>
                        
                        <Image centered style={{width: 270, height: 400}} src={pic7} />
                        
                    </div>
                    <div style={{}}>
                        
                        <Image centered style={{width: 270, height: 400}} src={pic8} />
                        
                    </div>
                </Carousel>
            </Segment>
        </>
    )
}

export default MyList