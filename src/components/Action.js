import { Grid, Header, Segment } from "semantic-ui-react"
import Footer from "./Footer"
import DashboardNavbar from "./DashboardNavbar"
import DashboardNavbarMobile from "./DashboardNavbarMobile"
import ActionList from "./ActionList"
import NavbarMobile from "./NavbarMobile"

const Action = ({mobile}) => {
        
            if(mobile){

                return(
                    <>
                        {
                            localStorage.getItem("email") ?
                            <DashboardNavbarMobile /> :
                            <NavbarMobile />
                        } 
                        <Segment
                            vertical
                            inverted
                            style={{padding: '20px 20px'}}
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
                                                Action Movies
                                                <Header.Subheader>
                                                    This space contains all your favorite movies, TV shows, e.t.c..
                                                </Header.Subheader>
                                            </Header>
                                            <ActionList mobile />
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
                            style={{padding: '50px 80px'}}
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
                                                Action Movies
                                                <Header.Subheader>
                                                    This space contains all your favorite movies, TV shows, e.t.c..
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

export default Action