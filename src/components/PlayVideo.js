import { Grid, Segment } from "semantic-ui-react"
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
import { useState } from "react"

const PlayVideo = () => {

    const [url, setUrl] = useState("https://youtu.be/b6JlYPvEdTo?si=KMF6m8WtiA-5KbUN")

    return(
        <>
            <Navbar />
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
                                src={url}
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

export default PlayVideo