import { Button, Container, Form, Grid, Header, Segment } from "semantic-ui-react";
import DashboardNavbar from "./DashboardNavbar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
import NavbarUser from "./NavbarUser";


const ContactUs = ({mobile}) => {

    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")  

    const handleFirstName = e => setFirstName(e.target.value)
    const handleEmail = e => setEmail(e.target.value)
    const handleMessage = e => setMessage(e.target.value)

    const [firstNameError, setFirstNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [messageError, setMessageError] = useState(false)

    const contactClick = () => {
        if(firstName === ''){
            setFirstNameError({content: 'Please enter your first name', pointing: 'below'})     
        }else if(email === ''){
            setEmailError({content: 'Please enter your email address', pointing: 'below'})
        }else if(message === ''){
            setMessageError({content: 'Please enter your message', pointing: 'below'})
        }
    }

    if(mobile){
        return(
            <>
                <NavbarUser 
                    link_name="Register" 
                    link_route="/register"
                />
                <Segment
                    vertical
                    inverted
                    style={{
                        paddingTop: '100px',
                        paddingLeft: '20px',
                        paddingRight: '20px'
                    }}
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
                                            error={firstNameError}
                                            onChange={handleFirstName}
                                            onClick={() => setFirstNameError(false)}
                                        />
                                        <Form.Input 
                                            placeholder='Email Address'
                                            fluid
                                            icon="mail"
                                            iconPosition="left"
                                            type="email"
                                            error={emailError}
                                            onChange={handleEmail}
                                            onClick={() => setEmailError(false)}
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
                                            onClick={contactClick}
                                            //loading={loading}
                                        >
                                            Submit
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
                    style={{
                        paddingTop: '100px'
                    }}
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
                                            error={firstNameError}
                                            onChange={handleFirstName}
                                            onClick={() => setFirstNameError(false)}
                                        />
                                        <Form.Input 
                                            placeholder='Email Address'
                                            fluid
                                            icon="mail"
                                            iconPosition="left"
                                            type="email"
                                            error={emailError}
                                            onChange={handleEmail}
                                            onClick={() => setEmailError(false)}
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
                                            onClick={contactClick}
                                            //loading={loading}
                                        >
                                            Submit
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

export default ContactUs;