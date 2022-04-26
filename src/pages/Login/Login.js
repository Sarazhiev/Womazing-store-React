import React, {useContext} from 'react';
import {Link, NavLink} from "react-router-dom"
import {useForm} from "react-hook-form";
import {CustomContext} from "../../Context";
import Header from "../../Layout/Header/Header";



const Login = () => {

    const {loginUser} = useContext(CustomContext);


    const {
        register,
        handleSubmit,
        setError: {
            errors
        },
        reset
    } = useForm();



    return (
        <section className='login'>
            <form className='login__form' onSubmit={handleSubmit(loginUser)}>
                <h2 className='login__title'>Вход в аккаунт</h2>
                <p className='login__text'>Войдите в свою учетную запись, используя адрес электронной почты и пароль, указанные при регистрации.</p>
                <label className='login__label' htmlFor="1">Email</label>
                <input id='1' {...register('email')} className='login__input' type="email" placeholder='Your working email'/>
                <label className='login__label' htmlFor="2">Password</label>
                <input id='2' {...register('password')} className='login__input' type="password" placeholder='Enter password'/>
                <button className='login__btn' type='submit'>Войти</button>
                <p className='login__quest'>нет аккаунат? <Link className='login__link' to='/register'>Регистрация</Link> </p>
                <Link to='/' className='home'>Вернуться на главную страницу</Link>
            </form>
        </section>
    );
};

export default Login;