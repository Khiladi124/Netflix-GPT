import languages from "../utils/langConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai"
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addGptResponse } from "../utils/gptSlice";
const GptSearchBar=()=>{
    const query=useRef(null);
    const dispatch = useDispatch();
    const currLang=useSelector((store)=>store.lang?.currLanguage)
    const handleGptSearchClick= async ()=>{
      const gptQuery=query.current.value +"act as a movie recommendation system and suggest the movies for the query." + "only give me names of 6 movies, comma separated. "
            const chatCompletion = await openai.chat.completions.create({
              messages: [{ role: 'user', content: gptQuery }],
              model: 'gpt-3.5-turbo',
            });
            console.log(chatCompletion);
            dispatch(addGptResponse(chatCompletion[0]?.message.content));
          
    };
    return(
        <div className=" absolute max-[510px]:pt-[45%] max-[640px]:pt-[30%] sm:pt-[20%] px-[4%] sm:px-[20%] flex justify-center min-w-full ">
        <form onSubmit={(e)=>e.preventDefault()}
        className=" bg-black min-w-full grid grid-cols-12 rounded-lg ">
            <input ref={query} type="text" placeholder={languages[currLang].gptSearchPlaceholder} className="bg-gray-700 col-span-8 sm:col-span-9 text-sm sm:text-lg text-white p-2 m-2 rounded-md"/>
            <button onClick={handleGptSearchClick} className="bg-red-700 col-span-4 sm:col-span-3 text-sm sm:text-lg  text-white font-bold p-2 m-2 rounded-md">{languages[currLang].search}</button>
        </form>
    </div>
    );
};
export default GptSearchBar;