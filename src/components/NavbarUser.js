import { useState } from "react"
import { Link } from "react-router-dom"
import { Container, Menu } from "semantic-ui-react"

const NavbarUser = ({link_name, link_route}) => {

     return(
        <div>
            <Menu
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
                        <Link to={link_route}>{link_name}</Link>
                    </Menu.Item>
                    
                </Container>
            </Menu>
        </div>
    )
}

export default NavbarUser