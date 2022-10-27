import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Main from "../Component/Main/Main";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                path: '/',
                element: <Main></Main>,
            },
            {
                path: 'login',
                element: <Login></Login>,
            }
        ]
    }
]);