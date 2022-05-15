import React from 'react';
import { List, Datagrid, Edit, DeleteButton, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';


const PostListOrders = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="price" />
                <TextField source="country" />
                <TextField source="city" />
                <TextField source="phone" />
                <EditButton />
                <DeleteButton/>
            </Datagrid>
        </List>
    );
};

export default PostListOrders;