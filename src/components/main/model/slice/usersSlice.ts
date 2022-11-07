import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Users } from '../types/UsersSchema';
import { getUsersRequest } from '../requests/requests';

const initialState: Users = {
    answer: {
        users: []
    },
    error: undefined
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUsers: (state, action: PayloadAction<Users>) => {
            state.answer = action.payload.answer
        }
    }
});


export const { actions: usersActions } = usersSlice;
export const { reducer: usersReducer } = usersSlice;
