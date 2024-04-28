import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { PostEdit } from "./posts/PostEdit"
import PostList from "./posts/PostList";
import PostCreate from "./posts/PostCreate";
import CommentList from "./comments/CommentList";
//import { CommentList, CommentEdit, CommentCreate } from './comments';

import dataProvider from "./dataProvider";


// homework
//json Placeholder

//posts crud
//posts/
// les elements des posts à afficher  id,title,user.name,commentButton
// Comments crud
//post/:id
// commentButton => /posts/:id/comments
// posts/:id/comments/
 // id,name,email
// posts/:id/comments/:id 

export const App = () => <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={PostEdit} show={PostList} create={PostCreate} /*edit={PostEdit} create={PostCreate}*/ />
        <Resource name="comments" list={CommentList} /*list={CommentList} edit={CommentEdit} create={CommentCreate}*/ />
</Admin>;
