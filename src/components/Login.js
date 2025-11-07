import { Button, Container, Form, FormInput, Grid, GridColumn, Header, Message, Segment } from "semantic-ui-react"
import Footer from "./Footer"
import NavbarUser from "./NavbarUser"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import getUsers from "../api"

const Login = ({mobile}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [users, setUsers] = useState([])  

    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const [loading, setLoading] = useState(false)

    const handleEmail = e => setEmail(e.target.value)
    const handlePassword = e => setPassword(e.target.value)

    const navigate = useNavigate()

    useEffect(() => {
        getallUsers()
    }, [])

    const getallUsers = () => {
        getUsers().get('/')
        .then(res => setUsers(res.data))
        .catch(console.log('An error has occured'))
    }


    const loginClick = () => {
        const user = users.filter(u => u.email === email && u.password === password)[0]
        if(email === ''){
            setEmailError({content: 'Email address is required', pointing: 'below'})
        }else if(password === ''){
            setPasswordError({content: 'Please enter your password', pointing: 'below'})
        }else if(user){
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                localStorage.setItem("email", email)
                localStorage.setItem("firstname", user.firstname)
                navigate("/dashboard")
            }, 3000)    
        }
    }

    return(
        <div>
             <NavbarUser 
                link_name="Register" 
                link_route="/register"
            />
            <Segment
                inverted
                vertical
            >
                <Container>
                <Grid
                    textAlign="center"
                >
                    <GridColumn style={{maxWidth: 450}}>
                        <Header 
                            inverted 
                            style={{
                                marginTop: mobile ? 60 : 180,
                                marginBottom: 20
                            }}
                        >
                            Sign In To Your Account
                        </Header>
                        <Form 
                            size="large"
                        >
                            <FormInput 
                                placeholder='Email Address'
                                icon='mail'
                                iconPosition="left"
                                type="email"
                                onChange={handleEmail}
                                error={emailError}
                                onClick={() => setEmailError(false)}
                            />
                            <FormInput 
                                placeholder='Password'
                                icon='lock'
                                iconPosition="left"
                                type="password"
                                onChange={handlePassword}
                                error={passwordError}
                                onClick={() => setPasswordError(false)}
                            />
                            <Button
                                fluid
                                size="large"
                                color="orange"
                                onClick={loginClick}
                                loading={loading}
                            >
                                Sign In
                            </Button>
                        </Form>
                        <Message
                            style={{
                                marginBottom: 70
                            }}
                        >
                            Don't have an account? &nbsp;
                            <Link to={'/register'}>Register</Link>
                        </Message>
                    </GridColumn>
                </Grid>
                </Container>
            </Segment>
            <Footer />
        </div>
    )
}

export default Login