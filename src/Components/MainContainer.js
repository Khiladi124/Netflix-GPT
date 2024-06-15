
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
const MainContainer=()=>{
    const moviess=useSelector((store)=>store.movies?.nowPlayingMovies);
    console.log(moviess);
    if (!moviess) return;
    console.log(moviess);
    const movie=moviess[0];
    console.log(movie);
    const {original_title,overview,id}=movie;

    return (
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movie_id={id}/>;
        </div>
    );
};
export default MainContainer;