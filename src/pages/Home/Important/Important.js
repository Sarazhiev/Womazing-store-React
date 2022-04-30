import React from 'react';
import ImportantCard from "./ImportantCard";
import icon1 from "../../../Assets/Home/Important/icon1.png";
import icon2 from "../../../Assets/Home/Important/icon2.png";
import icon3 from "../../../Assets/Home/Important/icon3.png";
import {useTranslation} from "react-i18next";

const Important = () => {
    const {t} = useTranslation();
    return (
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
    );
};

export default Important;