// import { applyMiddleware, combineReducers, createStore, compose, } from "redux";
// import dialogsReducer from "./dialogs-reducer.ts";
// import profileReducer from "./profile-reducer.ts";
// import usersReducer from "./users-reducer.ts";
// import authReducer from "./auth-reducer.ts";
// // import sidebarReducer from "./sidebar-reducer";
// import thunk from "redux-thunk";

// let reducers = combineReducers({
// 	profilePage: profileReducer,
// 	dialogsPage: dialogsReducer,
// 	usersPage: usersReducer,
// 	auth: authReducer,
// 	// sidebar: sidebarReducer,
// });

// // chrome extension
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)
// ));

// // Простий стор
// // let store = createStore(reducers, applyMiddleware(thunk));


// export default store;