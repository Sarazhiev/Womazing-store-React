import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Shop from "../pages/Shop/Shop";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Brands from "../pages/Brands/Brands";
import Cart from "../pages/Cart/Cart";
import NotFound from "../pages/NotFound/NotFound";

const Layout = () => {
    const location = useLocation();
    return (
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/shop' element={<Shop/>}/>
                <Route path='/brands' element={<Brands/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/*' element={<NotFound/>}/>
            </Routes>
            {
                   location.pathname === "/"
                || location.pathname === "/contact"
                || location.pathname === "/shop"
                || location.pathname === "/brands"
                || location.pathname === "/cart"
                ? <Footer/> : ''
            }
        </div>
    );
};

export default Layout;