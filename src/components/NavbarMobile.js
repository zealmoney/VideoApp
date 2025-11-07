import { Link, useNavigate } from "react-router-dom"
import { Button, Dropdown, Menu } from "semantic-ui-react"

const NavbarMobile = () => {

    const navigate = useNavigate()

    return(
        <div>
            <Menu
                fixed="Top"
                inverted
            >
                <Menu.Item
                    as='a'
                    header
                >
                    <Link to={'/'}>
                        VIDEO APP
                    </Link>  
                </Menu.Item>
                <Menu.Item position="left">
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
                    </Dropdown.Menu>
                </Dropdown>
                </Menu.Item>
                <Menu.Item
                    as='a'
                    header
                    position="left"
                >
                    <Button
                        color="orange"
                        onClick={() => navigate('/register') }
                    >
                        Register
                    </Button>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default NavbarMobile