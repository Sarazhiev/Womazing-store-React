import React, {useContext, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {CustomContext} from "../../Context";
import BasketCard from "./BasketCard";
import axios from "axios";

const Basket = () => {

    const {t} = useTranslation();


    const {cart, deleteCart, setCart, ticket, setTicket} = useContext(CustomContext);

    const useTicket = (e) => {
        e.preventDefault();
        axios(`http://localhost:8080/tickets?title=${e.target[0].value}`)
            .then(({data}) => {
                if (data.length) {
                    setTicket(data)
                } else {
                    setTicket('Такого купона не существует!!!')
                }
            })

    };

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
                        <li className="basket__info-item basket__info-item2">{t("basket.size")}</li>
                        <li className="basket__info-item basket__info-item2">{t("basket.color")}</li>
                        <li className="basket__info-item basket__info-item2">{t("basket.price")}</li>
                        <li className="basket__info-item basket__info-item2">{t("basket.quantity")}</li>
                        <li className="basket__info-item basket__info-item2">{t("basket.total")}</li>
                    </ul>
                </div>
                {
                    cart.length ? cart.map((item, idx) => (
                        <React.Fragment key={idx}>
                            <BasketCard cart={cart} item={item} />
                        </React.Fragment>
                    ))
                        : <p className='basket__info-message'>{t("basket.basketText")}</p>
                }
                {
                    cart.length ?
                        <>
                            <div className='basket__ticket'>
                                <form className='basket__ticket-left' onSubmit={useTicket}>
                                    <input className='basket__ticket-input' placeholder={t("basket.ticket")} type="text"/>
                                    <button type='submit' className="basket__ticket-btn">{t("basket.useTicket")}</button>

                                    {
                                        Array.isArray(ticket) && ticket.length ? <p className='basket__ticket-message'>
                                            По данному промокоду вы получили скидку в размере {ticket[0].discount} %
                                        </p> : ticket.length ? <p className='basket__ticket-message'>{ticket}</p> : ''
                                    }

                                </form>
                                <button className="basket__ticket-btn" onClick={() => setCart([])}>{t("basket.updateCart")}</button>
                            </div>
                            <div className='basket__pay'>
                                <div className='basket__pay-header'>
                                    <p className='basket__pay-info'>{t("basket.subtotal")}:</p>
                                    <p className='basket__pay-info'>$ {cart.reduce((acc, rec) => acc + rec.count * rec.price, 0)}</p></div>
                                <div className='basket__pay-btns'>
                                    <button className='basket__pay-btn1'>{t("basket.sum")}: <span>$ {Array.isArray(ticket) && ticket.length
                                        ? cart.reduce((acc, rec) => acc + rec.count * rec.price, 0) - cart.reduce((acc, rec) => acc + rec.count * rec.price, 0) / 100 * ticket[0].discount
                                        : cart.reduce((acc, rec) => acc + rec.count * rec.price, 0)
                                    }  </span></button>
                                    <Link to='/checkout'>
                                        <button className='basket__pay-btn2'>{t("basket.checkout")}</button>
                                    </Link>
                                </div>
                            </div>
                        </> : ''
                }
            </div>

        </section>
    );
};

export default Basket;