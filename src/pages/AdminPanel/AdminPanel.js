import React from 'react';
import './adminPanel.scss'
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import PostListClothes from "./clothes/PostListClothes";
import EditClothes from "./clothes/EditClothes";
import CreateClothes from "./clothes/CreateClothes";
import PostListUsers from "./users/PostListUsers";
import EditUsers from "./users/EditUsers";
import CreateUsers from "./users/CreateUsers";
import PostListOrders from "./orders/PostListOrders";
import EditOrders from "./orders/EditOrders";

const AdminPanel = () => {
    return (
        <section className='adminPanel'>
            <Admin dataProvider={restProvider('http://localhost:3000')}>
                <Resource create={CreateClothes} edit={EditClothes} name="clothes" list={PostListClothes}/>
                <Resource create={CreateUsers} edit={EditUsers} name="users" list={PostListUsers}/>
                <Resource edit={EditOrders}  name="orders" list={PostListOrders}/>
            </Admin>,
        </section>
    );
};

export default AdminPanel;