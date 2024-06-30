import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout";
import Home from "../pages/home";
import About from "../pages/about";
import NotFound from "../pages/notFound";
import Project from "../pages/porject";
import Blog from "../pages/blog";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import RedirectIfLoggedIn from "../components/RedirectIfLoggedIn";


const routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        children:[
            {
                index:true,
                element:<Home />
            },
            {
                path:'/about',
                element:<About />
            },
            
            {
                path:'/project',
                element:<Project />
            },
            {
                path:'/blog',
                element:<Blog />
            },
            {
                path:'/login',
                element:<RedirectIfLoggedIn><Login /> </RedirectIfLoggedIn>
            },
            {
                path:'/register',
                element:<RedirectIfLoggedIn><Register /> </RedirectIfLoggedIn>
            },
            {
                path:'/*',
                element:<NotFound />
            }
        ]
    }
])
export default routes