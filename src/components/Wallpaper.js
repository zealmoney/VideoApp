import Carousel from 'react-bootstrap/Carousel';
import { Image, Segment } from 'semantic-ui-react';
import { useGetWallpaperQuery } from '../features/api/apiSlice';
import { useNavigate } from 'react-router-dom';
import PopularMovies from './PopularMovies';
import PopularTvShows from './PopularTvShows';
import LoadingPage from './LoadingPage';

function Wallpaper({mobile}) {

  const navigate = useNavigate()

  const {data: wallpapers, isSuccess} = useGetWallpaperQuery()
  let wallpaperDetails
  if(isSuccess){
    wallpaperDetails = wallpapers.map((w) => (    
        <Carousel.Item>
          <Image 
            style={{
              height: mobile ? 400 : '',
              marginTop: mobile ? '' : '',
            }} 
            fluid  
            src={w.image}  
            onClick={() => navigate('/play/' + w.id)}
          />
          <Carousel.Caption>
            <h3 
              style={{
                fontFamily: 'Irish Grover',
                fontWeight: 700,
                fontSize: mobile ? 30 : 60,
                fontStyle: 'normal'
                }}
            >
              {w.title}
            </h3>
            <Segment
              inverted
              style={{
                padding: mobile ? 20 : 50,
                opacity: 0.5
              }}
            >
            <p 
              style={{
                fontFamily: 'Momo Trust Display',
                fontWeight: 400,
                fontSize: mobile ? 14:  22,
                fontStyle: 'normal',
                color: '#fff'
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
    <>
      {
        wallpaperDetails ? 
          <Carousel>        
            {wallpaperDetails}
          </Carousel>       
        : 
        <LoadingPage />
      }
    </>
  );
}

export default Wallpaper;