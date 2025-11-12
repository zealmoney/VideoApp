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
import DashboardNavbar from "./DashboardNavbar"
import { useNavigate, useParams } from "react-router-dom"
import { useGetVideosQuery } from "../features/api/apiSlice"
import NavbarMobile from "./NavbarMobile"
import DashboardNavbarMobile from "./DashboardNavbarMobile"

const PlayVideo = ({mobile}) => {

    const params = useParams()

    const navigate = useNavigate()

    const {data: videos , isSuccess} = useGetVideosQuery()
    let imageUrl = ""
    let titleUrl = ""
    let detailsUrl = ""

    let videoDetails

    if(isSuccess){
        const video = videos.filter((v) => v.id === parseInt(params.videoid))[0]
        
        if(video){
            titleUrl = video.title
            imageUrl = video.image
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

    if(mobile){
        return(
            <>
                {
                    localStorage.getItem("email") ?
                    <DashboardNavbarMobile /> :
                    <NavbarMobile />
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
                                    marginTop: 60
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
                                        <div
                                            style={{
                                               overflowX: 'hidden' 
                                            }}
                                        >
                                            {videoDetails}
                                        </div>
                                        
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
                                        fontSize: '0.75em',
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
    }else{
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
                            <GridColumn width={4}>
                                <Image fluid src={imageUrl} />                
                            </GridColumn>
                            <GridColumn width={8}>
                                <Header inverted as='h2' content={titleUrl} />
                                <p 
                                    style={{
                                        fontSize: '1.5em',
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
    
}

export default PlayVideo