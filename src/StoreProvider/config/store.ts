import { configureStore } from '@reduxjs/toolkit';
import { messagesReducer } from '../../components/main/model/slice/messagesSlice';
import { userReducer } from '../../components/main/model/slice/userSlice';
import { usersReducer } from '../../components/main/model/slice/usersSlice';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            messages: messagesReducer,
            users: usersReducer,
            user: userReducer
        },
        preloadedState: initialState,
    });
}
