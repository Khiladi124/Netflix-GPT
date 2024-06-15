import Header from "./Header";
import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import MainContainer from "./MainContainer";

const Browse=()=>{
    
   useNowPlayingMovies();

    return (
        <div className=" h-4/5 bg-black">
            <Header/>
            <MainContainer/>
          
        </div>
    );
};
export default Browse;