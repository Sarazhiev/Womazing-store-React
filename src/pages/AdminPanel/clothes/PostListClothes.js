import React from 'react';
import { List, Datagrid, DeleteButton, TextField, EditButton} from 'react-admin';


const PostListClothes = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="title" />
                <TextField source="price" />
                <TextField source="priceSale" />
                <TextField source="category" />
                <EditButton />
                <DeleteButton/>
            </Datagrid>
        </List>
    );
};

export default PostListClothes;