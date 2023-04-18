import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import transactionsReducer from './transactions/transactionsSlice';
import statsReducer from './statistics/statsSlice';
import languageReducer from './lang/langSlice';
import themeReducer from './theme/themeSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'token', 'refreshToken', 'sid', 'isLoggedIn'],
};

const themePersistConfig = {
  key: 'theme',
  storage,
};

const langPersistConfig = {
  key: 'language',
  storage,
};


const persistedReducer = persistReducer(persistConfig, authSlice.reducer);
const persistedThemeReducer = persistReducer(themePersistConfig, themeReducer);
const persistedLangReducer = persistReducer(langPersistConfig, languageReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    transactions: transactionsReducer,
    statistics: statsReducer,
    language: persistedLangReducer,
    theme: persistedThemeReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
