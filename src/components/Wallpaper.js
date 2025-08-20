import { Button, Container, Header, Image, Segment } from "semantic-ui-react"
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

export default Wallpaper