import languages from "../utils/langConstants";
import { useSelector } from "react-redux";
const GptSearchBar=()=>{
    const currLang=useSelector((store)=>store.lang?.currLanguage)
    console.log(currLang);
    return(
        <div className=" absolute pt-[20%] px-[20%] flex justify-center min-w-full ">
        <form 
        className=" bg-black min-w-full grid grid-cols-12  ">
            <input type="text" placeholder={languages[currLang].gptSearchPlaceholder} className="bg-gray-700 col-span-9 text-white p-2 m-2 rounded-md"/>
            <button className="bg-red-700 col-span-3 text-white p-2 m-2 rounded-md">{languages[currLang].search}</button>
        </form>
    </div>
    );
};
export default GptSearchBar;