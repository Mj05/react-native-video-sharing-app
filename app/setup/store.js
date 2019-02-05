import { createStore, applyMiddleware, compose } from "redux";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native
import Reducers from "./reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { persistStore, persistReducer } from "redux-persist";

const sagaMiddleware = createSagaMiddleware();
const middleWare = [sagaMiddleware];

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, Reducers);

// Add the autoRehydrate middleware to your redux store
const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middleWare))
);

sagaMiddleware.run(rootSaga);

let persistor = persistStore(store);

// Enable persistence
export default { store, persistor };
