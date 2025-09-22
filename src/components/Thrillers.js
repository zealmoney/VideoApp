import { Container, Divider, Grid, Header, List, Segment } from "semantic-ui-react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import MyList from "./MyList"
import DashboardNavbar from "./DashboardNavbar"
import DashboardNavbarMobile from "./DashboardNavbarMobile"
import NavbarMobile from "./NavbarMobile"

const Thrillers = ({mobile}) => {
        
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
                                                    marginTop: 40,
                                                }}
                                            >
                                                Thrillers
                                                <Header.Subheader>
                                                    Action mixed with suspense that will keep you glued to your seat
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
                        {
                            localStorage.getItem("email") ?
                            <DashboardNavbar /> :
                            <Navbar />
                        }
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
                                                    fontSize: 40
                                                }}
                                            >
                                                Thrillers
                                                <Header.Subheader>
                                                    Action mixed with suspense that will keep you glued to your seat
                                                </Header.Subheader>
                                            </Header>
                                            <Divider />
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

export default Thrillers
