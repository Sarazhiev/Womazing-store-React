import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import './crumbs.scss'

const ContactHeader = () => {

    const {t} = useTranslation();

    return (
        <section className="contactHeader">
            <div className="container">
                <h2 className="contactHeader__title" dangerouslySetInnerHTML={{__html: t("contacts.crumbs.title")}}/>
                <div className="contactHeader__links">
                    <Link className="contactHeader__link" to='/'>{t("contacts.crumbs.link1")}</Link>
                    -
                    <NavLink className="contactHeader__link" to='/contact'>{t("contacts.crumbs.link2")}</NavLink>
                </div>
            </div>
        </section>
    );
};

export default ContactHeader;