import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import ServiceDetailsPage from "../../Pages/ServiceDetailsPage/ServiceDetailsPage";

import SignUp from "../../Pages/SignUp/SignUp";

import LogIn from "../../Pages/LogIn/LogIn";
import Review from "../../Pages/Review/Review";
import ShowReview from "../../Pages/Review/ShowReview";
import ServicePage from "../../Pages/ServiceDetailsPage/ServicePage";
import ServiceReview from "../../Pages/Review/ServiceReview";
import ReviewID from "../../Pages/Review/ReviewID";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Update from "../../Pages/Update/Update";
import Allservices from "../../Pages/ServiceDetailsPage/Allservices";
import AddService from "../../Pages/Home/Services/AddService";
import Blogs from "../../Pages/Blogs/Blogs";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AboutMe from "../../Pages/AboutMe/AboutMe";






 const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://personal-server-foodservice.vercel.app/services'),
                
            },
            {
                path: '/aboutme',
                element: <AboutMe></AboutMe>,
                
                
            },
            {
                path: '/allservices',
                element: <Allservices></Allservices>,
                loader: () => fetch('https://personal-server-foodservice.vercel.app/services'),
                
            },
            {
                path: '/addservices',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
                
            },
            {
                path: '/services/:_id',
                element: <ServiceDetailsPage></ServiceDetailsPage>,
                loader: ({params}) => fetch(`https://personal-server-foodservice.vercel.app/services/${params._id}`)
            },
            {
                path: '/reviews',
                element: <PrivateRoute><Review></Review></PrivateRoute>,
                loader: () => fetch('https://personal-server-foodservice.vercel.app/reviews'),
                

            },
            {
                path: '/myReviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
                
                

            },
            {
                path: '/update/:_id',
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({params}) => fetch(`https://personal-server-foodservice.vercel.app/update/${params._id}`)
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
            
           
        ]
    }
])

export default router;