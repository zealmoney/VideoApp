import { Container, Menu } from "semantic-ui-react"

const NavbarUser = () => {

     return(
        <div>
            <Menu
                fixed="top"
                inverted
            >
                <Container>
                    <Menu.Item
                        as='a'
                        header
                    >
                        VIDEO APP
                    </Menu.Item>
                    

                    <Menu.Item
                        as='a'
                        position='right'
                    >
                        Login
                    </Menu.Item>
                    
                </Container>
            </Menu>
        </div>
    )
}

export default NavbarUser