import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage' //using localstorage
import comparisonReducer from "./compare/compare.reducer";
import historyReducer from "./history/history.reducer";


// represent all the state(reducer) for the App

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'comparison', 'history'] //what i want to persist
}

const rootReducer = combineReducers({
    user: userReducer,
    comparison: comparisonReducer,
    history: historyReducer
    
})

export default  persistReducer(persistConfig, rootReducer)
