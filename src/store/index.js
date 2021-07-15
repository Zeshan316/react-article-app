import { combineReducers,  createStore, compose} from "redux";
import articleReducer from "./reducers/article";



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
	articleStore: articleReducer
});

export const store = createStore(rootReducer, composeEnhancer());