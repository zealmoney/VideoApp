import _ from "lodash"
import { useCallback, useEffect, useReducer, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button, Container, Dropdown, Icon, Menu, Search, Segment } from "semantic-ui-react"
import { useGetPopularMoviesQuery, useGetVideosQuery } from "../features/api/apiSlice"
import getPopularMovies, { getPopularTvshow } from "../api"

const intialState = {
        loading: false,
        results: [],
        value: ''
    }

    function searchReducer(state, action){
        switch(action.type){
            case 'CLEAN_QUERY': 
                return intialState
            case 'START_SEARCH':
                return {...state, loading: true, value: action.query}
            case 'FINISH_SEARCH':
                return {...state, loading: false, results: action.results}
            case 'UPDATE_SELECTION':
                return {...state, value: action.selection}

            default:
             new Error('An error has occured')
        }
    }

const DashboardNavbar = () => {

    let source = []

    {/*useEffect(() => {
        getAllVideos()
    }, [])

    const [source, setVideos] = useState([])

    const getAllVideos = () => {
        getPopularMovies().get("/")
         .then((res) => setVideos(res.data))
          .catch(console.log('An error has occured'))
    }*/}

    const {data: videos, isSuccess} = useGetVideosQuery()
    if(isSuccess){
        videos.map((p) => {
            source.push({
                'id': p.id,
                'title': p.title,
                'description': p.description,
                'image': p.image,
                'videoUrl': p.videoUrl
            })
        })
    }
    
        const [state, dispatch] = useReducer(searchReducer, intialState)
        const {loading, results, value} = state

        const timeoutRef = useRef()

        const handleSearchChange = useCallback((e, data) => {
            console.log(source)
            clearTimeout(timeoutRef.current)
            dispatch({type: 'START_SEARCH', query: data.value})

            timeoutRef.current = setTimeout(() => {
                if(data.value.length === 0){
                    dispatch({type: 'CLEAN_QUERY'})
                    return
                }

                const re = new RegExp(_.escapeRegExp(data.value), 'i') 
                const isMatch = (result) => re.test(result.title)

                dispatch({
                    type: 'FINISH_SEARCH',
                    results: _.filter(source, isMatch)
                })
            }, 300)
        }, [])

    const navigate = useNavigate()

    const signoutClick = () => {
        localStorage.removeItem("email")
        localStorage.removeItem("firstname")
        navigate('/login')
    }

    return(
        <Segment 
            inverted 
            vertical
            style={{padding: '0px 80px'}}>
            <Menu
                inverted
                size="huge"
            >
                
                    <Menu.Item
                        as='a'
                        header
                        onClick={() => navigate('/')}
                    >   
                            VIDEO APP 
                    </Menu.Item>
                    <Menu.Item
                        as='a'
                        onClick={() => navigate('/movies')}
                    >
                        Movies
                    </Menu.Item>
                    <Menu.Item
                        as='a'
                        onClick={() => navigate('/tvshow')}
                    >
                        TV Shows
                    </Menu.Item>
                   
                    <Dropdown
                        className="links item"
                        text="Browse" 
                        pointing='left' 
                    >
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <Dropdown text="Genres">
                                    <Dropdown.Menu>
                                        <Dropdown.Item
                                            onClick={() => navigate('/action')}
                                        >
                                            Action
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                             onClick={() => navigate('/drama')}
                                        >
                                            Drama
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                             onClick={() => navigate('/comedy')}
                                        >
                                            Comedy
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                             onClick={() => navigate('/horror')}
                                        >
                                            Horror
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                             onClick={() => navigate('/romance')}
                                        >
                                            Romance
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                             onClick={() => navigate('/scifi')}
                                        >
                                            Sci-fi
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                             onClick={() => navigate('/documentary')}
                                        >
                                            Documentary
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                             onClick={() => navigate('/thrillers')}
                                        >
                                            Thrillers
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={() => navigate('/allcategories')}
                            >
                                All Categories
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item position="right">
                        <Search 
                            loading={loading}
                            placeholder='Search Movies'
                            onResultSelect = {(e, data) =>{
                                navigate('/play/' + data.result.id)
                            }}
                            onSearchChange={handleSearchChange}
                            results={results}
                            value={value}
                        />
                    </Menu.Item>
                    <Menu.Item>
                        
                            <Dropdown 
                                icon='user outline'
                                floating
                                direction="left"
                                labeled
                                className='icon'
                            >
                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        onClick={() => navigate('/accountsettings')}
                                    >
                                        <Icon name='setting' />
                                        Account Settings
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        onClick={signoutClick}
                                    >
                                        <Icon name="sign-out" />
                                        Signout
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        
                    </Menu.Item>
            </Menu>
        </Segment>
    )
}

export default DashboardNavbar
