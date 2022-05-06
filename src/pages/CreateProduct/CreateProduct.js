import React, {useContext, useState} from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import CreateColors from "./CreateColors";
import CreateSizes from "./CreateSizes";
import axios from "axios";
import {CustomContext} from "../../Context";

const CreateProduct = () => {
    const {getAllClothes} = useContext(CustomContext);
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const {t} = useTranslation();
    const {register, reset, handleSubmit} = useForm();
    const navigate = useNavigate();


    const createProduct = (data) => {
        axios.post('http://localhost:8080/clothes', {
            ...data,
            colors,
            size: sizes,
            image: 'Shop/' + data.image[0].name
        }).then(() => {
            getAllClothes();
            navigate('/shop')
        })
    };


    return (
        <section className="create">
            <div className="container">
                <h2 className="create__title">Создать продукт</h2>
                <div className="contactHeader__links">
                    <Link className="contactHeader__link" to='/'>{t("contacts.crumbs.link1")}</Link>
                    -
                    <NavLink className="contactHeader__link" to='/shop'>Магазин</NavLink>
                    -
                    <NavLink className="contactHeader__link" to='/create'>Создание товара</NavLink>
                </div>
                <form className='create__form' onSubmit={handleSubmit(createProduct)}>
                    <div>
                        <label htmlFor="title">Название</label>
                        <input {...register('title')} type="text" id='title'/>
                    </div>
                    <div>
                        <label htmlFor="price">Цена</label>
                        <input {...register('price')} type="number" id='price'/>
                    </div>
                    <div>
                        <label htmlFor="inStock">Количество</label>
                        <input {...register('inStock')} type="number" id='inStock'/>
                    </div>
                    <div>
                        <label htmlFor="image">Картинка</label>
                        <input {...register('image')} type="file" id='image'/>
                    </div>
                    <div>
                        <ul>
                            <CreateColors colors={colors} setColors={setColors} color='blue'/>
                            <CreateColors colors={colors} setColors={setColors} color='black'/>
                            <CreateColors colors={colors} setColors={setColors} color='white'/>
                            <CreateColors colors={colors} setColors={setColors} color='red'/>
                            <CreateColors colors={colors} setColors={setColors} color='green'/>
                            <CreateColors colors={colors} setColors={setColors} color='orange'/>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <CreateSizes sizes={sizes} setSizes={setSizes} size='XS'/>
                            <CreateSizes sizes={sizes} setSizes={setSizes} size='S'/>
                            <CreateSizes sizes={sizes} setSizes={setSizes} size='M'/>
                            <CreateSizes sizes={sizes} setSizes={setSizes} size='L'/>
                            <CreateSizes sizes={sizes} setSizes={setSizes} size='XL'/>
                            <CreateSizes sizes={sizes} setSizes={setSizes} size='XXL'/>
                        </ul>
                    </div>
                    <div>
                        <label htmlFor="category">Категория</label>
                        <select {...register('category')} id='category'>
                            <option >hoody</option>
                            <option >sportsuit</option>
                            <option >sweatshirt</option>
                            <option >tshort</option>
                        </select>
                    </div>
                    <button type='submit'>Создать</button>
                </form>
            </div>
        </section>
    );
};

export default CreateProduct;