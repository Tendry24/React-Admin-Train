import * as React from 'react';
import { Edit, SimpleForm, TextInput, required } from 'react-admin';

const CommentEdit = (props: any) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput source="name" validate={required()} />
                <TextInput source="email" validate={required()} />
                <TextInput source="body" validate={required()} />
            </SimpleForm>
        </Edit>
    );
};

export default CommentEdit;