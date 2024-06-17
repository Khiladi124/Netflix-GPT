import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toggleGptSearch } from "../utils/gptSlice";
import { SUPPORTED_LANG } from "../utils/contants";
import {changeLang} from "../utils/langSlice"

const Header=()=>{

    const user=useSelector((store)=>store.user);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const isGptOpen=useSelector((store)=>store.gpt?.gptSearch);

    const handleSignOut=()=>{
        signOut(auth).then(() => {
            dispatch(removeUser());
          }).catch((error) => {
            
          });  
    };

    const toggleGpt=()=>{
        
        dispatch(toggleGptSearch());
    };

 const handleLanguageChange=(e)=>{
     console.log(e.target.value);
     dispatch(changeLang(e.target.value));
    };

    useEffect(()=>{
        const unsubscribe=  onAuthStateChanged(auth, (user) => {
            if (user) {

             const {uid,email,displayName}=user;
             dispatch(addUser({uid:uid,email:email,displayName:displayName}));
             navigate('/browse');
            } else {
                dispatch(removeUser());
             navigate('/');
            }
            
          });
          return ()=>unsubscribe();
    },[]);
    
    return(
       
        <div className="flex { flex-col sm:flex-row } sm:justify-between sm:absolute w-full px-0 sm:px-8 py-2   z-10 sm:bg-gradient-to-b from-black ">
            <div className="flex justify-center -my-4 sm:my-auto mx-none ">
                <img
                    className="w-44" 
                    src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                    alt="logo" 
                />
            </div>
            <div className="flex justify-center sm:justify-end my-auto  border-t-white content-center sm:border-none {bg-black sm:bg-none}">
                {user && isGptOpen &&
                    <form className=" py-2 my-4 mx-2 max-w-fit">
                        <select onChange={handleLanguageChange} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Languages</option>
                            {SUPPORTED_LANG.map((lang) => (
                                <option value={lang.identifier}>{lang.name}</option>
                            ))}
                        </select>
                    </form>
                }
                {user && !isGptOpen &&
                    <button className="px-2 py-2 my-6 mx-2 max-w-fit font-bold bg-white rounded-md" onClick={toggleGpt}>Chat-GPT</button>
                }
                {user && isGptOpen &&
                    <button className="px-2 my-6 mx-2 max-w-fit text-white font-bold text-sm sm:text-lg bg-red-700 rounded-md" onClick={toggleGpt}>Home</button>
                }
                {user &&
                    <button className="px-2  max-[300px]:text-xs  my-6 mx-2 h-[40px] max-w-fit text-white font-bold text-sm sm:text-lg bg-red-700 rounded-md" onClick={handleSignOut}>Sign Out</button>
                }
            </div>
        </div>
    );
};
export default Header;