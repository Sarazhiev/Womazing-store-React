import React, {useState, useContext} from 'react';
import {CustomContext} from "../../Context";
import {Link, NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import 'antd/dist/antd.css';
import {Pagination} from 'antd';
import {LazyLoadImage} from 'react-lazy-load-image-component'


const Shop = () => {
    const {t} = useTranslation();

    const [sort, setSort] = useState('');

    const {page, setPage, shop, status, setStatus, user} = useContext(CustomContext);

    const showCount = shop.filter(item => status === 'all' ? item : item.category === status).filter(el => sort === 'discount' ? el.priceSale : el).filter((item, idx) => {
            return idx + 1 <= page * 9 && idx >= page * 9 - 9
        }).length,
        showCountsLength = shop.filter(item => status === 'all' ? item : item.category === status).filter(el => sort === 'discount' ? el.priceSale : el).length;


    return (
        <section className='shop'>
            <div className="container">
                <h2 className="title">{t("shop.title")}</h2>
                <div className="contactHeader__links">
                    <Link className="contactHeader__link" to='/'>{t("contacts.crumbs.link1")}</Link>
                    -
                    <NavLink className="contactHeader__link" to='/shop'>{t("contacts.crumbs.link2")}</NavLink>
                </div>
                <ul className='shop__list'>
                    <li onClick={() => {
                        setPage(1);
                        setStatus('all')
                    }} className={`shop__item ${status === "all" && 'shop__item_active'}`}>{t('shop.all')}
                    </li>
                    <li onClick={() => {
                        setPage(1);
                        setStatus('sportsuit')
                    }} className={`shop__item ${status === "sportsuit" && 'shop__item_active'}`}>{t('shop.suit')}
                    </li>
                    <li onClick={() => {
                        setPage(1);
                        setStatus('sweatshirt')
                    }} className={`shop__item ${status === "sweatshirt" && 'shop__item_active'}`}>{t('shop.sweatshirt')}
                    </li>
                    <li onClick={() => {
                        setPage(1);
                        setStatus('tshort')
                    }} className={`shop__item ${status === "tshort" && 'shop__item_active'}`}>{t('shop.tshort')}
                    </li>
                    <li onClick={() => {
                        setPage(1);
                        setStatus('hoody')
                    }} className={`shop__item ${status === "hoody" && 'shop__item_active'}`}>{t('shop.hoody')}
                    </li>
                </ul>
                <div className='shop__sort-content'>
                    {user.email === 'admin@mail.ru' ? <Link to='/create' className='shop__sort'>Add</Link> : <span/>}
                    <div className='shop__sort-type'>
                        {sort
                            ? <h3 className='shop__sort-title'>{t("shop.sortTitle")} <span>{sort}</span></h3>
                            : ''
                        }
                        <div className='shop__sorts'>
                            <button type='btn' className={`shop__sort ${sort === 'big' ? 'active' : ''}`}
                                    onClick={() => setSort('big' !== sort ? 'big' : '')}>{t("shop.big")}</button>
                            <button type='btn' className={`shop__sort ${sort === 'less' ? 'active' : ''}`}
                                    onClick={() => setSort('less' !== sort ? 'less' : '')}>{t("shop.less")}</button>
                            <button type='btn' className={`shop__sort ${sort === 'discount' ? 'active' : ''}`}
                                    onClick={() => setSort('discount' !== sort ? 'discount' : '')}>{t("shop.discount")}</button>
                        </div>
                    </div>
                </div>


                {
                    showCountsLength <= 0
                        ? <p className='shop__discount-text'>{t("shop.discountText")}</p>
                        : <>
                            <p>Показано: {showCount} из {showCountsLength} товаров</p>
                            <div className='shop__row'>
                                {
                                    shop.sort((a, b) => {
                                        if (sort === 'big') {
                                            return (b.priceSale || b.price) - (a.priceSale || a.price)
                                        } else if (sort === 'less') {
                                            return (a.priceSale || a.price) - (b.priceSale || b.price)
                                        }
                                    }).filter(el => sort === 'discount' ? el.priceSale : el)
                                        .filter(item => status === 'all' ? item : item.category === status).filter((item, idx) => {
                                        return idx + 1 <= page * 9 && idx >= page * 9 - 9
                                    }).map((item) => (

                                        <div key={item.id} className='shop__card'>
                                            <Link className="shop__card-link" to={`/product/${item.id}`}>
                                                <LazyLoadImage
                                                    className='shop__card-img'
                                                    alt='t-short'
                                                    src={`../${item.image}`}
                                                    effect='blur'
                                                />
                                            </Link>
                                            <h3 className='shop__card-title'>{item.title}</h3>
                                            <p className='shop__card-price'>${item.priceSale
                                                ? <>
                                                    <span style={{textDecoration: 'line-through'}}>{item.price}</span>
                                                    -
                                                    <span className='shop__card-price-sale'>${item.priceSale}</span>
                                                </>
                                                : item.price}</p>
                                            {
                                                item.inStock ?
                                                    <p className='shop__card-instock'>
                                                        В наличии : <span>{item.inStock}</span>
                                                    </p> :
                                                    <p className='shop__card-instock'>
                                                        Нет в наличии !
                                                    </p>
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                            <p>Показано: {showCount} из {showCountsLength} товаров</p></>
                }
                {
                    showCountsLength > 9 ?
                        <Pagination simple onChange={setPage} current={page}
                                    total={shop.filter(item => status === 'all' ? item : item.category === status).length}
                                    pageSize={9}/> : ''
                }
            </div>
        </section>
    );
};

export default Shop;