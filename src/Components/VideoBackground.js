import useMovieTrailer from "../utils/useMovieTrailer";
import { useSelector } from "react-redux";
const VideoBackground=({movie_id})=>{

    const trailer=useSelector((store)=>store.movies?.trailerVideo);
    useMovieTrailer(movie_id);
    console.log(trailer?.key);
    return (<div>
    <iframe
        className="  w-screen aspect-video"
         src={"https://www.youtube.com/embed/" + trailer?.key+"?autoplay=1&mute=1" } title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>);
};
export default VideoBackground;

<iframe width="656" height="369" src="https://www.youtube.com/embed/L4DrolmDxmw" title="Inside Out 2 | Final Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>