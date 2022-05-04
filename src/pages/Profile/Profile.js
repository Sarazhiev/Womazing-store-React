import React, {useContext, useRef, useState} from 'react';
import {BsPencilFill} from 'react-icons/bs'
import './profile.scss'
import {ImCross} from 'react-icons/im'
import {CustomContext} from "../../Context";
import InputMask from 'react-input-mask';
import {useForm} from "react-hook-form";
import axios from "axios";
import {useTranslation} from "react-i18next";
import {Link, NavLink} from "react-router-dom";

const Profile = () => {
    const [tab, setTab] = useState(2);
    const [userChange, setUserChange] = useState(false);
    const [passwordChange, setPasswordChange] = useState(false);
    const {t} = useTranslation();
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
                localStorage.setItem('user', JSON.stringify(data));
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
                    <div className="profile__crumbs">
                        <h2 className='profile__title'>{t("profile.title")}</h2>
                        <div className='profile__crumbs-info'>
                            <Link className="basket__crumbs-home" to='/'>{t("basket.link1")}</Link>
                            -
                            <NavLink className="basket__crumbs-cart" to='/basket'>{t("profile.profile")}</NavLink>
                        </div>
                    </div>
                    <div className='profile__btns'>
                        <button onClick={() => setTab(1)}
                                className={`profile__btn ${tab === 1 && 'profile__btn-active'}`}>{t("profile.btn1")}</button>
                        <button onClick={() => setTab(2)}
                                className={`profile__btn ${tab === 2 && 'profile__btn-active'}`}>{t("profile.btn2")}</button>
                    </div>
                </div>
                {
                    tab === 1
                        ?
                        <div className='profile__content'>


                        </div>

                        : <div>
                            <form onSubmit={handleSubmit(changeUser)} className="profile__content">
                                <div className="profile__change">
                                    <h3 className='profile__content-title'>{t("profile.info")}</h3>
                                    <span>
                        <span className='profile__content-write' onClick={() => setUserChange(!userChange)}>
                            {userChange ? <><ImCross/> {t("profile.cancel")} </> : <>
                                <BsPencilFill/> {t("profile.change")} </>}
                        </span>
                    </span>
                                </div>
                                <div className="profile__info">
                                    <p className='profile__info-about'>
                                        <span className='profile__info-upper'>{t("profile.login")}</span>
                                        {userChange ?
                                            <input className='profile__info-input' {...register('login')}
                                                   defaultValue={user.login} type="text"/> : user.login}
                                    </p>
                                    <p className='profile__info-about'>
                                        <span className='profile__info-upper'>{t("profile.phone")}*:</span>
                                        {userChange ? <InputMask className='profile__info-input' {...register('phone')}
                                                                 mask={`+\\9\\96(999)99-99-99`}
                                                                 defaultValue={user.phone} type="tel"/> : user.phone}
                                    </p>
                                    <p className='profile__info-about'>
                                        <span className='profile__info-upper'>{t("profile.mail")}</span>
                                        {userChange ?
                                            <input className='profile__info-input' {...register('email')}
                                                   defaultValue={user.email} type="email"/> : user.email}
                                    </p>
                                </div>


                                {userChange ?
                                    <button className='profile__info-save' type='submit'>{t("profile.save")}</button> : ''}

                            </form>
                            <form onSubmit={handleSubmit(changePassword)} className='profile__content'>
                                <div className="profile__change">
                                    <h3 className='profile__content-title'>{t("profile.password")}</h3>
                                    <span>
                        <span className='profile__content-write' onClick={() => setPasswordChange(!passwordChange)}>
                            {passwordChange ? <><ImCross/> {t("profile.cancel")} </> : <>
                                <BsPencilFill/> {t("profile.change")} </>}
                        </span>
                        </span>
                                </div>
                                {passwordChange ? <div className='profile__info'>
                                    <p className='profile__info-about'>
                                        <span className='profile__info-upper'>{t("profile.newPassword")}</span>
                                        <input className='profile__info-input' {...register('password', {
                                            required: "You must specify a password",
                                            minLength: {
                                                value: 5,
                                                message: "Password must have at least 5 characters"
                                            }
                                        })} type="password"/>
                                        {errors?.password && <p>{errors?.password?.message}</p>}
                                    </p>
                                    <p className='profile__info-about'>
                                        <span className='profile__info-upper'>{t("profile.confirmPassword")}</span>
                                        <input className='profile__info-input' {...register('confirmPwd', {
                                            validate: value =>
                                                value === password.current || "The password do not match"
                                        })} type="password"/>
                                        {errors?.confirmPwd && <p>{errors?.confirmPwd?.message}</p>}
                                    </p>
                                </div> : ''
                                }
                                {passwordChange ?
                                    <button className='profile__info-save' type='submit'>{t("profile.save")}</button> : ''}
                            </form>
                            <div className='profile__content'>
                                <div className="profile__bottom-info">
                                    <h3 className='profile__content-title'>{t("profile.subscribe")}</h3>
                                    <span className='profile__content-footer'>
                        <input type="checkbox"/> {t("profile.receive")}
                    </span>
                                </div>
                            </div>
                        </div>
                }

            </div>
        </section>
    );
};

export default Profile;