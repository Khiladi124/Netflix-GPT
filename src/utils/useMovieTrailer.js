import { options } from "../utils/moviesAPI";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useSelector } from "react-redux";
const useMovieTrailer = (movie_id) => {

    const dispatch=useDispatch();
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);

    const getTrailer=async()=>{
        const url = 'https://api.themoviedb.org/3/movie/' + movie_id + '/videos';
        const data = await fetch(url,options);
        const json=await data.json();
        console.log(json);
        const filteredData=json?.results?.filter((video)=>video.type==="Trailer");
        const trailer=filteredData?.length ? filteredData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    }
    useEffect(()=>{
       !trailerVideo && getTrailer();
    },[]);
};
export default useMovieTrailer;