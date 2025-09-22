import { Link, useNavigate } from "react-router-dom"
import { Button, Container, Dropdown, Icon, Menu, Search, Segment } from "semantic-ui-react"

const DashboardNavbarMobile = () => {

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
                <Menu.Item position="right"></Menu.Item>
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
            </Menu>
        </div>
    )
}

export default DashboardNavbarMobile
