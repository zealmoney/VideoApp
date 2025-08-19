import { Link, useNavigate } from "react-router-dom"
import { Button, Container, Dropdown, Menu, Segment } from "semantic-ui-react"

const Navbar = () => {

    const navigate = useNavigate()

    return(
        <Segment 
            inverted 
            vertical
            style={{padding: '0px 50px'}}>
            <Menu
                inverted
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
                    <Menu.Item
                        as='a'
                        position="right"
                    >
                        <Button
                            color="orange"
                            onClick={() => navigate('/register') }
                        >
                            Register
                        </Button>
                    </Menu.Item>
                    <Menu.Item
                        as='a'
                        onClick={() => navigate('/signin')}
                    >
                        Sign In
                    </Menu.Item>
            </Menu>
        </Segment>
    )
}

export default Navbar