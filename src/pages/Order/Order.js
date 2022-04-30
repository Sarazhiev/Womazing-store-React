import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import img from './check.png'

const Order = () => {
    const {t} = useTranslation();
    return (
        <section className='order'>
            <div className="container">
                <h2 className='order__title'>{t("order.title")}</h2>
                <div className='order__links'>
                    <Link className='order__link' to='/'>{t("order.link1")}</Link>
                    -
                    <NavLink className='order__link' to='/shop'>{t("order.link2")}</NavLink>
                    -
                    <NavLink className='order__current' to='/shop'>{t("order.link3")}</NavLink>
                </div>
                <div className='order__content'>
                    <div className='order__content-left'>
                        <img className='order__content-img' src={img} alt="img"/>
                        <div className='order__content-subtitle'>
                            <p className='order__content-text'>{t("order.success")}</p>
                            <p className='order__content-info'>{t("order.contact")}</p>
                        </div>
                    </div>
                    <div className='order__content-right'>
                        <Link className='order__content-home' to='/'>
                            <button className='order__content-btn'>{t("order.btn")}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;