import thunk from "redux-thunk";
import formReducer from "../form/formReducer";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";

const rootReducer = combineReducers({
  formReducer,
});

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
