import { Grid, Header, Segment } from "semantic-ui-react"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import getUsers from "../api"

const SignIn = ({mobile}) => {

    //const [email, setEmail] = useState('')
    //const [password, setPassword] = useState('')

    const [users, setUsers] = useState([])  

    //const [emailError, setEmailError] = useState(false)
    //const [passwordError, setPasswordError] = useState(false)

    //const [loading, setLoading] = useState(false)

    //const handleEmail = e => setEmail(e.target.value)
    //const handlePassword = e => setPassword(e.target.value)

    const navigate = useNavigate()

    //const {data: users, isSuccess, refetch} = useGetRegisteredUsersQuery()

    useEffect(() => {
        getallUsers()
    }, [])

    const getallUsers = () => {
        getUsers().get('/')
        .then(res => setUsers(res.data))
        .catch(console.log('An error has occured'))
    }


    {/*const signinClick = () => {
        const user = users.filter(u => u.email === email && u.password === password)[0]
        if(email === ''){
            setEmailError({content: 'Email address is required', pointing: 'below'})
        }else if(password === ''){
            setPasswordError({content: 'Please enter your password', pointing: 'below'})
        }else if(user){
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                localStorage.setItem("email", email)
                localStorage.setItem("firstname", user.firstname)
                navigate("/dashboard")
            }, 3000)    
        }
    }*/}

    return(
        <div>
            
            <Segment
                style={{padding: '100px'}}
            >
                <Grid
                    textAlign="center"
                    verticalAlign="middle"
                    style={{
                        //height: '100vh'
                    }} 
                >
                    <Grid.Column
                        style={{
                            maxWidth: 450
                        }}
                    >
                        <p>
                            Sign In To Your Account
                        </p>
                        <Header 
                            inverted
                            as="h3"
                            textAlign="center"
                            content="Sign In To Your Account"
                        />
                    </Grid.Column>
                </Grid>
            </Segment> 
            
        </div>
    )
}

export default SignIn