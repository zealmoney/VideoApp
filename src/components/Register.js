import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Grid, Header, Icon, Message, Modal, Segment } from "semantic-ui-react";
import Footer from "./Footer";
import NavbarUser from "./NavbarUser";
import { useReducer, useState } from "react";
import { useAddRegisterMutation } from "../features/api/apiSlice";

 const initialState = {
    open: false,
    size: undefined
 }

 function modalReducer(state, action){
    switch(action.type){
        case 'open':
            return {open: true, size: action.size}
        case 'close': 
            return {open: false}
        default:
            new Error('An error has occured')
    }
 }

const Register = () => {

    const [state, dispatch] = useReducer(modalReducer, initialState)
    const {open, size} = state

    const [firstname, setFirstname] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("")
    const [password, setPassword] = useState("")

    const [firstnameError, setFirstnameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [genderError, setGenderError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const handleFirstname = e => setFirstname(e.target.value)
    const handleEmail = e => setEmail(e.target.value)
    const handleGender = e => setGender(e.target.value)
    const handlePassword = e => setPassword(e.target.value)

    const [loading, setLoading] = useState(false)

    const [msg, setMsg] = useState(false)

    const navigate = useNavigate()

    const [addRegister, {isLoading}] = useAddRegisterMutation()
    const saveRegister = [firstname, email, gender, password].every(Boolean) && !isLoading

    const registerClick = async () => {
        if(firstname === ''){
            setFirstnameError({content: 'Please enter your first name', pointing: 'below'})
        }else if(email === ''){
            setEmailError({content: 'Please enter your email address', pointing: 'below'})
        }else if(gender === ''){
            setGenderError({content: 'Please enter your gender', pointing: 'below'})
        }else if(password === ''){
            setPasswordError({content: 'Please enter your password', pointing: 'below'})
        }else{
            if(saveRegister){
                setLoading(true)
                
                    await addRegister({firstname, email, gender, password}).unwrap()
                    setFirstname("")
                    setEmail("")
                    setGender("")
                    setPassword("")
                    setLoading(false)
                    //dispatch({type: 'open', size: 'mini'})
                    //alert("Register was successful")
                    setMsg(true)
                    //navigate('/signin')
            }
        }
    }

    return(
        <>
            <NavbarUser 
                link_name="Sign In" 
                link_route="/login"
            />
            <Segment
                vertical
                inverted
            >
                <Grid
                    textAlign="center"
                    //verticalAlign="middle"
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
                            style={{
                                marginTop: 180,
                                marginBottom: 20
                            }}
                        />
                        {
                            msg ? <Message color="red">
                                Registration Successful <br/>
                                Please <Link to={'/signin'}>Sign In</Link> to continue
                            </Message> : ""
                        }
                        
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
                                    error={firstnameError}
                                    onChange={handleFirstname}
                                    onClick={() => setFirstnameError(false)}
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
                                <Form.Input 
                                    placeholder='Gender'
                                    fluid
                                    icon="male"
                                    iconPosition="left"
                                    type="text"
                                    error={genderError}
                                    onChange={handleGender}
                                    onClick={() => setGenderError(false)}
                                />
                                <Form.Input 
                                    placeholder='Password'
                                    fluid
                                    icon="lock"
                                    iconPosition="left"
                                    type="password"
                                    error={passwordError}
                                    onChange={handlePassword}
                                    onClick={() => setPasswordError(false)}
                                />
                                <Button
                                    fluid
                                    size="large"
                                    color="orange"
                                    onClick={registerClick}
                                    loading={loading}
                                >
                                    Register
                                </Button>
                            </Segment>
                        </Form>
                        <Message
                            style={{
                                marginBottom: 70
                            }}
                        >
                            Already have an account? &nbsp; 
                            <Link to={'/signin'}>Sign In</Link>
                        </Message>
                        
                    </Grid.Column>
                </Grid>
            </Segment>      
            <Footer />
            <Modal
                open={open}
                size={size}
                onClose={() => dispatch({type: 'close'})}
            >
                <Modal.Content style={{textAlign: 'center'}}>
                    <Icon name="check circle outline" color="green" />
                    <Header 
                        content='Success!'
                        size="huge"
                    />
                        Your registration is successful
                </Modal.Content>

            </Modal>
        </>
    )
}

export default Register