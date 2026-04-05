import { createHashRouter, RouterProvider } from 'react-router-dom';
import FrontendLayout from "./layout/FrontendLayout";
import { Children } from "react";
import Home from "./views/front/Home";
import Products from "./views/front/Products";
import Cart from "./views/front/Cart";
import SingleProduct from "./views/front/SingleProduct";
import Checkout from "./views/front/Checkout";
import Login from "./views/Login";
import NotFound from "./views/front/NotFound";

export const router = createHashRouter([
    {
        path: "/",
        element: <FrontendLayout />,
        children: [{
            index: true,
            element: <Home />
        },
        {
            path: "products",
            element: <Products />
        },
        {
            path: "product/:id",
            element: <SingleProduct />
        },
        {
            path: "cart",
            element: <Cart />
        },
        {
            path: "checkout",
            element: <Checkout />
        },
        {
            path: "login",
            element: <Login />
        },
    ]
    },
    {
        path: "*",
        element: <NotFound />
    }
])