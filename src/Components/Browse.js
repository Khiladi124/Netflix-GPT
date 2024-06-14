import Header from "./Header";
import { useEffect } from "react";
import {options} from "../utils/moviesAPI";
const Browse=()=>{
    const fetch=require('node-fetch');
    const getNowPlayingMovies= async ()=>{
        const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
        const data=await fetch(url,options);
        const json= await data.json();
        console.log(json);
}
    useEffect(()=>{
        getNowPlayingMovies();
    },[]);
    return (
        <div className=" h-4/5 bg-black">
            <Header/>
            <div>

            </div>
        </div>
    );
};
export default Browse;