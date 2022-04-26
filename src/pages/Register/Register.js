import React, {useContext} from 'react';
import {CustomContext} from "../../Context";
import InputMask from 'react-input-mask';
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

const Register = () => {


    const {setUser,registerUser} = useContext(CustomContext);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        reset
    } = useForm({
            mode: 'onBlur'
        }
    );




    return (
        <section className='register'>
            <form className='register__form' onSubmit={handleSubmit(registerUser)}>
                <h2 className='register__title'>Регистрация</h2>
                <p className='register__text'>Регистрация занимает меньше минуты, но дает вам полный контроль над заказом вещей</p>
                <label className='register__label' htmlFor="1">Email</label>
                <input id='1' {...register('email', {
                    required : 'Это поле обязательное *',
                })} className='register__input' type="email" placeholder='Введите email'/>
                <span>{errors?.email?.message}</span>
                <label className='register__label' htmlFor="2">Login</label>
                <input id='2' {...register('login', {
                    required: 'Это поле обязательное *'
                })} className='register__input' type="text" placeholder='Введите логин'/>
                <span>{errors?.login?.message}</span>
                <label className='register__label' htmlFor="tel">Phone</label>
                <InputMask mask={`+\\9\\96(999)99-99-99`} type='tel'  id='tel' {...register('phone', {
                    required: 'Это поле обязательное *'
                })} className="register__input" placeholder='Ввеите номер телефона'/>
                <span>{errors?.phone?.message}</span>
                <label className='register__label' htmlFor="4">Password</label>
                <input id='4' {...register('password', {
                    required: 'Это поле обязательное *'
                })} className="register__input" type='password' placeholder='Введите пароль'/>
                <span>{errors?.password?.message}</span>
                <label className='register__label' htmlFor="5">Confirm Password</label>
                <input id='5' className="register__input" type='password' placeholder='Введите пароль повторно'/>
                <button className='register__btn'>Зарегестрироваться</button>
                <p className='register__quest'>уже есть аккаунт? <Link className='register__link' to='/login'>Войти</Link> </p>
                <Link to='/' className='home'>Вернуться на главную страницу</Link>

            </form>
        </section>
    );
};

export default Register;