import { Link, useNavigate } from "react-router-dom"
import { Button, Container, Dropdown, Menu, Segment } from "semantic-ui-react"

const Navbar = () => {

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
                        onClick={() => navigate('/movies')}
                    >
                        Movies
                    </Menu.Item>
                    <Menu.Item
                        as='a'
                        onClick={() => navigate('/tvshow')}
                    >
                        TV Shows
                    </Menu.Item>
                   
                    <Dropdown
                        className="links item"
                        text="Browse" 
                        pointing='left'
                    >
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <Dropdown text="Genres">
                                    <Dropdown.Menu>
                                        <Dropdown.Item
                                            onClick={() => navigate('/action')}
                                        >
                                            Action
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                             onClick={() => navigate('/drama')}
                                        >
                                            Drama
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                             onClick={() => navigate('/comedy')}
                                        >
                                            Comedy
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                             onClick={() => navigate('/horror')}
                                        >
                                            Horror
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                             onClick={() => navigate('/romance')}
                                        >
                                            Romance
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                             onClick={() => navigate('/scifi')}
                                        >
                                            Sci-fi
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                             onClick={() => navigate('/documentary')}
                                        >
                                            Documentary
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                             onClick={() => navigate('/thrillers')}
                                        >
                                            Thrillers
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={() => navigate('/allcategories')}
                            >
                                All Categories
                            </Dropdown.Item>
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