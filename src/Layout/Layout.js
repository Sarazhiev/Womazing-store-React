import React, {useContext} from 'react';
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
import Checkout from "../pages/Checkout/Checkout";
import AdminPanel from "../pages/AdminPanel/AdminPanel";
import {CustomContext} from "../Context";
import CreateProduct from "../pages/CreateProduct/CreateProduct";

const Layout = () => {
    const location = useLocation();
    const {user} = useContext(CustomContext);
    return (
        <div>

            {
                location.pathname !== '/login' && location.pathname !== '/register' ? <Header/> : ''
            }

            <Routes>
                {user.email !== 'admin@mail.ru' ? <Route path='/' element={<Home/>}/> : ''}
                <Route path='/' element={<Home/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/shop' element={<Shop/>}/>
                <Route path='/brands' element={<Brands/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/basket' element={<Basket/>}/>
                <Route path='/product/:id' element={<Product/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/order' element={<Order/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='/create' element={<CreateProduct/>}/>
                {user.email === 'admin@mail.ru' ? <Route path='/*' element={<AdminPanel/>}/> : ''}
                <Route path='/*' element={<NotFound/>}/>
            </Routes>
            {
                   location.pathname === "/login"
                || location.pathname === "/register"
                || location.pathname === "/admin"
                ? '' : <Footer/>
            }
        </div>
    );
};

export default Layout;