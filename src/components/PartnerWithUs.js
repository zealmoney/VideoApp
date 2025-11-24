import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import DashboardNavbar from "./DashboardNavbar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DashboardNavbarMobile from "./DashboardNavbarMobile";
import NavbarMobile from "./NavbarMobile";

const PartnerWithUs = ({mobile}) => {

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
                >
                    <Grid
                        textAlign="center"
                    >
                        <Grid.Column
                            style={{
                                maxWidth: 450
                            }}
                        >
                            <Header 
                                as='h2'
                                textAlign="center"
                                content='Partner With Us'
                                inverted
                            />
                            
                            <Form
                                size="large"
                            >
                                <Segment
                                    stacked
                                    vertical
                                >
                                    <Form.Input 
                                        placeholder='Company Name'
                                        fluid
                                        icon="user"
                                        iconPosition="left"
                                        type="text"
                                        error={""}
                                        onChange={""}
                                        onClick={""}
                                    />
                                    <Form.Input 
                                        placeholder='Business Email Address'
                                        fluid
                                        icon="mail"
                                        iconPosition="left"
                                        type="email"
                                        error={""}
                                        onChange={""}
                                        onClick={""}
                                    />
                                    <Form.TextArea 
                                        placeholder='Message'
                                        fluid
                                        type="text"
                                        error={""}
                                        onChange={""}
                                        onClick={""}
                                    />
                                    <Button
                                        fluid
                                        size="large"
                                        color="orange"
                                        onClick={""}
                                    >
                                        Sunmit
                                    </Button>
                                </Segment>
                            </Form>   
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
                >
                    <Grid
                        textAlign="center"
                        verticalAlign="middle"
                        style={{
                            height: '100vh'
                        }}
                    >
                        <Grid.Column
                            style={{
                                maxWidth: 450
                            }}
                        >
                            <Header 
                                as='h2'
                                textAlign="center"
                                content='Partner With Us'
                                inverted
                            />
                            
                            <Form
                                size="large"
                            >
                                <Segment
                                    stacked
                                    vertical
                                >
                                    <Form.Input 
                                        placeholder='Company Name'
                                        fluid
                                        icon="user"
                                        iconPosition="left"
                                        type="text"
                                        error={""}
                                        onChange={""}
                                        onClick={""}
                                    />
                                    <Form.Input 
                                        placeholder='Business Email Address'
                                        fluid
                                        icon="mail"
                                        iconPosition="left"
                                        type="email"
                                        error={""}
                                        onChange={""}
                                        onClick={""}
                                    />
                                    <Form.TextArea 
                                        placeholder='Message'
                                        fluid
                                        type="text"
                                        error={""}
                                        onChange={""}
                                        onClick={""}
                                    />
                                    <Button
                                        fluid
                                        size="large"
                                        color="orange"
                                        onClick={""}
                                    >
                                        Sunmit
                                    </Button>
                                </Segment>
                            </Form>   
                        </Grid.Column>
                    </Grid>
                </Segment>      
                <Footer />
            </>
        )
    }
}

export default PartnerWithUs;