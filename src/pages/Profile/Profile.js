import React from 'react';
import {BsPencilFill} from 'react-icons/bs'
import './profile.scss'


const Profile = () => {

    return (
        <section className="profile">
            <div className="container">
                <div className='profile__header'>
                    <h2 className='profile__title'>Мой аккаунт</h2>
                    <div className='profile__btns'>
                        <button className='profile__btn'>История заказов</button>
                        <button className='profile__btn2'>Настройки</button>
                    </div>
                </div>
                <div className="profile__content">
                    <div className="profile__change">
                        <h3 className='profile__content-title'>Личные данные</h3>
                        <span className='profile__content-write'>
                        <BsPencilFill/>
                        Изменить
                    </span>
                    </div>

                    <div className="profile__info">
                        <p className='profile__info-about'>
                            <span className='profile__info-upper'>Имя</span>
                            Вадим
                        </p>
                        <p className='profile__info-about'>
                            <span className='profile__info-upper'>Номер телефона*:</span>
                            +996505505505
                        </p>
                        <p className='profile__info-about'>
                            <span className='profile__info-upper'>Почта</span>
                            vadim.haha@gmail.com
                        </p>
                        <p className='profile__info-about'>
                            <span className='profile__info-upper'>Дата рождения</span>
                            1996.10.05
                        </p>
                    </div>
                </div>
                <div className='profile__content'>
                    <div className="profile__change">
                        <h3 className='profile__content-title'>Пароль</h3>
                        <span className='profile__content-write'>
                        <BsPencilFill/>
                        изменить
                    </span>
                    </div>
                </div>
                <div className='profile__content'>
                    <div className="profile__bottom-info">
                        <h3 className='profile__content-title'>Подписки</h3>
                        <span className='profile__content-footer'>
                        <input  type="checkbox"/> Получать предложения и акции
                    </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;