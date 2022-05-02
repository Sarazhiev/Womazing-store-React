import React, {useContext, useRef, useState} from 'react';
import {BsPencilFill} from 'react-icons/bs'
import './profile.scss'
import {CustomContext} from "../../Context";
import InputMask from 'react-input-mask';
import {useForm} from "react-hook-form";
import axios from "axios";

const Profile = () => {

    const [userChange, setUserChange] = useState(false);
    const [passwordChange, setPasswordChange] = useState(false);

    const {user, setUser} = useContext(CustomContext);


    const {
        reset,
        register,
        formState: {
            errors
        },
        watch,
        handleSubmit
    } = useForm({
        mode: "onBlur"
    });
    const password = useRef({});
    password.current = watch("password", "");

    const changeUser = (data) => {
        axios.patch(`http://localhost:8080/users/${user.id}`, data)
            .then(({data}) => {
                setUser(data);
                localStorage.setItem('user', data);
                setUserChange(false)
            })
    };

    const changePassword = (data) => {
        axios.patch(`http://localhost:8080/users/${user.id}`, {password: data.password})
            .then(() => setPasswordChange(false))
    };

    return (
        <section className="profile">
            <div className="container">
                <div className='profile__header'>
                    <h2 className='profile__title'>Мой аккаунт</h2>
                    <div className='profile__btns'>
                        <button className='profile__btn'>История заказов</button>
                        <button className='profile__btn2'>Настройки</button>
                    </div>
                </div>
                <form onSubmit={handleSubmit(changeUser)} className="profile__content">
                    <div className="profile__change">
                        <h3 className='profile__content-title'>Личные данные</h3>
                        <span className='profile__content-write'>
                        <span onClick={() => setUserChange(!userChange)}>
                            {userChange ? 'Отменить' : <> <BsPencilFill/> Изменить </>}
                        </span>
                    </span>
                    </div>
                    <div className="profile__info">
                        <p className='profile__info-about'>
                            <span className='profile__info-upper'>Логин</span>
                            {userChange ?
                                <input {...register('login')} defaultValue={user.login} type="text"/> : user.login}
                        </p>
                        <p className='profile__info-about'>
                            <span className='profile__info-upper'>Номер телефона*:</span>
                            {userChange ? <InputMask {...register('phone')} mask={`+\\9\\96(999)99-99-99`}
                                                     defaultValue={user.phone} type="tel"/> : user.phone}
                        </p>
                        <p className='profile__info-about'>
                            <span className='profile__info-upper'>Почта</span>
                            {userChange ?
                                <input {...register('email')} defaultValue={user.email} type="email"/> : user.email}
                        </p>
                    </div>


                    {userChange ? <button type='submit'>Сохранить изменения</button> : ''}

                </form>
                <form onSubmit={handleSubmit(changePassword)} className='profile__content'>
                    <div className="profile__change">
                        <h3 className='profile__content-title'>Пароль</h3>
                        <span className='profile__content-write'>
                        <span onClick={() => setPasswordChange(!passwordChange)}>
                            {passwordChange ? 'Отменить' : <> <BsPencilFill/> Изменить </>}
                        </span>
                        </span>
                    </div>
                    {passwordChange ? <div className='profile__info'>
                        <p className='profile__info-about'>
                            <span className='profile__info-upper'>Новый пароль</span>
                            <input {...register('password', {
                                required: "You must specify a password",
                                minLength: {
                                    value: 5,
                                    message: "Password must have at least 5 characters"
                                }
                            })} type="password"/>
                            {errors?.password && <p>{errors?.password?.message}</p>}
                        </p>
                        <p className='profile__info-about'>
                            <span className='profile__info-upper'>Подтвердите пароль</span>
                            <input {...register('confirmPwd', {
                                validate: value =>
                                    value === password.current || "The password do not match"
                            })} type="password"/>
                            {errors?.confirmPwd && <p>{errors?.confirmPwd?.message}</p>}
                        </p>
                    </div> : ''
                    }
                    {passwordChange ? <button type='submit'>Сохранить изменения</button> : ''}
                </form>
                <div className='profile__content'>
                    <div className="profile__bottom-info">
                        <h3 className='profile__content-title'>Подписки</h3>
                        <span className='profile__content-footer'>
                        <input type="checkbox"/> Получать предложения и акции
                    </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;