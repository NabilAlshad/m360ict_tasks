import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './features/auth/login/loginSlice';

export const makeStore = () => {
	return configureStore({
		reducer: {
			[authApi.reducerPath]: authApi.reducer,
		},
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([authApi.middleware]),
	});
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];