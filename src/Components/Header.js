import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const Header=()=>{
    const user=useSelector((store)=>store.user);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            dispatch(removeUser());
          }).catch((error) => {
            
          });  
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
       
        <div className="flex justify-between absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10">
            <img
            className="w-44" 
             src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo" />
           {user&&<button className="px-2 py-2 m-4 bg-blue-700 rounded-md " onClick={handleSignOut}>Sign Out</button>
}
        </div>
    );
};
export default Header;