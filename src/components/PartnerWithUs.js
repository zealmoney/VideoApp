import { Button, Container, Form, Grid, Header, Segment } from "semantic-ui-react";
import DashboardNavbar from "./DashboardNavbar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DashboardNavbarMobile from "./DashboardNavbarMobile";
import NavbarMobile from "./NavbarMobile";
import { useState } from "react";

const PartnerWithUs = ({mobile}) => {

    const [companyName, setCompanyName] = useState("")
    const [businessEmail, setBusinessEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleCompanyName = e => setCompanyName(e.target.value)
    const handleBusinessEmail = e => setBusinessEmail(e.target.value)
    const handleMessage = e => setMessage(e.target.value)

    const [companyNameError, setCompanyNameError] = useState(false)
    const [businessEmailError, setBusinessEmailError] = useState(false)
    const [messageError, setMessageError] = useState(false)

    const submitClick = () => {
        if(companyName === ''){
            setCompanyNameError({content: 'Please enter your company name', pointing: 'below'})     
        }else if(businessEmail === ''){
            setBusinessEmailError({content: 'Please enter your business email address', pointing: 'below'})
        }else if(message === ''){
            setMessageError({content: 'Please enter your message', pointing: 'below'})
        }
    }

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
                    <Container>
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
                                            error={companyNameError}
                                            onChange={handleCompanyName}
                                            onClick={() => setCompanyNameError(false)}
                                        />
                                        <Form.Input 
                                            placeholder='Business Email Address'
                                            fluid
                                            icon="mail"
                                            iconPosition="left"
                                            type="email"
                                            error={businessEmailError}
                                            onChange={handleBusinessEmail}
                                            onClick={() => setBusinessEmailError(false)}
                                        />
                                        <Form.TextArea 
                                            placeholder='Message'
                                            fluid
                                            type="text"
                                            error={messageError}
                                            onChange={handleMessage}
                                            onClick={() => setMessageError(false)}
                                        />
                                        <Button
                                            fluid
                                            size="large"
                                            color="orange"
                                            onClick={submitClick}
                                        >
                                            Sunmit
                                        </Button>
                                    </Segment>
                                </Form>   
                            </Grid.Column>
                        </Grid>
                    </Container>
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