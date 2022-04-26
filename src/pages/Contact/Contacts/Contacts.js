import React from 'react';
import {useTranslation} from "react-i18next";
import './contacts.scss'

const Contacts = () => {
    const {t} = useTranslation();
    return (
        <section className="contacts">
            <div className="container">
                <div className="contacts__content">
                    <div className="contacts__info">
                        <h4 className="contacts__info-title" dangerouslySetInnerHTML={{__html: t("contacts.info.tel")}}/>
                        <a href="#" className="contacts__info-link">+7 (495) 823-54-12</a>
                    </div>
                    <div className="contacts__info">
                        <h4 className="contacts__info-title" dangerouslySetInnerHTML={{__html: t("contacts.info.eMail")}}/>
                        <a href="#" className="contacts__info-link">info@sitename.com</a>
                    </div>
                    <div className="contacts__info">
                        <h4 className="contacts__info-title" dangerouslySetInnerHTML={{__html: t("contacts.info.address")}}/>
                        <p className="contacts__info-link" dangerouslySetInnerHTML={{__html: t("contacts.info.street")}}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;