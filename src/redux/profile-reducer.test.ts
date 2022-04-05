import profileReducer, { AddPostAc, DeletePostAc } from "./profile-reducer";

let state = {
	posts: [
		{ id: 1, message: "Hello,Im from Ukraine", likesCount: 0, },
		{ id: 3, message: "How do you do?", likesCount: 3, },
		{ id: 4, message: "1", likesCount: 5, },
		{ id: 5, message: "Do you live here?", likesCount: 1, },
	]
};

it('length of posts should be increment', () => {

	let action = AddPostAc("Hello");

	let newState = profileReducer(state, action);
	expect(newState.posts.length).toBe(5);
	expect(newState.posts[4].message).toBe("Hello");
});

it('message of new post should be "Hello" correct', () => {

	let action = AddPostAc("Hello");

	let newState = profileReducer(state, action);
	expect(newState.posts[4].message).toBe("Hello");
});

it('after deleting length of message should be decrement', () => {

	let action = DeletePostAc();

	let newState = profileReducer(state, action);
	expect(newState.posts.length).toBe(4);
});

it("after deleting length shouldn't be decrement if id is incorrect", () => {

	let action = DeletePostAc(300);

	let newState = profileReducer(state, action);
	expect(newState.posts.length).toBe(4);
});