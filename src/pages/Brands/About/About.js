import React from 'react';
import {useTranslation} from "react-i18next";
import {Link, NavLink} from "react-router-dom";
import './about.scss'

const About = () => {
    const {t} = useTranslation();

    return (
        <section className="about">
            <div className="container">
                <h2 className="about__title" dangerouslySetInnerHTML={{__html: t("brands.about.title")}}/>
                <div className="about__links">
                    <Link className="about__link" to='/'>{t("brands.about.link1")}</Link>
                    -
                    <NavLink className="about__link" to='/brands'>{t("brands.about.link2")}</NavLink>
                </div>
            </div>
        </section>
    );
};

export default About;