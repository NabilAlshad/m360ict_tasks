import { signUpApi } from '@/api/auth/authAPIs';
import { postSignUpValues } from '@/types/interfaces';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface signupDataState {
	data: postSignUpValues | null;
	loading: boolean;
	error: string | null;
}
const initialState: signupDataState = {
	data: null,
	loading: false,
	error: null,
};

export const postData = createAsyncThunk<postSignUpValues, { email: string; password: string }>(
	'data/postData',
	async (payload) => {
		try {
			const response = await signUpApi(payload);
			return response.data;
		} catch (error) {
			throw error.response.data;
		}
	}
);

const signUpSlice = createSlice({
	name: 'signUp',
	initialState,
	reducers: {
		setData: (state, action: PayloadAction<postSignUpValues | null>) => {
			state.data = action?.payload;
			state.loading = false;
			state.error = null;
		},
		setLoading: (state) => {
			state.loading = true;
			state.error = null;
		},
		setError: (state, action: PayloadAction<string>) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});
export const { setData, setLoading, setError } = signUpSlice.actions;
export const selectData = (state: { data: signupDataState }) => state.data.data;
export default signUpSlice.reducer;
