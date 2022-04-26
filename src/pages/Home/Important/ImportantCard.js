import React from 'react';
import img from "../../../Assets/Home/home-new.png";


const ImportantCard = ({img, title, text}) => {
    return (
        <div className="important__content-card">
            <img src={img} alt="icon"/>
            <h2 className="important__content-info">{title}</h2>
            <p className="important__content-text">{text}</p>
        </div>
    );
};

export default ImportantCard;