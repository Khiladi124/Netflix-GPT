
import Browse from "./Browse";
import Login from "./Login";
import GPT from "./GPT";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
const Body=()=>{

    const appROuter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>,
        },
        {
            path: "/browse",
            element: <Browse/>,
        },
        {
            path:"/gpt",
            element: <GPT/>,

        }
    ]);
    return (<div>
       <RouterProvider router={appROuter} />
    </div>);
};
export default Body;