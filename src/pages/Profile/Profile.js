import React, {useContext, useEffect, useRef, useState} from 'react';
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
    const [isActive, setIsActive] = useState(false);

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
                        <div >
                            {
                                user.orders.map((item, idx) => (
                                    <div className='profile__orders' key={idx}>
                                        <ul className='profile__orders-list'>
                                            <li className='profile__orders-item'>
                                                <p className='profile__orders-info'><span className='profile__orders-about'>{t("profile.name")}</span> {item.name}</p>
                                                <p className='profile__orders-info'><span className='profile__orders-about'>{t("profile.email")}</span> {item.email}</p>
                                                <p className='profile__orders-info'><span className='profile__orders-about'>{t("profile.tel")}</span> {item.phone}</p>
                                                <p className='profile__orders-info'><span className='profile__orders-about'>{t("profile.country")}</span> {item.country}</p>
                                                <p className='profile__orders-info'><span className='profile__orders-about'>{t("profile.city")}</span> {item.city}</p>
                                                <p className='profile__orders-info'><span className='profile__orders-about'>{t("profile.street")}</span> {item.street}</p>
                                                <p className='profile__orders-info'><span className='profile__orders-about'>{t("profile.house")}</span> {item.house}</p>
                                                <p className='profile__orders-info'><span className='profile__orders-about'>{t("profile.flat")}</span> {item.flat}</p>
                                                <p className='profile__orders-arrow' onClick={() => setIsActive(!isActive)}>
                                                    {
                                                        isActive ? <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16 8.64986C16 8.45805 15.9289 8.26605 15.7869 8.11962L8.5142 0.619697C8.23002 0.326638 7.76984 0.326638 7.48584 0.619697L0.213135 8.11962C-0.0710456 8.41268 -0.0710456 8.88724 0.213135 9.18011C0.497316 9.47298 0.957497 9.47317 1.2415 9.18011L8.00002 2.21043L14.7585 9.18011C15.0427 9.47317 15.5029 9.47317 15.7869 9.18011C15.9289 9.03367 16 8.84167 16 8.64986Z" fill="#FF7010"/>
                                                        </svg>
                                                            :
                                                            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M16 1.35014C16 1.54195 15.9289 1.73395 15.7869 1.88038L8.5142 9.3803C8.23002 9.67336 7.76984 9.67336 7.48584 9.3803L0.213135 1.88038C-0.0710456 1.58732 -0.0710456 1.11276 0.213135 0.819893C0.497316 0.527021 0.957497 0.526833 1.2415 0.819893L8.00002 7.78957L14.7585 0.819892C15.0427 0.526833 15.5029 0.526833 15.7869 0.819892C15.9289 0.966328 16 1.15833 16 1.35014Z" fill="#FF7010"/>
                                                            </svg>
                                                    }
                                                </p>
                                            </li>
                                        </ul>
                                        {
                                            isActive &&
                                            <ul className='profile__orders-list'>
                                                {
                                                    item.clothes.map(el => (
                                                        <li className='profile__orders-item ' key={el.id}>
                                                            <img className='profile__orders-image' src={el.image} alt=""/>
                                                            <p className='profile__orders-info'>Название : <br/> <span className='profile__orders-span'>{el.title}</span> </p>
                                                            <p className='profile__orders-info'>Категория : <br/> <span className='profile__orders-span'>{el.category}</span> </p>
                                                            <p className='profile__orders-info'>цвет : <br/> <span className='profile__orders-span'>{el.color}</span></p>
                                                            <p className='profile__orders-info'>Размер : <br/> <span className='profile__orders-span'>{el.size}</span> </p>
                                                            <p className='profile__orders-info'>Кол-во :  <br/> <span className='profile__orders-span'>{el.count}</span></p>
                                                            <p className='profile__orders-info'>Цена : <br/> <span className='profile__orders-span'>{el.price}$</span> </p>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        }
                                    </div>
                                ))
                            }
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