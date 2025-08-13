import { Button, Form, Grid, Header, Message, Segment } from "semantic-ui-react"
import NavbarUser from "./NavbarUser"
import { Link } from "react-router-dom"
import Footer from "./Footer"

const SignIn = () => (

    <>
        <NavbarUser 
            link_name="Register" 
            link_route="/register"
        />
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
                        as='h3'
                        textAlign="center"
                        content='Sign In To Your Account'
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
                                placeholder='Email Address'
                                fluid
                                icon="mail"
                                iconPosition="left"
                                type="email"
                            />
                            <Form.Input 
                                placeholder='Password'
                                fluid
                                icon="lock"
                                iconPosition="left"
                                type="password"
                            />
                            <Button
                                fluid
                                size="large"
                                color="orange"
                            >
                                Sign In
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        Don't have an account? &nbsp; 
                        <Link to={'/register'}>Register</Link>
                    </Message>
                    
                </Grid.Column>
            </Grid>
        </Segment>
        <Footer />
    </>
)

export default SignIn