import { Container, Divider, Grid, Header, List, Segment } from "semantic-ui-react"

const Footer = () => {

    return(
        <Segment
            inverted
            vertical
            style={{
                margin: '5em 0em 0em'
            }}
        >
            <Container>
                <Grid
                    stackable
                    inverted
                    divided
                >
                    
                    <Grid.Column width={4}>
                        <Header 
                            as='h5'
                            inverted
                            content='VIDEO APP'
                        />
                        <List
                            link
                            inverted
                            size="medium"
                        >
                            <List.Item
                                as='a'
                            >
                                About Us
                            </List.Item>
                            <List.Item
                                as='a'
                            >
                                Contact Us
                            </List.Item>
                            <List.Item
                                as='a'
                            >
                                Partner With Us
                            </List.Item>
                        </List>
                    </Grid.Column>

                    <Grid.Column width={4}>
                        <Header 
                            as='h5'
                            inverted
                            content='SUPPORT'
                        />
                        <List
                            link
                            inverted
                            size="medium"
                        >
                            <List.Item
                                as='a'
                            >
                                Help
                            </List.Item>
                            <List.Item
                                as='a'
                            >
                                Contact Support
                            </List.Item>
                        </List>
                    </Grid.Column>

                    <Grid.Column width={4}>
                        <Header 
                            as='h5'
                            inverted
                            content='PRIVACY'
                        />
                        <List
                            link
                            inverted
                            size="medium"
                        >
                            <List.Item
                                as='a'
                            >
                                Privacy Policy
                            </List.Item>
                            <List.Item
                                as='a'
                            >
                                Terms of Use
                            </List.Item>
                        </List>
                    </Grid.Column>

                    <Grid.Column width={4}>
                        <Header 
                            as='h5'
                            inverted
                            content='PRESS'
                        />
                        <List
                            link
                            inverted
                            size="medium"
                        >
                            <List.Item
                                as='a'
                            >
                                Press Release
                            </List.Item>
                            <List.Item
                                as='a'
                            >
                                Video App News
                            </List.Item>
                            
                        </List>
                    </Grid.Column>
                </Grid>
                <Divider section inverted />
                <p style={{textAlign: 'center'}}>
                    All Rights Reserved Video App &copy; 2025
                </p>     
            </Container>
        </Segment>
    )
}

export default Footer