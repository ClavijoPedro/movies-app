import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const logIn = createAsyncThunk('auth/login', async (userData) => {
	const response = await axios.post('http://192.168.100.19:3000/auth/login', {
		email: userData.email,
		password: userData.password,
	});
	return response.data;
});

export const register = createAsyncThunk('auth/register', async (userData) => {
	const response = await axios.post('http://192.168.100.19:3000/auth/register', {
		email: userData.email,
		password: userData.password,
	});
	return response.data;
});

export const logOut = createAsyncThunk('auth/logout', async (userData) => {
	const response = await axios.post('http://192.168.100.19:3000/auth/logout');
	return response;
});




const initialState = {
	user: null,
	loading: false,
	loggedIn: false,
	error: null,
};

const authSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: {
		[logIn.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.user = payload;
			state.loggedIn = true;
		},
		[logIn.pending]: (state) => {
			state.loading = true;
		},
		[logIn.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},

        // register
		[register.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.user = payload;
			state.loggedIn = true;
		},
		[register.pending]: (state) => {
			state.loading = true;
		},
		[register.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
        
        // logout
		[logOut.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.user = null;
			state.loggedIn = false;
		},

		[logOut.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
	},
});

export default authSlice.reducer;
