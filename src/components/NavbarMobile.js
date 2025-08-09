import { Button, Dropdown, Menu } from "semantic-ui-react"

const NavbarMobile = () => {

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
                >
                    Sign In
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default NavbarMobile