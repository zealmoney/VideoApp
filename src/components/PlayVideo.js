import { Grid, GridColumn, GridRow, Header, Image, Segment } from "semantic-ui-react"
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
import { useParams } from "react-router-dom"
import getVideos from "../api"
import { useGetVideosQuery } from "../features/api/apiSlice"
//import { useGetVideosQuery } from "../features/api/apiSlice"

const PlayVideo = ({mobile}) => {

    const [url, setUrl] = useState()

    const params = useParams()

    const {data: videos , isSuccess} = useGetVideosQuery()
    let videoUrl = ""
    let imageUrl = ""
    let titleUrl = ""
    let descriptionUrl = ""
    let detailsUrl = ""
    if(isSuccess){
        const video = videos.filter((v) => v.id === parseInt(params.videoid))[0]
        //console.log("This are the Videos " + video)
        if(video){
            videoUrl = video.videoUrl
            imageUrl = video.image
            titleUrl = video.title
            descriptionUrl = video.description
            detailsUrl = video.details
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
                    inverted
                    vertical
                >
                    <Grid 
                        textAlign="center" 
                        verticalAlign="middle"
                        style={{
                            height: '100vh'
                        }}
                    >
                        <Grid.Column width={12}>
                            <Header 
                                content={params.videoid}
                            />
                            <MediaController
                                style={{
                                    width: '100%',
                                    aspectRatio: '16/9'
                                }}
                            >
                                <ReactPlayer 
                                    slot="media"
                                    controls={false}
                                    src={videoUrl}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        "--controls": "none"
                                    }}
                                >

                                </ReactPlayer>
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
                        </Grid.Column>
                    </Grid>
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
                    inverted
                    vertical
                >
                    <Grid 
                        textAlign="center" 
                        verticalAlign="middle"
                        style={{
                            //height: '100vh'
                        }}
                    >
                        <GridRow>
                        <Grid.Column width={12}>
                            <MediaController
                                style={{
                                    width: '100%',
                                    aspectRatio: '16/9'
                                }}
                            >
                                <ReactPlayer 
                                    slot="media"
                                    controls={false}
                                    src="https://www.youtube.com/watch?v=IFlXeFwA_2A"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        "--controls": "none"
                                    }}
                                >

                                </ReactPlayer>
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
                        </Grid.Column>
                        </GridRow>
                        <GridRow>
                            <GridColumn width={4}>
                                <Image size="large" src={imageUrl} />
                            </GridColumn>
                            <GridColumn 
                                width={8}
                                textAlign="left"
                            >
                                <Header
                                    inverted
                                    as="h1"
                                    style={{
                                        fontSize: '2em',
                                        marginTop: '0.5em'
                                    }}
                                >
                                    {titleUrl}
                                </Header> 
                                <Header 
                                    inverted
                                    as="h2"
                                    style={{
                                        fontSize: '1.2em',
                                    }}
                                    content={descriptionUrl}
                                />
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
                </Segment>
                <Footer />
            </>
        )
    }
}

export default PlayVideo