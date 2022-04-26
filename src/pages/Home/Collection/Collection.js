import React from 'react';
import {Link, NavLink} from "react-router-dom"

import CollectionCard from "./CollectionCard";
import tshort1 from "../../../Assets/Home/Collection/t-short-1.png";
import tshort2 from "../../../Assets/Home/Collection/t-short-2.png";
import tshort3 from "../../../Assets/Home/Collection/t-short-3.png";
import {useTranslation} from "react-i18next";

const Collection = () => {
    const {t} = useTranslation();
    return (
        <section className='collection'>
            <div className="container">
                <h2 className="collection__title">{t("home.collection.title")}</h2>
                <div className="collection__content">
                    <CollectionCard img={tshort1} title={t("home.collection.text1")} priceThrough={<span className='collection__content-price collection__content-through'>$229</span>}/>
                    <CollectionCard img={tshort2} title={t("home.collection.text2")} />
                    <CollectionCard img={tshort3} title={t("home.collection.text3")} />
                </div>
                <Link to='shop'>
                <button type='button' className="collection__btn">
                    {t("home.collection.btn")}
                </button>
                </Link>
            </div>
        </section>
    );
};

export default Collection;