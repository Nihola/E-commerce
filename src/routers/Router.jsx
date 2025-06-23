import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cart from "../pages/cart/Cart";
import Category from "../pages/category/Category";//update*
import Delivery from "../pages/delivery/Delivery";
import Favorites from './../pages/favorites/Favorites';
import Home from "../pages/home/Home";

export const Router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                index:true,
                element:<Home/>

            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/category",
                element:<Category/>
            },

            {
                path:"/delivery",
                element:<Delivery/>

            },
            {
                path:"/favorites",
                element:<Favorites/>
            },

        ]
    }
])