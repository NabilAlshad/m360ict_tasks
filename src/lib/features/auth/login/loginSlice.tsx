import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
	reducerPath: 'signIn',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
	endpoints: (builder) => ({
		getSignIn: builder.query({
			query: () => 'posts',
		}),
	}),
});

export const { useGetSignInQuery } = authApi;
// export default authApi;
