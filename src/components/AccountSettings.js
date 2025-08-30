import { Dropdown, Form, Grid, Header, Image, Segment } from "semantic-ui-react"
import DashboardNavbar from "./DashboardNavbar"
import Footer from "./Footer"

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
                            <Segment stacked inverted>
                            <Form.Input 
                                value={localStorage.getItem('firstname')}
                                inverted
                                style={{
                                    height: 50,
                                    borderRadius: 10
                                }}
                            />
                            </Segment>
                            <Segment stacked inverted>
                            <Form.Input 
                                value={localStorage.getItem('email')}
                                inverted
                                style={{
                                    height: 50,
                                    borderRadius: 10
                                }}
                            />
                            </Segment>
                            <Segment stacked inverted>
                            <Form.Input 
                                value='Male'
                                inverted
                                style={{
                                    height: 50,
                                    borderRadius: 10
                                }}
                            />
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