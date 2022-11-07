import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/UserSchema';
import { getUsersRequest } from '../requests/requests';

const initialState: User = {
    answer: {
        me: {
          id: ''
       }
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUser: (state, action: PayloadAction<User>) => {
            state.answer = action.payload.answer
        }
    }
});


export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;