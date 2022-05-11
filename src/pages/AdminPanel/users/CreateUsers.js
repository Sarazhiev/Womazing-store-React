import React from 'react';
import { List, Datagrid, Edit, SelectArrayInput, SelectInput, NumberInput, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';


const CreateUsers = (props) => {
    return (
        <Create title="Create a Post" {...props}>
            <SimpleForm>
                <TextInput source="email" />
                <TextInput source="login" />
                <TextInput source="password" />
                <TextInput source="phone" />
            </SimpleForm>
        </Create>
    );
};

export default CreateUsers;