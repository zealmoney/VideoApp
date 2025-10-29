import Carousel from 'react-bootstrap/Carousel';
import clash from '../images/clash.jpeg'
import ghost from '../images/ghost.jpeg'
import horrified from '../images/horrified.jpeg'
import War2 from '../images/War2.jpeg'
import love from '../images/love.jpeg'
import lost from '../images/lost.jpeg'
import { Image } from 'semantic-ui-react';
//import Image  from 'react-bootstrap/Image';

function Wallpaper({mobile}) {
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <div style={{}}>
            <Image style={{height: mobile ? 400 : ''}} fluid  src={clash}  />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{}}>
            <Image style={{height: mobile ? 400 : ''}} fluid  src={love}  />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{}}>
            <Image style={{height: mobile ? 400 : ''}} fluid  src={ghost}  />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{}}>
            <Image style={{height: mobile ? 400 : ''}} fluid  src={War2}  />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{}}>
            <Image style={{height: mobile ? 400 : ''}} fluid  src={horrified}  />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{}}>
            <Image style={{height: mobile ? 400 : ''}} fluid  src={lost}  />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Wallpaper;