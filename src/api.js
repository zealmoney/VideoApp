import axios from "axios";

export default function getUsers(){
    return(
        axios.create({
            baseURL: "https://videoapp-backend-blond.vercel.app/api/registers/",
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            }
        })
    )
}

export function getVideos(){
    return(
        axios.create({
            baseURL: "https://videoapp-backend-blond.vercel.app/api/videos/",
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
            baseURL: "https://videoapp-backend-blond.vercel.app/api/populartvshows/",
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            }
        })
    )
}

export function getPopularMovies(){
    return(
        axios.create({
            baseURL: "https://videoapp-backend-blond.vercel.app/api/popularmovies/",
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            }
        })
    )
}

export function getActionMovies(){
    return(
        axios.create({
            baseURL: "https://videoapp-backend-blond.vercel.app/api/actions/",
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            }
        })
    )
}

export function getDramaMovies(){
    return(
        axios.create({
            baseURL: "https://videoapp-backend-blond.vercel.app/api/dramas/",
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            }
        })
    )
}

export function getComedy(){
    return(
        axios.create({
            baseURL: "https://videoapp-backend-blond.vercel.app/api/comedy/",
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            }
        })
    )
}

export function getHorror(){
    return(
        axios.create({
            baseURL: "https://videoapp-backend-blond.vercel.app/api/horrors/",
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            }
        })
    )
}

export function getRomance(){
    return(
        axios.create({
            baseURL: "https://videoapp-backend-blond.vercel.app/api/romance/",
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            }
        })
    )
}

export function getScifi(){
    return(
        axios.create({
            baseURL: "https://videoapp-backend-blond.vercel.app/api/scifi/",
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            }
        })
    )
}

export function getDocumentary(){
    return(
        axios.create({
            baseURL: "https://videoapp-backend-blond.vercel.app/api/documentary/",
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            }
        })
    )
}

export function getThrillers(){
    return(
        axios.create({
            baseURL: "https://videoapp-backend-blond.vercel.app/api/thrillers/",
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            }
        })
    )
}