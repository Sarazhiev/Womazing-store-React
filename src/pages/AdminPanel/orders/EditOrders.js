import React from 'react';
import {Edit, SimpleForm, TextInput} from 'react-admin';


const EditOrders = (props) => {
    return (
        <Edit title={'Изменить заказ'} {...props}>
            <SimpleForm>
                <TextInput source="price" />
                <TextInput source="priceSale" />
                <TextInput  source="inStock" />
                <TextInput  source="phone" />
                <TextInput  source="city" />
                <TextInput  source="country" />
            </SimpleForm>
        </Edit>
    );
};

export default EditOrders;