import { connect } from "react-redux";
import MyPost from "../MyPosts";
import { actions } from "../../../../redux/profile-reducer";
import {AppStateType} from "../../../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText,
	}
}

const MyPostContainer = connect(mapStateToProps, {...actions})(MyPost);

export default MyPostContainer;