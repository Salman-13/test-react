import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getMessagesRequest } from '../requests/requests';
import { Messages, MessageSchema } from '../types/MessagesSchema';

const initialState: Messages = {
    answer: {
        messages: []
    },
    error: undefined
}

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        getMessages: (state, action: PayloadAction<Messages>) => {
            state.answer = action.payload.answer
        },
        updateMessages: (state, action: PayloadAction<MessageSchema>) => {
            
        },
    }
});


export const { actions: messagesActions } = messagesSlice;
export const { reducer: messagesReducer } = messagesSlice;
