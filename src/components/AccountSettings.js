import { Button, Dropdown, Form, Grid, Header, Image, Message, Segment } from "semantic-ui-react"
import DashboardNavbar from "./DashboardNavbar"
import Footer from "./Footer"
import { useState } from "react"

 const Gender = [
    {
        key: 1,
        text: 'Male',
        value: 'Male'     
    },
    {
        key: 2,
        text: 'Female',
        value: 'Female'     
    },
 ]


const AccountSettings = ({mobile}) => {

    const [firstname, setFirstname] = useState(localStorage.getItem("firstname"))
    const [email, setEmail] = useState(localStorage.getItem("email"))
    const [gender, setGender] = useState(localStorage.getItem("gender"))

    const [firstnameError, setFirstnameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [genderError, setGenderError] = useState(false)

    const handleFirstname = e => setFirstname(e.target.value)
    const handleEmail = e => setEmail(e.target.value)
    const handleGender = e => setGender(e.target.value)

    const [msg, setMsg] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const saveClick = () => {
        if(firstname === ''){
            setErrorMessage("Please enter a valid first name")
            setMsg(true)
        }else if(email === ''){
            setErrorMessage("Please enter your email address")
            setMsg(true)
        }
    }

    return(
        <>
            <DashboardNavbar />
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
                        style={{maxWidth: 450}}
                    >
                        <Header
                            as='h2'
                            inverted
                            style={{
                                fontSize: '2em'
                            }}
                        >
                            Account Settings
                            <Header.Subheader>
                                Manage your account information
                            </Header.Subheader>
                        </Header>
                        <Form
                            size="huge"
                        >
                            <Segment inverted>
                                {
                                    msg ?
                                    <Message negative>
                                        <Message.Content>{errorMessage}</Message.Content>
                                    </Message>: ""
                                }
                            </Segment>
                            <Segment stacked inverted>
                            <Form.Input 
                                value={firstname}
                                inverted
                                style={{
                                    height: 50,
                                    borderRadius: 10
                                }}
                                error={firstnameError}
                                onChange={handleFirstname}
                                onClick={() => setMsg(false)}
                            />
                            </Segment>
                            <Segment stacked inverted>
                            <Form.Input 
                                value={email}
                                inverted
                                style={{
                                    height: 50,
                                    borderRadius: 10
                                }}
                                error={emailError}
                                onChange={handleEmail}
                                onClick={() => setMsg(false)}
                            />
                            </Segment>
                            <Segment stacked inverted>
                            <Form.Input 
                                value="male"
                                inverted
                                style={{
                                    height: 50,
                                    borderRadius: 10
                                }}
                                error={genderError}
                                onChange={handleGender}
                                onClick={() => setGenderError(false)}
                            />
                            </Segment>
                            <Segment stacked inverted>
                            <Button 
                                fluid 
                                color="orange"
                                onClick={saveClick}
                                style={{
                                    height: 50,
                                    borderRadius: 10
                                }}
                            >
                                Save
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

export default AccountSettings