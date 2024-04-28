import * as React from "react";
import { Edit, SimpleForm, TextInput, NumberInput, ReferenceInput, SelectInput } from 'react-admin';
import { useRecordContext } from 'react-admin';

const PostTitle = () => {
    const record = useRecordContext();
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit: React.FC = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" />
            <TextInput source="body" /*options={{ multiline: true }}*/ />
            <ReferenceInput source="userId" reference="users" label="User">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

//export default PostEdit;