import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import cartReducer from './cartSlice';
import grandTotalReducer from './grandTotalSlice';

import {
  persistStore,
  persistReducer, REGISTER,FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  cart: cartReducer,
  grandTotal:grandTotalReducer
});

const persistconfig ={
    key:'root',
    storage,
}

const persistedReducer = persistReducer(persistconfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),

})
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch