import axios from "axios";

export default function getPopularMovies(){
    return(
        axios.create({
            baseURL: "http://localhost:8000/api/popularmovies/",
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            }
        })
    )
}

export function getPopularTvshow(){
    return(
        axios.create({
            baseURL: "http://localhost:8000/api/populartvshows/",
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            }
        })
    )
}