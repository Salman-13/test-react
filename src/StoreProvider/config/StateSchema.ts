import {Users} from '../../components/main/model/types/UsersSchema'
import { Messages } from '../../components/main/model/types/MessagesSchema';
import { User } from '../../components/main/model/types/UserSchema';

export interface StateSchema {
    users: Users;
    messages: Messages;
    user: User
}