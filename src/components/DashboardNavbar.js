import { Link, useNavigate } from "react-router-dom"
import { Button, Container, Dropdown, Icon, Menu, Search, Segment } from "semantic-ui-react"

const DashboardNavbar = () => {

    const navigate = useNavigate()

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
                    <Menu.Item
                        as='a'
                    >
                        Movies
                    </Menu.Item>
                    <Menu.Item
                        as='a'
                    >
                        TV Shows
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
                                simple
                                inline
                                floating
                                direction="left"
                            >
                                <Dropdown.Menu>
                                    <Dropdown.Item>Account Settings</Dropdown.Item>
                                    <Dropdown.Item>Signout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        
                    </Menu.Item>
            </Menu>
        </Segment>
    )
}

export default DashboardNavbar
