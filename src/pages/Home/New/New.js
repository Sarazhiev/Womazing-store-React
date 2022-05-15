import React, {useContext} from 'react';
import img from "../../../Assets/Home/home-new.png";
import {BsArrowDown} from "react-icons/bs";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {LazyLoadImage} from 'react-lazy-load-image-component'

const New = () => {
    const {t} = useTranslation();
    return (
        <section className='new'>
            <div className="container">
                <div className='new__content'>
                    <div className='new__content-left'>
                        <h2 className='new__title' dangerouslySetInnerHTML={{__html: t("home.new.title")}}/>
                        <p className='new__subtitle' dangerouslySetInnerHTML={{__html: t("home.new.text")}}/>
                        <Link to='shop'>
                        <div className='new__btns'>
                            <button type='button' className='new__btn1'><BsArrowDown/></button>
                            <button type='button' className='new__btn2' dangerouslySetInnerHTML={{__html: t("home.new.btn")}}/>
                        </div>
                        </Link>
                    </div>
                    <div className='new__content-right'>
                        <LazyLoadImage
                            alt='woman'
                            src={img}
                            effect='blur'
                            className='new__img'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default New;