import { Container, Grid, Header, List, Segment } from "semantic-ui-react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import MyList from "./MyList"
import DashboardNavbar from "./DashboardNavbar"
import DashboardNavbarMobile from "./DashboardNavbarMobile"

const Dashboard = ({mobile}) => {
        
            if(mobile){

                return(
                    <>
                        <DashboardNavbarMobile /> 
                        <Segment
                            vertical
                            inverted
                            style={{padding: mobile ? '20px 20px' : '50px 80px'}}
                        >
                                <Grid>
                                    <Grid.Column>
                                        <Segment
                                            vertical
                                            raised
                                        >
                                            <Header
                                                as='h2'
                                                inverted
                                                style={{
                                                    marginTop: 40
                                                }}
                                            >
                                                My List
                                                <Header.Subheader>
                                                    This space contains all your favorite movies, TV shows, e.t.c..
                                                </Header.Subheader>
                                            </Header>
                                            <MyList mobile />
                                        </Segment>
                                    </Grid.Column>
                                </Grid>
                        </Segment>
                        <Footer mobile />
                    </>
                )
            }else{
                return(
                    <>
                        <DashboardNavbar /> 
                        <Segment
                            vertical
                            inverted
                            style={{padding: mobile ? '20px 20px' : '50px 80px'}}
                        >
                                <Grid>
                                    <Grid.Column>
                                        <Segment
                                            vertical
                                            raised
                                        >
                                            <Header
                                                as='h2'
                                                inverted
                                            >
                                                My List
                                                <Header.Subheader>
                                                    This space contains all your favorite movies, TV shows, e.t.c..
                                                </Header.Subheader>
                                            </Header>
                                            <MyList />
                                        </Segment>
                                    </Grid.Column>
                                </Grid>
                        </Segment>
                        <Footer />
                    </>
                )
            }
            
   
}

export default Dashboard