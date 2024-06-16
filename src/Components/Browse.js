import Header from "./Header";
import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse=()=>{
    
   useNowPlayingMovies();

    return (
        <div className=" h-4/5 bg-black">
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
          
        </div>
    );
};
export default Browse;