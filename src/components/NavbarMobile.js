import { useNavigate } from "react-router-dom"
import { Button, Dropdown, Menu } from "semantic-ui-react"

const NavbarMobile = () => {

    const navigate = useNavigate()

    return(
        <div>
            <Menu
                inverted
                secondary
                pointing
            >
                <Menu.Item
                    as='a'
                    header
                    onClick={() => navigate('/')}
                >   
                        VIDEO APP 
                </Menu.Item>
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
                <Menu.Item
                    as='a'
                    header
                >
                    <Button
                        color="orange"
                        size="tiny"
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