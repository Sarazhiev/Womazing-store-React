import React, {useContext, useEffect, useState} from 'react';
import {Link, NavLink, useParams} from 'react-router-dom'
import axios from "axios";
import {useTranslation} from "react-i18next";
import {CustomContext} from "../../Context";
import SliderProduct from "./SliderProduct/SliderProduct";

const Product = () => {

    const params = useParams();
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const {setPage, setStatus, shop, product, setProduct} = useContext(CustomContext);
    const {t} = useTranslation();
    useEffect(() => {
        axios(`http://localhost:8080/clothes/${params.id}`)
            .then(({data}) => {
                setProduct(data);
                setColor(data.colors[0]);
                setSize(data.size[0])
            })
    }, [params]);
    return (
        <section className='product'>
            <div className="container">
                { product.title && <>
                    <h2 className="title">{product.title}</h2>
                    <div className="contactHeader__links">
                        <Link className="contactHeader__link" to='/'>{t("contacts.crumbs.link1")}</Link>
                        -
                        <NavLink className="contactHeader__link" to='/shop' onClick={() => {
                            setPage(1);
                            setStatus('hoody')}}>{product.category}</NavLink>
                        -
                        <p className="product__unlink">{product.title}</p>
                    </div>
                    <div className="product__content">
                        <img src={`../${product.image}`} alt={product.title} className="product__content-img"/>
                        <div className="product__content-info">
                            <p className='product__content-price'>${product.priceSale
                                ? <>
                                    <span style={{textDecoration: 'line-through'}}>{product.price}</span>
                                    <span className='product__content-price-line'>-</span>
                                    <span className='product__content-price-sale'>${product.priceSale}</span>
                                </>
                                : product.price}</p>
                            <p className='product__content-choose'>Выберите размер</p>
                            <ul className='product__content-sizes'>
                                {
                                    product.size.map(item => (
                                        <li onClick={() => setSize(item)} className={`product__content-size ${item === size ? 'product__content-size_active' : ''} `}>{item}</li>
                                    ))
                                }
                            </ul>
                            <p className='product__content-choose'>Выберите цвет</p>
                            <ul className='product__content-sizes'>
                                {
                                    product.colors.map(item => (
                                        <li onClick={() => setColor(item)} style={{background: item}} className={`product__content-color ${item === color ? 'product__content-color_active' : ''}`}/>
                                    ))
                                }
                            </ul>
                            <div className='product__content-form'>
                                <input className='product__content-input' min='1' defaultValue='1' type="number"/>
                                <button className='product__content-btn' type='button'>Добавить в корзину</button>
                            </div>
                        </div>
                    </div>
                    <p className='product__similar'>Связанные товары</p>
                    <div className='product__row'>
                        <SliderProduct/>
                    </div>
                </>}
            </div>
        </section>
    );
};

export default Product;