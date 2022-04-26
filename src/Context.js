import React, {createContext, useEffect, useState} from "react"
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const CustomContext = createContext();


export const Context = (props) => {
    const [user, setUser] = useState({
        login: ''
    });

    const [page, setPage] = useState(1);

    const [status, setStatus] = useState('all');

    const [product, setProduct] = useState({});


    const [shop, setShop] = useState([]);

    const navigate = useNavigate();

    const registerUser = (data) => {
        axios.post('http://localhost:8080/register', {...data, orders: []})
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data.user));
                setUser(res.data.user);
                navigate('/')
            })
    };

    const loginUser = (data) => {
        axios.post('http://localhost:8080/login', data)
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data.user));
                setUser(res.data.user);
                navigate('/')
            })
    };

    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }

        axios('http://localhost:8080/clothes')
            .then(({data}) => setShop(data) )
    }, []);

    const logOutUser = () => {
        localStorage.removeItem('user');
        setUser({
            login: ''
        })
    };

    const value = {
        user,
        setUser,
        registerUser,
        logOutUser,
        loginUser,
        shop,
        page,
        setPage,
        setStatus,
        status,
        product,
        setProduct
    };



    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
};