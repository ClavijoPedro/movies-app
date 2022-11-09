import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const setUser = createAsyncThunk('user/setUser',
async (userData) => {
    const response = await axios.post('http://192.168.100.19:3000/auth/register', {
        email:userData.email,
        password:userData.password
    })
    return response.data
}
);

const initialState = {
	email: '',
	password: '',
	status: null,
};

const userSlice = createSlice({
	name: 'userInfo',
	initialState,
	reducers: {},
	extraReducers: {
		[setUser.fulfilled]: (state, action) => {
			state = action.payload;
			state.status = 'success';
		},
		[setUser.pending]: (state) => {
			state.status = 'loading';
		},
		[setUser.rejected]: (state) => {
			state.status = 'error';
		},
	},
});

export default userSlice.reducer;
