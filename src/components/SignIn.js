import { Button, Form, Grid, Header, Message, Segment } from "semantic-ui-react"
import NavbarUser from "./NavbarUser"
import { Link, useNavigate } from "react-router-dom"
import Footer from "./Footer"
import { useEffect, useState } from "react"
import { useGetRegisteredUsersQuery } from "../features/api/apiSlice"
import getUsers from "../api"

const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [users, setUsers] = useState([])  

    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const [loading, setLoading] = useState(false)

    const handleEmail = e => setEmail(e.target.value)
    const handlePassword = e => setPassword(e.target.value)

    const navigate = useNavigate()

    //const {data: users, isSuccess, refetch} = useGetRegisteredUsersQuery()

    useEffect(() => {
        getallUsers()
    }, [])

    const getallUsers = () => {
        getUsers().get('/')
        .then(res => setUsers(res.data))
        .catch(console.log('An error has occured'))
    }


    const signin = () => {
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
                                    onChange={handleEmail}
                                    error={emailError}
                                    onClick={() => setEmailError(false)}
                                />
                                <Form.Input 
                                    placeholder='Password'
                                    fluid
                                    icon="lock"
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
                                    onClick={signin}
                                    loading={loading}
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
}

export default SignIn