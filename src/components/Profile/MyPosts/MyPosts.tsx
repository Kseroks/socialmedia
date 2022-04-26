import { useSelector, useDispatch } from "react-redux";
import { ProfileSel } from "../../../selectors/profile-selectors";
import { AddNewPostForm } from "./AddNewPostForm";
import { actions } from "../../../redux/profile-reducer";
import { Post } from "./Post/Post";
import s from "./MyPosts.module.css";


export const MyPost: React.FC<any>= () => {
  const posts = useSelector(ProfileSel.getPosts);
  const dispatch = useDispatch();

  const postElement = posts.map((post, i) => {
    return <Post  key={i} message={post.message}
      likesCount={post.likesCount} />;
  });

  const onAddPost = (values: string) => {
    dispatch(actions.AddPostAc(values));
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostForm onAddPost={onAddPost} />
      <div className={s.post}>{postElement}</div>
    </div>
  );
};
