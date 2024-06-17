import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
// import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
const Login = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {

    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidData(email.current.value, password.current.value);

    setErrorMessage(message);

    if (isSignInForm) {
      if (message === null) {

        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
      
          })
          .catch((error) => {
            const authErrorCode = error.code;
            const authErrorMessage = error.message;
            setErrorMessage(authErrorCode + ": " + authErrorMessage);
          });

      }

    } else {
      if (message === null) {

        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user);
            updateProfile(auth.currentUser, {
              name: name.current.value
            }).then(() => {
              const { uid, email, name } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, name: name })
              );
            //  navigate('/Browse');
            }).catch((error) => {

            });

          })
          .catch((error) => {
            const authErrorCode = error.code;
            const authErrorMessage = error.message;
            setErrorMessage(authErrorCode + ": " + authErrorMessage);

          });

      }

    }
  }
  return (<div className="bg-gray-900 min-h-screen">

    <Header /> <div className="absolute w-screen">
      <img className=" h-screen  w-screen object-cover m-0 p-auto px-0" src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background" />
    </div>
   
    <form onSubmit={(e) => e.preventDefault()} className="absolute p-12 bg-black bg-opacity-55 w-full sm:w-3/5 md:w-1/3 h-auto my-20 mx-auto right-0 left-0">
      <h1 className="text-white font-bold mb-4 ml-0 mr-0 "> {isSignInForm ? "Sign In" : "Sign Up"}</h1>
      {
        !isSignInForm && <input ref={name} type="text" placeholder="First Name" className="p-2 my-2 w-full bg-white rounded-lg" />
      }
      {
        !isSignInForm && <input type="text" placeholder="Last Name" className="p-2 my-2 w-full bg-white rounded-lg" />
      }

      {/* { errorMessage && <p className=" text-red-800  ">{errorMessage}</p>} */}
      <input ref={email} type="email" placeholder="Email Address" className="p-2 my-2 w-full rounded-lg " />
      {/* {errorMessage && <p className=" text-red-800  ">{errorMessage}</p>} */}
      <input ref={password} type="password" placeholder="Password" className="p-2 my-2 w-full rounded-lg" />
      {
        !isSignInForm && <input type="password" placeholder="Confirm Password" className="p-2 my-2 w-full rounded-lg" />
      }
      {
        errorMessage && <p className="  text-red-400 font-bold ">{errorMessage}</p>
      }


      <button className="p-2  my-4 font-bold text-white bg-red-600 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
      <p className="text-white font-thin ">{isSignInForm ? "New on Netflix?" : "Already Registered?"} <a href="#" className="text-white" onClick={toggleSignInForm}> {isSignInForm ? "Sign Up." : "Sign In."}</a></p>

    </form>
    
  </div>);
};
export default Login;