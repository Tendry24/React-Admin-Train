import * as React from "react";
import { Create, SimpleForm, TextInput } from 'react-admin';

const PostCreate = (props: any) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput  source="id" />
            <TextInput source="title" />
            <TextInput source="name"/>
            <TextInput source="body"/>
        </SimpleForm>
    </Create>
);

export default PostCreate;