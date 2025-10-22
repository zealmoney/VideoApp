import Carousel from "react-multi-carousel"
import { useGetMymovieListQuery } from "../features/api/apiSlice"
import { Header, Image, Segment } from "semantic-ui-react"


const MyList = ({mobile}) => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 2000, min: 1500 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 1500, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        },
    }

    const {data: mylists, isSuccess} = useGetMymovieListQuery()
    let mylist = []
    let mylistdetails
    if(isSuccess){
        mylist = mylists.filter(item => item.email === localStorage.getItem("email"))
        mylistdetails = <Carousel
                            responsive={responsive}
                        >
                            {
                                mylist.map((m) => {
                                    return(
                                        <div key={m.id}>
                                            <Image 
                                                centered 
                                                style={{width: 270, height: 400}} 
                                                src={m.image} 
                                            />                
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
    }

    return(
        <>
            <Segment
                vertical
                inverted
                style={{
                    padding: mobile ? '20px 0px' : '50px 80px'
                }}
            >
                {mylistdetails ? mylistdetails :  <Header 
                                                    as="h2"  
                                                    textAlign="center" 
                                                    content="You have not added any movie to your list yet"
                                                    />
                }
            </Segment>
        </>
    )
}

export default MyList