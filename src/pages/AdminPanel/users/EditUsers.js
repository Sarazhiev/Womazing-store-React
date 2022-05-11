import React from 'react';
import { List, Datagrid, Edit, SelectArrayInput, SelectInput, NumberInput, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';


const EditUsers = (props) => {
    return (
        <Edit title={'Изменить пользователя'} {...props}>
            <SimpleForm>
                <TextInput source="email" />
                <TextInput source="password" />
                <TextInput source="login" />
                <TextInput source="phone" />
            </SimpleForm>
        </Edit>
    );
};

export default EditUsers;