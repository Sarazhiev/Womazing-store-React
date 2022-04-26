import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Shop from "../pages/Shop/Shop";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Brands from "../pages/Brands/Brands";
import Basket from "../pages/Basket/Basket";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";
import Product from "../pages/Product/Product";
import Order from "../pages/Order/Order";

const Layout = () => {
    const location = useLocation();
    return (
        <div>

            {
                location.pathname !== '/login' && location.pathname !== '/register' ? <Header/> : ''
            }

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/shop' element={<Shop/>}/>
                <Route path='/brands' element={<Brands/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/basket' element={<Basket/>}/>
                <Route path='/*' element={<NotFound/>}/>
                <Route path='/product/:id' element={<Product/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/order' element={<Order/>}/>
            </Routes>
            {
                   location.pathname === "/login"
                || location.pathname === "/register"

                ? '' : <Footer/>
            }
        </div>
    );
};

export default Layout;