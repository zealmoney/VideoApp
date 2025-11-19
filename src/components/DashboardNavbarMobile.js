import { useNavigate } from "react-router-dom"
import { Dropdown, Icon, Menu } from "semantic-ui-react"

const DashboardNavbarMobile = () => {

    const navigate = useNavigate()

    const signoutClick = () => {
        localStorage.removeItem("email")
        localStorage.removeItem("firstname")
        navigate('/login')
    }

    return(

       <div>


            <Menu
                fixed="Top"
                inverted
                secondary
            >
                <Menu.Item
                    as='a'
                    header
                    position="left"
                    onClick={() => navigate('/')}
                >
                        VIDEO APP
                </Menu.Item>
                <Menu.Item>
                    <Dropdown
                        simple
                        item
                        text="Watch Movies"
                    >
                        <Dropdown.Menu>
                            <Dropdown.Item
                                onClick={() => navigate('/movies')}
                            >
                                Movies
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={() => navigate('/tvshow')}
                            >
                                TV Shows
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={() => navigate('/allcategories')}
                            >
                                All Categories
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
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
        </div>
    )
}

export default DashboardNavbarMobile
