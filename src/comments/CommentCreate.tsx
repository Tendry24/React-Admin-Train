import * as React from 'react';
import { Create, SimpleForm, TextInput, required } from 'react-admin';

const CommentCreate = (props: any) => {
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="name" validate={required()} />
                <TextInput source="email" validate={required()} />
                <TextInput source="body" validate={required()} />
            </SimpleForm>
        </Create>
    );
};

export default CommentCreate;