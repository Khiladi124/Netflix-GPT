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
        
        try {
            const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
            const response = await fetch(url, options);
            const data = await response.json();
            dispatch(addNowPlayingMovies(data.results));
            console.log(data.results);
        } catch (error) {
            console.error(error);
        }
        
};
    useEffect(()=>{
       if(!nowPlayingMovies||nowPlayingMovies.length===0){
        getNowPlayingMovies();
       }
    },[]);


};
export default useNowPlayingMovies;
