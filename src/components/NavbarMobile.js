import { useNavigate } from "react-router-dom"
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
                    VIDEO APP
                </Menu.Item>
                <Dropdown
                    simple
                    item
                    text="Watch Movies"
                >
                    <Dropdown.Menu>
                        <Dropdown.Item>Movies</Dropdown.Item>
                        <Dropdown.Item>TV Shows</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Menu.Item
                    as='a'
                    header
                    position="right"
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