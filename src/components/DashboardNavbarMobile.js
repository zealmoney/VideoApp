import { Link, useNavigate } from "react-router-dom"
import { Button, Container, Dropdown, Icon, Menu, Search, Segment } from "semantic-ui-react"

const DashboardNavbarMobile = () => {

    const navigate = useNavigate()

    const signoutClick = () => {
        navigate('/signin')
    }

    return(
        <Segment 
            inverted 
            vertical
            style={{padding: '0px 80px'}}>
            <Menu
                inverted
                size="huge"
            >
                
                    <Menu.Item
                        as='a'
                        header
                        onClick={() => navigate('/')}
                    >   
                            VIDEO APP 
                    </Menu.Item>
                   
                    <Dropdown
                        item
                        simple
                        text="Browse" 
                    >
                        <Dropdown.Menu>
                            <Dropdown.Item>Genres</Dropdown.Item>
                            <Dropdown.Item>All Categories</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item position="right">
                        <Search />
                    </Menu.Item>
                    <Menu.Item>
                        
                            <Dropdown 
                                icon='user outline'
                                floating
                                direction="left"
                                labeled
                                className='icon'
                            >
                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        onClick={() => navigate('/accountsettings')}
                                    >
                                        <Icon name='setting' />
                                        Account Settings
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        onClick={signoutClick}
                                    >
                                        <Icon name="sign-out" />
                                        Signout
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        
                    </Menu.Item>
            </Menu>
        </Segment>
    )
}

export default DashboardNavbarMobile
