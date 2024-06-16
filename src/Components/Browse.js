import Header from "./Header";
import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPT from "./GPT";
import { useSelector } from "react-redux";

const Browse=()=>{
    const isGptOpen=useSelector((store)=>store.gpt?.gptSearch);
    
   useNowPlayingMovies();

    return (
        <div className=" h-4/5 bg-black">
            <Header/>
           
          {  isGptOpen?<GPT/>:<> <MainContainer/>
            <SecondaryContainer/> </>}
         
                
          
           
            
          
        </div>
    );
};
export default Browse;