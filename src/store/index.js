import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import toDoReducer from "./todoSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, combineReducers({
    toDo: toDoReducer,
}))


// set up on configureStore
export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export const persistor = persistStore(store)