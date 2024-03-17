import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home/Home";
import Main from "../Layouts/Main";
import About from "../Pages/About/About";
import Users from "../Pages/Users/Users";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/users',
                element:<Users></Users>
            }
        ]
    }
])