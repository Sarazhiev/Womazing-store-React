import React from 'react';
import {BsPencilFill} from 'react-icons/bs'
import './profile.scss'


const Profile = () => {

    return (
        <section className="profile">
            <div className="container">
                <h2>Мой аккаунт</h2>
                <div className="profile__content">
                    <div className="profile__change">
                        <h3>Личные данные</h3>
                        <span>
                        <BsPencilFill/>
                        имменить
                    </span>
                    </div>

                    <div className="profile__info">
                        <p>
                            <span>Имя</span>
                            Вадим
                        </p>
                        <p>
                            <span>Тел:</span>
                            +996505505505
                        </p>
                        <p>
                            <span>Почта</span>
                            vadim.haha@gmail.com
                        </p>
                        <p>
                            <span>Дата рождения</span>
                            1996.10.05
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;