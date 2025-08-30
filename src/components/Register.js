import { Link } from "react-router-dom";
import { Button, Form, Grid, Header, Message, Segment } from "semantic-ui-react";
import Footer from "./Footer";
import NavbarUser from "./NavbarUser";

const Register = () => (
    <>
        <NavbarUser 
            link_name="Sign In" 
            link_route="/signin"
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
                        content='Create An Account'
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
                            />
                            <Form.Input 
                                placeholder='Email Address'
                                fluid
                                icon="mail"
                                iconPosition="left"
                                type="email"
                            />
                            <Form.Input 
                                placeholder='Gender'
                                fluid
                                icon="male"
                                iconPosition="left"
                                type="text"
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
                                Register
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        Already have an account? &nbsp; 
                        <Link to={'/signin'}>Sign In</Link>
                    </Message>
                    
                </Grid.Column>
            </Grid>
        </Segment>
        <Footer />
    </>
)

export default Register