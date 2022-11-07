import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {Users} from '../types/UsersSchema'
import {usersActions} from '../slice/usersSlice'
import { Messages, MessageSchema } from '../types/MessagesSchema';
import { messagesActions } from '../slice/messagesSlice';
import { User } from '../types/UserSchema';
import { userActions } from '../slice/userSlice';
import { ids } from 'webpack';

interface SendMessageProps {
    author: string;
    message: string
}

export const getUsersRequest = createAsyncThunk<Users>(
    'users/getUsers',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<Users>('http://localhost:8080/api/json/users');

            if (!response.data) {
                throw new Error();
            }

            thunkAPI.dispatch(usersActions.getUsers(response.data));

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);

export const getUserRequest = createAsyncThunk<User>(
    'user/getUser',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<User>('http://localhost:8080/api/json/me');

            if (!response.data) {
                throw new Error();
            }
            
            thunkAPI.dispatch(userActions.getUser(response.data));

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);

export const getMessagesRequest = createAsyncThunk<Messages>(
    'messages/getMessages',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<Messages>('http://localhost:8080/api/json/messages');

            if (!response.data) {
                throw new Error();
            }

            thunkAPI.dispatch(messagesActions.getMessages(response.data));

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);

export const addMessage = createAsyncThunk<MessageSchema, SendMessageProps, {rejectValue: string}>(
    'message/addMessage',
    async (props, thunkAPI) => {
        try {
            const response = await axios.post<MessageSchema>('http://localhost:8080/api/json/message', props);

            if (!response.data) {
                throw new Error();
            }
            thunkAPI.dispatch(getMessagesRequest());

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);