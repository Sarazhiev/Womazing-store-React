import React, {useContext, useEffect, useState} from 'react';
import {Link, NavLink, useLocation, useParams} from 'react-router-dom'
import axios from "axios";
import {useTranslation} from "react-i18next";
import {CustomContext} from "../../Context";
import SliderProduct from "./SliderProduct/SliderProduct";
import {LazyLoadImage} from 'react-lazy-load-image-component'

const Product = () => {

    const params = useParams();
    const location = useLocation();
    const [sale, setSale] = useState(false);
    const [saleCount, setSaleCount] = useState(0);
    const [size, setSize] = useState('');
    const [count, setCount] = useState(1);
    const {setPage, setStatus, shop, product, setProduct, addCart, getAllClothes, color, setColor} = useContext(CustomContext);
    const {t} = useTranslation();
    useEffect(() => {
        axios(`http://localhost:8080/clothes/${params.id}`)
            .then(({data}) => {
                setProduct(data);
                setColor(data.colors[0]);
                setSize(data.size[0])
            })
    }, [location, shop]);
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
                            setStatus(product.category)}}>{product.category}</NavLink>
                        -
                        <p className="product__unlink">{product.title}</p>
                    </div>
                    <div className="product__content">
                        <LazyLoadImage
                            src={`../${product.image[color]}`}
                            effect='blur'
                            className='product__content-img'
                        />
                        <div className="product__content-info">

                            {
                                !product.priceSale ?
                                    <>
                                        {sale ? <input className='product__content-inputSale' value={saleCount} onChange={(e) => setSaleCount(e.target.value)} type="number"/> : ''}

                                        <button className='product__content-btnSale' type='button' onClick={() => {
                                            if (sale) {
                                                axios.patch(`http://localhost:8080/clothes/${product.id}`, {priceSale: product.price - product.price / 100 * saleCount})
                                                    .then(() => {
                                                        getAllClothes();
                                                        setSaleCount(0)
                                                    })
                                            }
                                            setSale(!sale);
                                        }}>Добавить {sale ? '' : 'скидку'}</button>
                                    </>
                                    : ''
                            }

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
                                        <li key={item} onClick={() => setSize(item)} className={`product__content-size ${item === size ? 'product__content-size_active' : ''} `}>{item}</li>
                                    ))
                                }
                            </ul>
                            <p className='product__content-choose'>Выберите цвет</p>
                            <ul className='product__content-sizes'>
                                {
                                    product.colors.map(item => (
                                        <li key={item} onClick={() => setColor(item)} style={{background: item, border: '1px solid grey', cursor: 'pointer'}} className={`product__content-color ${item === color ? 'product__content-color_active' : ''}`}/>
                                    ))
                                }
                            </ul>
                            {
                                product.inStock ?
                                    <p className='product__content-choose'>
                                        В наличии : <span>{product.inStock}</span>
                                    </p> :
                                    <p className='product__content-choose'>
                                        Нет в наличии !
                                    </p>
                            }
                            <div className='product__content-form'>
                                <input className='product__content-input' style={{color: !product.inStock ? "grey" : "black"}} disabled={!product.inStock} min='1'  max={product.inStock} value={count} onChange={(e) => setCount(e.target.value >= product.inStock ? product.inStock : e.target.value)} type="number"/>
                                <button className='product__content-btn' style={{background: !product.inStock ? "grey" : "#6E9C9F"}} disabled={!product.inStock} type='button' onClick={() => addCart({
                                    id: product.id,
                                    title: product.title,
                                    image: product.image,
                                    color,
                                    size,
                                    count,
                                    price: product.priceSale || product.price,
                                    category: product.category
                                })}>Добавить в корзину</button>
                            </div>
                        </div>
                    </div>
                    <p className='product__similar'>Связанные товары</p>
                    <div className='product__row'>
                        <SliderProduct />
                    </div>
                </>}
            </div>
        </section>
    );
};

export default Product;