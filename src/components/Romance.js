import { Container, Grid, Header, List, Segment } from "semantic-ui-react"
import Footer from "./Footer"
import DashboardNavbar from "./DashboardNavbar"
import DashboardNavbarMobile from "./DashboardNavbarMobile"
import RomanceList from "./RomanceList"

const Romance = ({mobile}) => {
        
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
                                                Romance Movies
                                                <Header.Subheader>
                                                    Explore love and romantic scenes in this category
                                                </Header.Subheader>
                                            </Header>
                                            <RomanceList mobile />
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
                                                Romance Movies
                                                <Header.Subheader>
                                                    Explore love and romantic scenes in this category
                                                </Header.Subheader>
                                            </Header>
                                            <RomanceList />
                                        </Segment>
                                    </Grid.Column>
                                </Grid>
                        </Segment>
                        <Footer />
                    </>
                )
            }
            
   
}

export default Romance