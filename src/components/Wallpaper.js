import Carousel from 'react-bootstrap/Carousel';
import clash from '../images/clash.jpeg'
import ghost from '../images/ghost.jpeg'
import horrified from '../images/horrified.jpeg'
import War2 from '../images/War2.jpeg'
import love from '../images/love.jpeg'
import lost from '../images/lost.jpeg'
import { Image, Segment } from 'semantic-ui-react';
import { useGetWallpaperQuery } from '../features/api/apiSlice';
import { useNavigate } from 'react-router-dom';

function Wallpaper({mobile}) {

  const navigate = useNavigate()

  const {data: wallpapers, isSuccess} = useGetWallpaperQuery()
  let wallpaperDetails
  if(isSuccess){
    wallpaperDetails = wallpapers.map((w) => (    
        <Carousel.Item>
          <Image 
            style={{height: mobile ? 400 : ''}} 
            fluid  
            src={w.image}  
            onClick={() => navigate('/play/' + w.id)}
          />
          <Carousel.Caption>
            <h3 
              style={{
                fontFamily: 'Irish Grover',
                fontWeight: 700,
                fontSize: 60,
                fontStyle: 'normal'
                }}
            >
              {w.title}
            </h3>
            <Segment
              inverted
              style={{
                padding: 50,
                backgroundColor: '#CC5500'
              }}
            >
            <p 
              style={{
                fontFamily: 'Momo Trust Display',
                fontWeight: 400,
                fontSize: 18,
                fontStyle: 'normal'
              }}
            >
              {w.details}
            </p>
            </Segment>
          </Carousel.Caption>
        </Carousel.Item>
    ))
                       
  }

  return (
    <div>
      <Carousel>        
        {wallpaperDetails}
      </Carousel>
    </div>
  );
}

export default Wallpaper;