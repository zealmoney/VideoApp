import { Grid, Header, Segment } from "semantic-ui-react"
import DashboardNavbar from "./DashboardNavbar"
import DashboardNavbarMobile from "./DashboardNavbarMobile"
import Footer from "./Footer"
import Navbar from "./Navbar"
import NavbarMobile from "./NavbarMobile"
import { useNavigate } from "react-router-dom"

const AllCategories = ({mobile}) => {

    const navigate = useNavigate()

    if(mobile){
        return(
            <div>
               {
                    localStorage.getItem("email") ?
                    <DashboardNavbarMobile /> :
                    <NavbarMobile />
            } 
                <Segment
                    vertical
                    inverted
                    style={{
                        padding: '20px 20px',
                    }}
                >
                    <Grid 
                        textAlign="center" 
                        stackable
                    >
                        <Grid.Row>
                            <Grid.Column>
                                <Header
                                    as='h2'
                                    inverted
                                    style={{
                                        fontSize: 40,
                                        marginTop: 40,
                                        marginBottom: 40
                                    }}
                                >
                                    Genres
                                </Header>    
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Segment 
                                    raised
                                    vertical
                                    inverted
                                    basic
                                    padded
                                    color="orange"
                                    onClick={() => navigate('/action')}
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Header 
                                        size="large"
                                        as='h2'
                                        textAlign="center"
                                        inverted
                                    >
                                        Action
                                        <Header.Subheader>
                                            Click to watch action movies
                                        </Header.Subheader>
                                    </Header>
                                </Segment>
                            </Grid.Column>

                            <Grid.Column width={4}>
                                <Segment 
                                    raised
                                    vertical
                                    inverted
                                    basic
                                    padded
                                    color="orange"
                                    onClick={() => navigate('/drama')}
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Header 
                                        size="large"
                                        as='h2'
                                        textAlign="center"
                                        inverted
                                    >
                                        Drama
                                        <Header.Subheader>
                                            Click to watch dramatic movies
                                        </Header.Subheader>
                                    </Header>
                                </Segment>
                            </Grid.Column>

                            <Grid.Column width={4}>
                                <Segment 
                                    raised
                                    vertical
                                    inverted
                                    basic
                                    padded
                                    color="orange"
                                    onClick={() => navigate('/comedy')}
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Header 
                                        size="large"
                                        as='h2'
                                        textAlign="center"
                                        inverted
                                    >
                                        Comedy
                                        <Header.Subheader>
                                            Click to watch comedy movies
                                        </Header.Subheader>
                                    </Header>
                                </Segment>
                            </Grid.Column>

                            <Grid.Column width={4}>
                                <Segment 
                                    raised
                                    vertical
                                    inverted
                                    basic
                                    padded
                                    color="orange"
                                    onClick={() => navigate('/horror')}
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Header 
                                        size="large"
                                        as='h2'
                                        textAlign="center"
                                        inverted
                                    >
                                        Horror 
                                        <Header.Subheader>
                                            Click to watch horror movies
                                        </Header.Subheader>
                                    </Header>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Segment 
                                    raised
                                    vertical
                                    inverted
                                    basic
                                    padded
                                    color="orange"
                                    onClick={() => navigate('/romance')}
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Header 
                                        size="large"
                                        as='h2'
                                        textAlign="center"
                                        inverted
                                    >
                                        Romance
                                        <Header.Subheader>
                                            Click to watch romantic movies
                                        </Header.Subheader>
                                    </Header>
                                </Segment>
                            </Grid.Column>

                            <Grid.Column width={4}>
                                <Segment 
                                    raised
                                    vertical
                                    inverted
                                    basic
                                    padded
                                    color="orange"
                                    onClick={() => navigate('/scifi')}
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Header 
                                        size="large"
                                        as='h2'
                                        textAlign="center"
                                        inverted
                                    >
                                        Sci-fi
                                        <Header.Subheader>
                                            Click to watch sci-fi movies
                                        </Header.Subheader>
                                    </Header>
                                </Segment>
                            </Grid.Column>

                            <Grid.Column width={4}>
                                <Segment 
                                    raised
                                    vertical
                                    inverted
                                    basic
                                    padded
                                    color="orange"
                                    onClick={() => navigate('/documentary')}
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Header 
                                        size="large"
                                        as='h2'
                                        textAlign="center"
                                        inverted
                                    >
                                        Documentary
                                        <Header.Subheader>
                                            Click to watch documentary movies
                                        </Header.Subheader>
                                    </Header>
                                </Segment>
                            </Grid.Column>

                            <Grid.Column width={4}>
                                <Segment 
                                    raised
                                    vertical
                                    inverted
                                    basic
                                    padded
                                    color="orange"
                                    onClick={() => navigate('/thrillers')}
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Header 
                                        size="large"
                                        as='h2'
                                        textAlign="center"
                                        inverted
                                    >
                                        Thrillers
                                        <Header.Subheader>
                                            Click to watch thriller movies
                                        </Header.Subheader>
                                    </Header>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Footer mobile />
            </div>
        )
    }else{
        return(
            <div>
                {
                    localStorage.getItem("email") ?
                    <DashboardNavbar /> :
                    <Navbar />
                }
                <Segment
                    vertical
                    inverted
                    style={{
                        padding: '50px 80px',
                        height: '75vh'
                    }}
                >
                    <Grid 
                        textAlign="center"
                    >
                        <Grid.Row>
                            <Grid.Column>
                                <Header
                                    as='h2'
                                    inverted
                                    style={{
                                        fontSize: 40,
                                        marginTop: 40,
                                        marginBottom: 40
                                    }}
                                >
                                    Genres
                                </Header>    
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Segment 
                                    raised
                                    vertical
                                    inverted
                                    basic
                                    padded
                                    color="orange"
                                    onClick={() => navigate('/action')}
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Header 
                                        size="large"
                                        as='h2'
                                        textAlign="center"
                                        inverted
                                    >
                                        Action
                                        <Header.Subheader>
                                            Click to watch action movies
                                        </Header.Subheader>
                                    </Header>
                                </Segment>
                            </Grid.Column>

                            <Grid.Column width={4}>
                                <Segment 
                                    raised
                                    vertical
                                    inverted
                                    basic
                                    padded
                                    color="orange"
                                    onClick={() => navigate('/drama')}
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Header 
                                        size="large"
                                        as='h2'
                                        textAlign="center"
                                        inverted
                                    >
                                        Drama
                                        <Header.Subheader>
                                            Click to watch dramatic movies
                                        </Header.Subheader>
                                    </Header>
                                </Segment>
                            </Grid.Column>

                            <Grid.Column width={4}>
                                <Segment 
                                    raised
                                    vertical
                                    inverted
                                    basic
                                    padded
                                    color="orange"
                                    onClick={() => navigate('/comedy')}
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Header 
                                        size="large"
                                        as='h2'
                                        textAlign="center"
                                        inverted
                                    >
                                        Comedy
                                        <Header.Subheader>
                                            Click to watch comedy movies
                                        </Header.Subheader>
                                    </Header>
                                </Segment>
                            </Grid.Column>

                            <Grid.Column width={4}>
                                <Segment 
                                    raised
                                    vertical
                                    inverted
                                    basic
                                    padded
                                    color="orange"
                                    onClick={() => navigate('/horror')}
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Header 
                                        size="large"
                                        as='h2'
                                        textAlign="center"
                                        inverted
                                    >
                                        Horror 
                                        <Header.Subheader>
                                            Click to watch horror movies
                                        </Header.Subheader>
                                    </Header>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Segment 
                                    raised
                                    vertical
                                    inverted
                                    basic
                                    padded
                                    color="orange"
                                    onClick={() => navigate('/romance')}
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Header 
                                        size="large"
                                        as='h2'
                                        textAlign="center"
                                        inverted
                                    >
                                        Romance
                                        <Header.Subheader>
                                            Click to watch romantic movies
                                        </Header.Subheader>
                                    </Header>
                                </Segment>
                            </Grid.Column>

                            <Grid.Column width={4}>
                                <Segment 
                                    raised
                                    vertical
                                    inverted
                                    basic
                                    padded
                                    color="orange"
                                    onClick={() => navigate('/scifi')}
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Header 
                                        size="large"
                                        as='h2'
                                        textAlign="center"
                                        inverted
                                    >
                                        Sci-fi
                                        <Header.Subheader>
                                            Click to watch sci-fi movies
                                        </Header.Subheader>
                                    </Header>
                                </Segment>
                            </Grid.Column>

                            <Grid.Column width={4}>
                                <Segment 
                                    raised
                                    vertical
                                    inverted
                                    basic
                                    padded
                                    color="orange"
                                    onClick={() => navigate('/documentary')}
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Header 
                                        size="large"
                                        as='h2'
                                        textAlign="center"
                                        inverted
                                    >
                                        Documentary
                                        <Header.Subheader>
                                            Click to watch documentary movies
                                        </Header.Subheader>
                                    </Header>
                                </Segment>
                            </Grid.Column>

                            <Grid.Column width={4}>
                                <Segment 
                                    raised
                                    vertical
                                    inverted
                                    basic
                                    padded
                                    color="orange"
                                    onClick={() => navigate('/thrillers')}
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Header 
                                        size="large"
                                        as='h2'
                                        textAlign="center"
                                        inverted
                                    >
                                        Thrillers
                                        <Header.Subheader>
                                            Click to watch thriller movies
                                        </Header.Subheader>
                                    </Header>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Footer />
            </div>
        )
    }
}

export default AllCategories