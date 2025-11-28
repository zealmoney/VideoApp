import { Grid, GridColumn, GridRow, Header, Segment } from "semantic-ui-react"
import ActionList from "./ActionList"
import DashboardNavbar from "./DashboardNavbar"
import DashboardNavbarMobile from "./DashboardNavbarMobile"
import DramaList from "./DramaList"
import Footer from "./Footer"
import Navbar from "./Navbar"
import NavbarMobile from "./NavbarMobile"
import ComedyList from "./ComedyList"
import HorrorList from "./HorrorList"
import RomanceList from "./RomanceList"
import ScifiList from "./ScifiList"
import DocumentaryList from "./DocumentaryList"
import ThrillerList from "./ThrillerList"

const Movies = ({mobile}) => {

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
                    <GridRow>
                        <GridColumn>
                            <Segment vertical inverted>
                                <Header
                                    as='h2'
                                    inverted
                                    style={{
                                        marginTop: 40
                                    }}
                                >
                                    Action
                                </Header>
                                <ActionList mobile />
                            </Segment>
                        </GridColumn>
                    </GridRow>

                    <GridRow>
                        <GridColumn>
                            <Segment vertical inverted>
                                <Header
                                    as='h2'
                                    inverted
                                    style={{
                                        marginTop: 40
                                    }}
                                >
                                    Drama
                                </Header>
                                <DramaList mobile />
                            </Segment>
                        </GridColumn>
                    </GridRow>

                    <GridRow>
                        <GridColumn>
                            <Segment vertical inverted>
                                <Header
                                    as='h2'
                                    inverted
                                    style={{
                                        marginTop: 40
                                    }}
                                >
                                    Comedy
                                </Header>
                                <ComedyList mobile />
                            </Segment>
                        </GridColumn>
                    </GridRow>

                    <GridRow>
                        <GridColumn>
                            <Segment vertical inverted>
                                <Header
                                    as='h2'
                                    inverted
                                    style={{
                                        marginTop: 40
                                    }}
                                >
                                    Horror
                                </Header>
                                <HorrorList mobile />
                            </Segment>
                        </GridColumn>
                    </GridRow>

                    <GridRow>
                        <GridColumn>
                            <Segment vertical inverted>
                                <Header
                                    as='h2'
                                    inverted
                                    style={{
                                        marginTop: 40
                                    }}
                                >
                                    Romance
                                </Header>
                                <RomanceList mobile />
                            </Segment>
                        </GridColumn>
                    </GridRow>

                    <GridRow>
                        <GridColumn>
                            <Segment vertical inverted>
                                <Header
                                    as='h2'
                                    inverted
                                    style={{
                                        marginTop: 40
                                    }}
                                >
                                    Sci-fi
                                </Header>
                                <ScifiList mobile />
                            </Segment>
                        </GridColumn>
                    </GridRow>

                    <GridRow>
                        <GridColumn>
                            <Segment vertical inverted>
                                <Header
                                    as='h2'
                                    inverted
                                    style={{
                                        marginTop: 40
                                    }}
                                >
                                    Documentary
                                </Header>
                                <DocumentaryList mobile />
                            </Segment>
                        </GridColumn>
                    </GridRow>

                    <GridRow>
                        <GridColumn>
                            <Segment vertical inverted>
                                <Header
                                    as='h2'
                                    inverted
                                    style={{
                                        marginTop: 40
                                    }}
                                >
                                    Thrillers
                                </Header>
                                <ThrillerList mobile />
                            </Segment>
                        </GridColumn>
                    </GridRow>
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
                    style={{padding: '50px 80px'}}
                >
                <Grid>
                    <GridRow>
                        <GridColumn>
                            <Segment vertical inverted>
                                <Header
                                    as='h2'
                                    inverted
                                    style={{
                                        marginTop: 40
                                    }}
                                >
                                    Action
                                </Header>
                                <ActionList />
                            </Segment>
                        </GridColumn>
                    </GridRow>

                    <GridRow>
                        <GridColumn>
                            <Segment vertical inverted>
                                <Header
                                    as='h2'
                                    inverted
                                    style={{
                                        marginTop: 40
                                    }}
                                >
                                    Drama
                                </Header>
                                <DramaList />
                            </Segment>
                        </GridColumn>
                    </GridRow>

                    <GridRow>
                        <GridColumn>
                            <Segment vertical inverted>
                                <Header
                                    as='h2'
                                    inverted
                                    style={{
                                        marginTop: 40
                                    }}
                                >
                                    Comedy
                                </Header>
                                <ComedyList />
                            </Segment>
                        </GridColumn>
                    </GridRow>

                    <GridRow>
                        <GridColumn>
                            <Segment vertical inverted>
                                <Header
                                    as='h2'
                                    inverted
                                    style={{
                                        marginTop: 40
                                    }}
                                >
                                    Horror
                                </Header>
                                <HorrorList />
                            </Segment>
                        </GridColumn>
                    </GridRow>

                    <GridRow>
                        <GridColumn>
                            <Segment vertical inverted>
                                <Header
                                    as='h2'
                                    inverted
                                    style={{
                                        marginTop: 40
                                    }}
                                >
                                    Romance
                                </Header>
                                <RomanceList />
                            </Segment>
                        </GridColumn>
                    </GridRow>

                    <GridRow>
                        <GridColumn>
                            <Segment vertical inverted>
                                <Header
                                    as='h2'
                                    inverted
                                    style={{
                                        marginTop: 40
                                    }}
                                >
                                    Sci-fi
                                </Header>
                                <ScifiList />
                            </Segment>
                        </GridColumn>
                    </GridRow>

                    <GridRow>
                        <GridColumn>
                            <Segment vertical inverted>
                                <Header
                                    as='h2'
                                    inverted
                                    style={{
                                        marginTop: 40
                                    }}
                                >
                                    Documentary
                                </Header>
                                <DocumentaryList />
                            </Segment>
                        </GridColumn>
                    </GridRow>

                    <GridRow>
                        <GridColumn>
                            <Segment vertical inverted>
                                <Header
                                    as='h2'
                                    inverted
                                    style={{
                                        marginTop: 40
                                    }}
                                >
                                    Thrillers
                                </Header>
                                <ThrillerList />
                            </Segment>
                        </GridColumn>
                    </GridRow>
                </Grid>
                </Segment>
                <Footer />
            </> 
        )       
    }
}

export default Movies