import { createBrowserRouter } from "react-router-dom";
import Browser from "./Browser";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";

const Body=()=>{
    const Routerapp=createBrowserRouter([
        {
            path:"/",
            element:<Login/> 
        },
        {
            path:"/Browser",
            element:< Browser/> 
        }
    ])
    return (
        <div>
             <RouterProvider router={Routerapp}/>
        </div>
    );
};
export default Body;