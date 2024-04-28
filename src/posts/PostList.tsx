//import * as React from "react";
import { List, Datagrid, TextField, useRedirect ,FunctionField,ReferenceField } from 'react-admin';
import { Button } from "@mui/material";

const PostList = (props :any) => {
    const redirect = useRedirect();
    const handleCommentRedirect = (id : number) => {
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
                        <Button onClick={() => handleCommentRedirect(record.id)}>View Comments</Button>
                    )}
                />
            </Datagrid>
        </List>
    );
};

export default PostList;