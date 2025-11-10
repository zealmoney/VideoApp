import { Grid, Header, Segment } from "semantic-ui-react"
import Footer from "./Footer"
import DashboardNavbar from "./DashboardNavbar"
import DashboardNavbarMobile from "./DashboardNavbarMobile"
import ActionList from "./ActionList"

const Action = ({mobile}) => {
        
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