import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import img from '../../Assets/basket.png'
import {ImCross} from 'react-icons/im'

const Basket = () => {
    const {t} = useTranslation();
    return (
        <section className='basket'>
            <div className="container">
                <h2 className="title" dangerouslySetInnerHTML={{__html: t("basket.title")}}/>
                <div className="basket__crumbs">
                    <Link className="basket__crumbs-home" to='/'>{t("basket.link1")}</Link>
                    -
                    <NavLink className="basket__crumbs-cart" to='/basket'>{t("basket.link2")}</NavLink>
                </div>
                <div className="basket__info">
                    <h3 className="basket__info-title">{t("basket.product")}</h3>
                    <ul className="basket__info-list">
                        <li className="basket__info-item">{t("basket.price")}</li>
                        <li className="basket__info-item">{t("basket.quantity")}</li>
                        <li className="basket__info-item">{t("basket.total")}</li>
                    </ul>
                </div>
                <div className="basket__product">
                    <div className='basket__product-left'>
                        <p className='basket__product-mark'><ImCross/></p>
                        <img className='basket__product-img' src={img} alt="img"/>
                        <p className='basket__product-name'>Футболка USA</p>
                    </div>

                    <p className='basket__product-price'>$129</p>
                    <p className='basket__product-count'>1</p>
                    <p className='basket__product-sum'>$129</p>
                </div>
                <div className='basket__ticket'>
                    <div className='basket__ticket-left'>
                        <input className='basket__ticket-input' placeholder={t("basket.ticket")} type="text"/>
                        <button className="basket__ticket-btn">{t("basket.useTicket")}</button>
                    </div>
                    <button className="basket__ticket-btn">{t("basket.updateCart")}</button>
                </div>
                <div className='basket__pay'>
                    <div className='basket__pay-header'>
                        <p className='basket__pay-info'>{t("basket.subtotal")}:</p>
                        <p className='basket__pay-info'>$129</p>
                    </div>
                    <div className='basket__pay-btns'>
                        <button className='basket__pay-btn1'>{t("basket.sum")}: <span>$129</span></button>
                        <button className='basket__pay-btn2'>{t("basket.checkout")}</button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Basket;