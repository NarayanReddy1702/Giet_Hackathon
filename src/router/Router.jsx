import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CommonPage from "../components/CommonPage";
import Home from "../sections/Home";
import Quiz from "../components/Quiz"
import Score from "../sections/Score";
import About from "../sections/About";
import Hackathon from "../sections/Hackathon";

const router= createBrowserRouter([
    {
        path: "/",
        element: <CommonPage/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path:'/Score',
                element:<Score/>
            },
            {
                path:'/About',
                element:<About/>
            },
            {
                path:"/Quiz",
                element:<Quiz/>
            },
            {
                path:"/Hackathon",
                element:<Hackathon/>
            }
        ]
    }
])

export default router