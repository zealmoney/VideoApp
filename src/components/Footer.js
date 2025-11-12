import { useNavigate } from "react-router-dom"
import { Container, Divider, Grid, Header, List, Segment } from "semantic-ui-react"

const Footer = ({mobile}) => {

    const navigate = useNavigate()

    if(mobile){
        return(
            <Segment 
                inverted 
                vertical
                style={{
                    padding: 'auto',
                }}
            >
                <Container >
                
                    <Grid
                        divided
                    >
                        <Grid.Row>
                        <Grid.Column width={8}>
                            <Header 
                                as='h5'
                                inverted
                                content='VIDEO APP'
                            />
                            <List
                                inverted
                                size="medium"
                            >
                                <List.Item
                                    as='a'
                                    style={{textDecoration: 'none'}}
                                    onClick={() => navigate('/aboutus')}
                                >
                                    About Us
                                </List.Item>
                                <List.Item
                                    as='a'
                                    style={{textDecoration: 'none'}}
                                    onClick={() => navigate('/contactus')}
                                >
                                    Contact Us
                                </List.Item>
                                <List.Item
                                    as='a'
                                    style={{textDecoration: 'none'}}
                                    onClick={() => navigate('/partnerwithus')}
                                >
                                    Partner With Us
                                </List.Item>
                            </List>
                        </Grid.Column>
                            
                            <Grid.Column width={8}>
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
                                        style={{textDecoration: 'none'}}
                                        onClick={() => navigate('/privacypolicy')}
                                    >
                                        Privacy Policy
                                    </List.Item>
                                    <List.Item
                                        as='a'
                                        style={{textDecoration: 'none'}}
                                        onClick={() => navigate('/termsofuse')}
                                    >
                                        Terms of Use
                                    </List.Item>
                                </List>
                        </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                        <Grid.Column width={8}>
                            <Header 
                                as='h5'
                                inverted
                                content='SUPPORT'
                            />
                            <List
                                inverted
                                size="medium"
                                style={{textDecoration: 'none'}}
                            >
                                <List.Item
                                    as='a'
                                    style={{textDecoration: 'none'}}
                                >
                                    Help
                                </List.Item>
                            </List>
                            </Grid.Column>
                            <Grid.Column width={8}>
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
                                        style={{textDecoration: 'none'}}
                                    >
                                        Press Release
                                    </List.Item>
                                    <List.Item
                                        as='a'
                                        style={{textDecoration: 'none'}}
                                    >
                                        Video App News
                                    </List.Item>  
                                </List>
                        </Grid.Column>
                        </Grid.Row>
                    </Grid> 
                </Container>  
                <Divider section inverted />
                    <p style={{textAlign: 'center'}}>
                        All Rights Reserved Video App &copy; 2025
                    </p>  
            </Segment>
        )
    }else{
        return(
            <Segment 
                inverted 
                vertical
                style={{
                    padding: '100px 0px',
                }}
            >
                <Container >
                
                    <Grid
                        divided
                    >
                        
                        <Grid.Column width={4}>
                            <Header 
                                as='h5'
                                inverted
                                content='VIDEO APP'
                            />
                            <List
                                inverted
                                size="medium"
                            >
                                <List.Item
                                    as='a'
                                    style={{textDecoration: 'none'}}
                                    onClick={() => navigate('/aboutus')}
                                >
                                    About Us
                                </List.Item>
                                <List.Item
                                    as='a'
                                    style={{textDecoration: 'none'}}
                                    onClick={() => navigate('/contactus')}
                                >
                                    Contact Us
                                </List.Item>
                                <List.Item
                                    as='a'
                                    style={{textDecoration: 'none'}}
                                    onClick={() => navigate('/partnerwithus')}
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
                                inverted
                                size="medium"
                                style={{textDecoration: 'none'}}
                            >
                                <List.Item
                                    as='a'
                                    style={{textDecoration: 'none'}}
                                >
                                    Help
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
                                    style={{textDecoration: 'none'}}
                                    onClick={() => navigate('/privacypolicy')}
                                >
                                    Privacy Policy
                                </List.Item>
                                <List.Item
                                    as='a'
                                    style={{textDecoration: 'none'}}
                                    onClick={() => navigate('/termsofuse')}
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
                                    style={{textDecoration: 'none'}}
                                >
                                    Press Release
                                </List.Item>
                                <List.Item
                                    as='a'
                                    style={{textDecoration: 'none'}}
                                >
                                    Video App News
                                </List.Item>
                                
                            </List>
                        </Grid.Column>
                    </Grid> 
                </Container>  
                <Divider section inverted />
                    <p style={{textAlign: 'center'}}>
                        All Rights Reserved Video App &copy; 2025
                    </p>  
            </Segment>
        )
    }
}

export default Footer