import { Button, Container, Header, Segment } from "semantic-ui-react"

const Wallpaper = () => (

 <Segment
    vertical
    inverted
    textAlign="center"
    style={{
        height: 400
    }}
 >
    <Container text>
    <Header 
        as="h1"
        inverted
        style={{
            marginTop: '3em',
            marginBottom: 0,
            fontSize: '2.5em'
        }}
    >
        VIDEO APP
    </Header>
    <Header
        as="h2"
        inverted
        style={{
            fontSize: '1.2em',
            marginTop: '1.5em'
        }}
    >        
        Watch trending movies and Tv shows with no hidden fee or subscription
    </Header>

    <Button
        size="huge"
        color="orange"
    >
        GET STARTED
    </Button>
    </Container>
 </Segment>
)

export default Wallpaper