
import Browse from "./Browse";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser,removeUser } from "../utils/userSlice";
import Login from "./Login";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
const Body=()=>{
    
    const dispatch=useDispatch();
  
  
    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          
          const {uid, email, displayName} = user;
          dispatch(addUser({uid, email, displayName}));
        
        } else {
         
          dispatch(removeUser());
    
       
        }
      });
    },[]);
    const appROuter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>,
        },
        {
            path: "/browse",
            element: <Browse/>,
        },
    ]);
    return (<div>
       <RouterProvider router={appROuter} />
    </div>);
};
export default Body;