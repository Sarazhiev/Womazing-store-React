import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import img from "../../Assets/basket.png";
import {CustomContext} from "../../Context";
import {ImCross} from 'react-icons/im'

const BasketCard = ({item}) => {
    const {deleteCart, updateCart, product} = useContext(CustomContext);
    const [count, setCount] = useState(item.count);
    return (

        <div className="basket__product">
            <div className='basket__product-left'>
                <p className='basket__product-mark' onClick={() => deleteCart(item.id, item.color, item.size)}><ImCross/></p>
                <Link className='shop__card-link' to={`/product/${item.id}`}>
                    <img className='basket__product-img' src={item.image[item.color]} alt={item.title}/>
                </Link>
                <p className='basket__product-name'>{item.title}</p>
            </div>

            <ul className="basket__info-list">
                <li className="basket__info-item">{item.size}</li>
                <li className="basket__info-item" style={{color: item.color === 'white' ? 'black' : item.color}}>{item.color}</li>
                <li className="basket__info-item">${item.price}</li>
                <li className="basket__info-item">
                    <input className='product__content-input'  min='1'  value={count} onChange={(e) => {
                        setCount(e.target.value >= product.inStock ? product.inStock : e.target.value);
                        updateCart(item.id, item.color, item.size, e.target.value)
                    }} type="number"/>
                </li>

                <li className="basket__info-item">${product.inStock >= item.count ? item.price * +item.count : item.price * item.count}</li>
            </ul>
        </div>
    );
};

export default BasketCard;