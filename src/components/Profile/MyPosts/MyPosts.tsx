import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import AddNewPostForm from "./AddNewPostForm";
import { PostType } from "../../../types/types";
import { actions } from "../../../redux/profile-reducer";

interface PropsType {
  posts: Array<PostType>;
}

const MyPost: React.FC<PropsType> = (props) => {
  const postElement = props.posts.map((post, i) => {
    return <Post key={i} message={post.message} likesCount={post.likesCount} />;
  });

  const onAddPost = (values: any) => {
    actions.AddPostAc(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      My posts
      <AddNewPostForm onAddPost={onAddPost} />
      <div className={s.post}>{postElement}</div>
    </div>
  );
};

export default MyPost;
