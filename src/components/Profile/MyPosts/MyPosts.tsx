import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import AddNewPostForm from "./AddNewPostForm";

const MyPost = (props) => {
	const postElement = props.posts.map((post, i) => {
		return <Post key={i} message={post.message} likesCount={post.likesCount} />;
	});

	// const newPostElement = React.createRef();

	const onAddPost = (values) => {
		props.addPost(values);

	};

	return (
		<div className={s.postsBlock}>
			My posts
			<AddNewPostForm onAddPost={onAddPost} />
			<div className={s.post}>
				{postElement}
			</div>
		</div>
	);
};

export default MyPost;