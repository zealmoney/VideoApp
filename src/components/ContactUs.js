import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import DashboardNavbar from "./DashboardNavbar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactUs = () => {

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
                            content='Contact Us'
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
                                    placeholder='First Name'
                                    fluid
                                    icon="user"
                                    iconPosition="left"
                                    type="text"
                                    error={""}
                                    onChange={""}
                                    onClick={""}
                                />
                                <Form.Input 
                                    placeholder='Email Address'
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
                                    //loading={loading}
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

export default ContactUs;