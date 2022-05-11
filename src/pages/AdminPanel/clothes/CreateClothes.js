import React from 'react';
import { List, Datagrid, Edit, SelectArrayInput, SelectInput, NumberInput, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';


const CreateClothes = (props) => {
    return (
        <Create title="Create a Post" {...props}>
            <SimpleForm>
                <TextInput source="title" />
                <NumberInput source="price" />
                <NumberInput source="priceSale" />
                <SelectInput source="category" choices={[
                    {
                        id: "hoody",
                        name: "hoody"
                    },
                    {
                        id: "sportsuit",
                        name: "sportsuit"
                    },
                    {
                        id: "tshort",
                        name: "tshort"
                    },
                    {
                        id: "sweatshirt",
                        name: "sweatshirt"
                    },
                ]}/>
                <SelectArrayInput source="size" choices={[
                    {
                        id: "xs",
                        name: "xs"
                    },
                    {
                        id: "s",
                        name: "s"
                    },
                    {
                        id: "m",
                        name: "m"
                    },
                    {
                        id: "l",
                        name: "l"
                    },
                    {
                        id: "xl",
                        name: "xl"
                    },
                    {
                        id: "xxl",
                        name: "xxl"
                    },
                ]}/>
                <SelectArrayInput source="colors" choices={[
                    {
                        id: "black",
                        name: "black"
                    },
                    {
                        id: "white",
                        name: "white"
                    },
                    {
                        id: "green",
                        name: "green"
                    },
                    {
                        id: "blue",
                        name: "blue"
                    },
                    {
                        id: "orange",
                        name: "orange"
                    },
                    {
                        id: "red",
                        name: "red"
                    },
                ]}/>
            </SimpleForm>
        </Create>
    );
};

export default CreateClothes;