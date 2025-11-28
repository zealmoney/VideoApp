import { useState } from "react"
import { Dimmer, Loader, Segment } from "semantic-ui-react"

const LoadingPage = () => {

    const [Loading, setLoading] = useState(true)

    return(
        <>
            <Segment
                vertical
                inverted
                style={{
                    height: '100vh',
                }}
            >
                <Dimmer active>
                    <Loader size="massive">
                        Loading...
                    </Loader>
                </Dimmer>
                
            </Segment>
        </>
    )
}

export default LoadingPage