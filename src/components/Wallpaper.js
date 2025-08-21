import Carousel from 'react-bootstrap/Carousel';
import clash from '../images/clash.jpeg'
import ghost from '../images/ghost.jpeg'
import horrified from '../images/horrified.jpeg'
import War2 from '../images/War2.jpeg'
import love from '../images/love.jpeg'
import lost from '../images/lost.jpeg'
import { Image } from 'react-bootstrap';

function Wallpaper() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image text="First slide" src={War2} style={{width: '100%', height: 800}} />
        <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image text="Second slide" src={love} style={{width: '100%', height: 800}} />
        <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image text="Third slide" src={ghost} style={{width: '100%', height: 800}} />
        <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Wallpaper;

{/*import { Button, Container, Header, Image, Segment } from "semantic-ui-react"
import war2 from '../images/War2.jpeg'

const Wallpaper = () => (

 <Segment
    vertical
    inverted
    textAlign="center"
    style={{}}
 >
    <div
        style={{
            width: '100%',
            height: 800
        }}
    >
        <Image src={war2} fluid />
    </div>
 </Segment>
)

export default Wallpaper*/}
