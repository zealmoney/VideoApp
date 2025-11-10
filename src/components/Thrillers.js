import { Grid, Header, Segment } from "semantic-ui-react"
import Footer from "./Footer"
import DashboardNavbar from "./DashboardNavbar"
import DashboardNavbarMobile from "./DashboardNavbarMobile"
import ThrillerList from "./ThrillerList"

const Thrillers = ({mobile}) => {
        
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
                                                Thrillers
                                                <Header.Subheader>
                                                    Action mixed with suspense that will keep you glued to your seat
                                                </Header.Subheader>
                                            </Header>
                                            <ThrillerList mobile />
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
                                                Thrillers
                                                <Header.Subheader>
                                                    Action mixed with suspense that will keep you glued to your seat
                                                </Header.Subheader>
                                            </Header>
                                            <ThrillerList />
                                        </Segment>
                                    </Grid.Column>
                                </Grid>
                        </Segment>
                        <Footer />
                    </>
                )
            }
            
   
}

export default Thrillers