import MovieList from "./MovieList";
import { useSelector } from "react-redux";                
const SecondaryContainer=()=>{
  const movies=useSelector((store)=>store.movies.nowPlayingMovies);
  console.log(movies);
    return (
        <div className="bg-black" >
           <div className=" -mt-52 relative z-20 ">
             <MovieList title={"Now Playing"} movies={movies}/>
             <MovieList title={"Trending"} movies={movies}/>
             <MovieList title={"Comedy"} movies={movies}/>
             <MovieList title={"Thriller"} movies={movies}/>
             <MovieList title={"Cartoon"} movies={movies}/>
           </div>
        </div>
    );
};
export default SecondaryContainer;