import { Button, Container, Divider, Grid, GridColumn, GridRow, Header, Image, Segment } from "semantic-ui-react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import { MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlaybackRateButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaFullscreenButton } from "media-chrome/react"
import ReactPlayer from 'react-player'
import { use, useEffect, useState } from "react"
import DashboardNavbar from "./DashboardNavbar"
import DashboardNavbarMobile from "./DashboardNavbarMobile"
import NavbarMobile from "./NavbarMobile"
import { useNavigate, useParams } from "react-router-dom"
import getVideos from "../api"
import { useGetVideosQuery } from "../features/api/apiSlice"
//import { useGetVideosQuery } from "../features/api/apiSlice"

const PlayVideo = ({mobile}) => {

    const [url, setUrl] = useState()

    const params = useParams()

    const navigate = useNavigate()

    const {data: videos , isSuccess} = useGetVideosQuery()
    let videoUrl = ""
    let imageUrl = ""
    let titleUrl = ""
    let descriptionUrl = ""
    let detailsUrl = ""

    let videoDetails

    if(isSuccess){
        const video = videos.filter((v) => v.id === parseInt(params.videoid))[0]
        
        if(video){
            titleUrl = video.title
            imageUrl = video.image
            descriptionUrl = video.description
            detailsUrl = video.details
             videoDetails = <ReactPlayer 
                                    slot="media"
                                    controls={false}
                                    src={video.videoUrl}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        "--controls": "none"
                                    }}
                            >

                            </ReactPlayer>
        }
    }
  
    return(
        <>
            {
                localStorage.getItem("email") ?
                <DashboardNavbar /> :
                <Navbar />
            }
            <Segment 
                vertical 
                inverted
            >
                <Container>
                <Grid>
                    <GridRow>
                        <GridColumn 
                            width={16}
                            style={{
                                marginTop: 40
                            }}
                        >
                            <Button
                                color="orange"
                                size={mobile ? "tiny" : "big"}
                                floated="right"
                                style={{
                                    marginBottom: 20
                                }}
                                onClick={() => navigate('/')}
                            >
                                Back
                            </Button>
                            <MediaController
                                    style={{
                                        width: '100%',
                                        aspectRatio: '16/9'
                                    }}
                                >
                                    {videoDetails}
                                    <MediaControlBar>
                                        <MediaPlayButton />
                                        <MediaSeekBackwardButton seekOffset={10} />
                                        <MediaSeekForwardButton seekOffset={10} />
                                        <MediaTimeRange />
                                        <MediaTimeDisplay showDuration />
                                        <MediaMuteButton />
                                        <MediaVolumeRange />
                                        <MediaPlaybackRateButton />
                                        <MediaFullscreenButton />
                                    </MediaControlBar>
                                </MediaController>
                                    
                        </GridColumn>
                    </GridRow>
                    <Divider inverted />
                    <GridRow>
                        <GridColumn width={6}>
                            <Image fluid src={imageUrl} />                
                        </GridColumn>
                        <GridColumn width={10}>
                            <Header inverted as='h2' content={titleUrl} />
                            <p 
                                style={{
                                    fontSize: mobile ? '0.7em' : '1.5em',
                                }}
                            >
                                {detailsUrl}    
                            </p>                 
                        </GridColumn>
                    </GridRow>
                </Grid>
                </Container>
            </Segment>
            <Footer />
        </>
    )
    
}

export default PlayVideo