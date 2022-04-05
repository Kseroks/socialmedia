import { applyMiddleware, combineReducers, createStore, compose, } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
// import sidebarReducer from "./sidebar-reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	auth: authReducer,
	// sidebar: sidebarReducer,
});

// chrome extension
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// @ts-ignore
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)
));

// Простий стор
// let store = createStore(reducers, applyMiddleware(thunk));


export default store;