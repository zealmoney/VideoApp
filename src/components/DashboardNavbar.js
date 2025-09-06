import { Link, useNavigate } from "react-router-dom"
import { Button, Container, Dropdown, Icon, Menu, Search, Segment } from "semantic-ui-react"

const DashboardNavbar = () => {

    const navigate = useNavigate()

    const signoutClick = () => {
        localStorage.removeItem("email")
        localStorage.removeItem("firstname")
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

export default DashboardNavbar
