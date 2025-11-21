import { Link, useNavigate } from "react-router-dom"
import { Container, Menu } from "semantic-ui-react"

const NavbarUser = ({link_name, link_route}) => {

    const navigate = useNavigate()

     return(
        <div>
            <Menu
                inverted
                pointing
            >
                <Container>
                    <Menu.Item
                        as='a'
                        header
                        onClick={() => navigate('/')}
                    >   
                            VIDEO APP  
                    </Menu.Item>
                    

                    <Menu.Item
                        as='a'
                        position='right'
                    >
                        <Link 
                            to={link_route}
                            style={{textDecoration: 'none'}}
                        >
                        {link_name}
                    </Link>
                    </Menu.Item>
                    
                </Container>
            </Menu>
        </div>
    )
}

export default NavbarUser