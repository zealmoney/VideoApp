import { Header, Segment } from "semantic-ui-react"
import DashboardNavbarMobile from "./DashboardNavbarMobile"
import NavbarMobile from "./NavbarMobile"
import DashboardNavbar from "./DashboardNavbar"
import Navbar from "./Navbar"
import Footer from "./Footer"

const AboutUs = ({mobile}) => {

    if(mobile){
        return(
            <>
                {
                    localStorage.getItem("email") ?
                    <DashboardNavbarMobile /> :
                    <NavbarMobile />
                }
                <Segment 
                    vertical 
                    inverted
                    style={{
                        paddingTop: '100px',
                        paddingBottom: '50px',
                        paddingLeft: '20px',
                        paddingRight: '20px'
                    }}
                >
                    <Header 
                        as='h2' 
                        textAlign="center" 
                        content="About Us" 
                        size="large" 
                        style={{
                           fontFamily: "Inter",
                           fontStyle: "normal",
                           fontSize: '24px' 
                        }} 
                    />
                    <p
                        style={{
                           fontFamily: "Inter",
                           fontStyle: "normal",
                           fontSize: '16px',
                           lineSpacing: '5px', 
                        }} 
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.
                    </p>
                    <p
                        style={{
                           fontFamily: "Inter",
                           fontStyle: "normal",
                           fontSize: '16px',
                           lineSpacing: '5px' 
                        }} 
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.
                    </p>
                    <p
                        style={{
                           fontFamily: "Inter",
                           fontStyle: "normal",
                           fontSize: '16px',
                           lineSpacing: '5px'
                        }} 
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.
                    </p>
                </Segment>
                <Footer mobile />
            </>
        )
    }else{
        return(
            <Segment
                vertical
                inverted
            >
                {
                        localStorage.getItem("email") ?
                        <DashboardNavbar /> :
                        <Navbar />
                }
                <Segment
                    inverted
                    color="orange"
                    style={{
                        padding: '50px 80px',
                        margin: '100px 100px',
                        borderRadius: '15px'
                    }}
                >
                    <Header as='h2' textAlign="center" content="About Us" size="large" />
                    <p
                        style={{
                            fontFamily: "Inter",
                            fontWeight: 400,
                            fontStyle: "normal",
                            fontSize: '18px',
                            lineHeight: '26px'
                        }}
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.
                    </p>
                    <p
                        style={{
                            fontFamily: "Inter",
                            fontWeight: 400,
                            fontStyle: "normal",
                            fontSize: '18px',
                            lineHeight: '26px'
                        }}
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.
                    </p>
                    <p
                        style={{
                            fontFamily: "Inter",
                            fontWeight: 400,
                            fontStyle: "normal",
                            fontSize: '18px',
                            lineHeight: '26px'
                        }}
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.
                    </p>
                </Segment>
                <Footer />
            </Segment>
            
        )
    }
}

export default AboutUs