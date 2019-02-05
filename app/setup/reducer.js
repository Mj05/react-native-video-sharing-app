import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native
import Auth from '../models/auth/reducer';
import Home from '../models/home/reducer';

const persistConfig = {
  key: "root",
  storage
};

const reducers = {
  Auth,
  Home
};

export default persistCombineReducers(persistConfig, reducers);
