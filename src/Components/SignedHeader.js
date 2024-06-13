import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
const SignedHeader=()=>{
    const navigate=useNavigate();
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            navigate('/')
          }).catch((error) => {
            // An error happened.
          });  
    };
    return(
       
        <div className="flex justify-between absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10">
            <img
            className="w-44" 
             src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo" />
            <button className="px-2 py-2 m-4 bg-blue-700 rounded-md " onClick={handleSignOut}>Sign Out</button>

        </div>
    );
};
export default SignedHeader;