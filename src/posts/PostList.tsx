//import * as React from "react";
import { List, Datagrid, TextField, useRedirect ,FunctionField,ReferenceField,EditButton } from 'react-admin';
import { Button } from "@mui/material";

const PostList = (props :any) => {
    const redirect = useRedirect();
    const handleRedirect = (id : number) => {
        redirect(`/posts/${id}/comments`);
    };

    return (
        
        <List {...props}>  
            <Datagrid>
                <TextField source="id" />
                <TextField source="title" />
                <ReferenceField source="userId" reference="users" link="show">
                    <TextField source="name" />
                </ReferenceField>
                <FunctionField
                    label="View Comments"
                    render={(record: any) => (
                        <Button onClick={() => handleRedirect(record.id)}>View Comments</Button>
                    )}
                />
                <EditButton />
            </Datagrid>
        </List>
    );
};

export default PostList;