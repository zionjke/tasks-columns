import {combineReducers, createStore} from "redux";
import panelsReducer from "./reducers/panelsReducer";

const rootReducer = combineReducers({
    panels:panelsReducer
});

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store