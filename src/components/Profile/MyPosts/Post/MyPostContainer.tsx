import { connect } from "react-redux";
import MyPost from "../MyPosts";
import { AddPostAc } from "../../../../redux/profile-reducer";


const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addPost: (newPostText) => {
			dispatch(AddPostAc(newPostText));
		},
	}
}



const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;