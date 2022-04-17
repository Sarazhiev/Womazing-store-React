import React from 'react';
import {useTranslation} from "react-i18next";
import {BsArrowDown} from "react-icons/bs";
import img from '../../Assets/Home/home-new.png'
import tshort1 from '../../Assets/Home/Collection/t-short-1.png'
import tshort2 from '../../Assets/Home/Collection/t-short-2.png'
import tshort3 from '../../Assets/Home/Collection/t-short-3.png'
import icon1 from '../../Assets/Home/Important/icon1.png'
import icon2 from '../../Assets/Home/Important/icon2.png'
import icon3 from '../../Assets/Home/Important/icon3.png'
import CollectionCard from "./CollectionCard";
import ImportantCard from "./ImportantCard";


const Home = () => {
    const {t} = useTranslation();
    return (
            <main>
                <section className='new'>
                    <div className="container">
                        <div className='new__content'>
                            <div className='new__content-left'>
                                <h2 className='new__title' dangerouslySetInnerHTML={{__html: t("home.new.title")}}/>
                                <p className='new__subtitle' dangerouslySetInnerHTML={{__html: t("home.new.text")}}/>
                                <div className='new__btns'>
                                    <button type='button' className='new__btn1'><BsArrowDown/></button>
                                    <button type='button' className='new__btn2' dangerouslySetInnerHTML={{__html: t("home.new.btn")}}/>
                                </div>
                            </div>
                            <div className='new__content-right'>
                                <img src={img} alt="woman"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='collection'>
                    <div className="container">
                        <h2 className="collection__title">{t("home.collection.title")}</h2>
                        <div className="collection__content">
                            <CollectionCard img={tshort1} title={t("home.collection.text1")} priceThrough={<span className='collection__content-price collection__content-through'>$229</span>}/>
                            <CollectionCard img={tshort2} title={t("home.collection.text2")} />
                            <CollectionCard img={tshort3} title={t("home.collection.text3")} />
                        </div>
                        <button type='button' className="collection__btn">
                            {t("home.collection.btn")}
                        </button>
                    </div>
                </section>
                <section className='important'>
                    <div className="container">
                        <h2 className="important__title">{t("home.important.title")}</h2>
                        <div className="important__content">
                            <ImportantCard img={icon1} title={t("home.important.text1")} text={t("home.important.info1")}/>
                            <ImportantCard img={icon2} title={t("home.important.text2")} text={t("home.important.info2")}/>
                            <ImportantCard img={icon3} title={t("home.important.text3")} text={t("home.important.info3")}/>
                        </div>
                    </div>
                </section>
            </main>
    );
};

export default Home;