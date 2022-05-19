import React from 'react';
import {Create, SimpleForm, TextInput} from 'react-admin';


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