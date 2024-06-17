import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"
const GPT=()=>{

    return (
        <div className="relative min-h-screen">
        <div className="absolute ">
      <img className=" min-w-screen p-auto min-h-screen w-screen object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background" />
    </div>

        
            <GptSearchBar />
            <GptMovieSuggestions/>
     
    </div>
    );
};
export default GPT;