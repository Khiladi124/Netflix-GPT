import { useEffect } from "react";
import {options} from "../utils/moviesAPI";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addNowPlayingMovies } from "./moviesSlice";
const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
    const nowPlayingMovies=useSelector((store)=>store.movies?.nowPlayingMovies);
    console.log(nowPlayingMovies);

    /**
     * Fetches and adds now playing movies to the state.
     * A promise that resolves when the movies are added to the state.
     */
    
    const getNowPlayingMovies= async ()=>{
        const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
        const data=await fetch(url,options);
        const json= await data.json();
        dispatch(addNowPlayingMovies(json.results));
        console.log(json.results);
        
};
    useEffect(()=>{
       if(!nowPlayingMovies||nowPlayingMovies.length===0){
        getNowPlayingMovies();
       }
    },[]);


};
export default useNowPlayingMovies;
