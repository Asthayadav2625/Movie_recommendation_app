
 
import { useState,useRef } from "react";
import { Background_img } from "../utils/constant";
import Header from "./Header";
import {  Validation} from "../utils/Validate";
const Login=()=>{
    
    const [isSignIn,setisSignIn]=useState(true);
    const [errorMessage,seterrorMessage]=useState(null);
    //const[confirmPassMsg,setconfirmPassMsg]=useState(null);

    const email=useRef(null);
    const  password=useRef(null);
    const Confirmpass=useRef(null);

    const HandleClick=()=>{
      setisSignIn(!isSignIn);
    }
    const HandleValidation=()=>{
        const  message=Validation(email.current.value,password.current.value,Confirmpass.current.value);
        seterrorMessage(message);
        // const cmsg=Validation(Confirmpass.current.value);
        // setconfirmPassMsg(cmsg);
    }
    return (
        <div>
            <Header/>

            <div className="absolute">
               <img alt="background" src={Background_img}/>
            </div>
             
             <form onSubmit={(e)=>e.preventDefault()}  className="bg-black opacity-80 w-96 absolute p-12 my-36 mx-auto right-0 left-0 rounded-lg ">
                <h1 className="mb-4 pb-4 text-3xl font-bold text-white">
                     {isSignIn ? "Sign In" : "Sign Up"}
                </h1>
                <input
                ref={email}
                type="text" placeholder="Email" className="my-2 p-4 w-full rounded-lg bg-gray-700"></input>
                <input 
                ref={password}
                type="text" placeholder="Password" className="my-2 p-4 w-full rounded-lg bg-gray-700"></input>
                {!isSignIn && 
                 (<input 
                  ref={Confirmpass}
                 type="text" placeholder=" Confirm Password" className="my-2 p-4 w-full rounded-lg bg-gray-700">
                  </input>)}

                  <p className="text-red-700 font-extrabold p-2">{errorMessage}</p>
                  {/* <p className="text-red-700 font-extrabold p-2">{Confirmpass}</p> */}

                <button className="w-full my-4 p-4 bg-red-700 rounded-lg text-white font-bold" 
                onClick={HandleValidation}
                >
                    {isSignIn ? "Sign In" : "Sign Up"}
                </button>
                <p className="my-4 p-2 text-white font-bold cursor-pointer" 
                onClick={HandleClick}>{isSignIn ? "New to netflix?Sign Up now" : "Already user? Sign In now"}</p>
             </form>
        </div>
    );
};
export default Login;