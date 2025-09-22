import { Grid, Header, Segment } from "semantic-ui-react"
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
import { useEffect, useState } from "react"
import DashboardNavbar from "./DashboardNavbar"
import DashboardNavbarMobile from "./DashboardNavbarMobile"
import NavbarMobile from "./NavbarMobile"
import { useParams } from "react-router-dom"
import { useGetVideosQuery } from "../features/api/apiSlice"

const PlayVideo = ({mobile}) => {

    const [url, setUrl] = useState()
    //const [paramId, setparamId] = useState(params.videoid)

    const {data: videos, isSuccess} = useGetVideosQuery()

    const [source, setSource] = useState()

    const params = useParams()

    let sourceUrl = ""
    let playerDetails 

    if(isSuccess){
        const video = videos.filter((v) => v.id == params.videoid)[0]
        playerDetails =  <ReactPlayer 
                            slot="media"
                            controls={false}
                            src="https://www.youtube.com/watch?v=LXb3EKWsInQ" 
                            style={{
                                width: '100%',
                                height: '100%',
                                "--controls": "none"
                            }}
                         >

                        </ReactPlayer>
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
                               {
                                playerDetails
                               }
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
                            height: '100vh'
                        }}
                    >
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
                                    src="https://www.youtube.com/watch?v=LXb3EKWsInQ"
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
    }
}

export default PlayVideo