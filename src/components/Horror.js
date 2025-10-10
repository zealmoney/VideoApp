import { Container, Grid, Header, List, Segment } from "semantic-ui-react"
import Footer from "./Footer"
import DashboardNavbar from "./DashboardNavbar"
import DashboardNavbarMobile from "./DashboardNavbarMobile"
import ActionList from "./ActionList"
import HorrorList from "./HorrorList"

const Horror = ({mobile}) => {
        
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
                                                Horror Movies
                                                <Header.Subheader>
                                                    Horrific and gory scenes that will get you at the edge of your seat...
                                                </Header.Subheader>
                                            </Header>
                                            <HorrorList mobile />
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
                                                Horror Movies
                                                <Header.Subheader>
                                                   Horrific and gory scenes that will get you at the edge of your seat...
                                                </Header.Subheader>
                                            </Header>
                                            <ActionList />
                                        </Segment>
                                    </Grid.Column>
                                </Grid>
                        </Segment>
                        <Footer />
                    </>
                )
            }
            
   
}

export default Horror