import React from 'react';
import img from "../../../Assets/Home/home-new.png";

const CollectionCard = ({img, title, priceThrough}) => {
    return (
        <div className="collection__content-card">
            <img className='collection__content-img' src={img} alt="t-short"/>
            <p className='collection__content-text'>
                {title}
            </p>
            <div className='collection__content-prices'>
                <span className='collection__content-price collection__content-through'>{priceThrough}</span>
                <span className='collection__content-price'>$129</span>
            </div>
        </div>
    );
};

export default CollectionCard;