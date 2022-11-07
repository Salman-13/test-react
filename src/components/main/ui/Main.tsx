import { useDispatch, useSelector } from 'react-redux';
import { addMessage, getMessagesRequest, getUserRequest, getUsersRequest } from '../model/requests/requests';
import { useEffect, useState } from 'react';
import { getMessages } from '../model/selectors/getMessages/getMessages';
import { getUser } from '../model/selectors/getUser/getUser';
import { StateSchema } from '../../../StoreProvider';
import { MessageSchema } from '../model/types/MessagesSchema';
import { UserSchema } from '../model/types/UserSchema';
import Comment from './Comment/Comment';
import Textarea from './Textarea/Textarea';
import './Main.scss'

export const Counter = () => {
    const dispatch = useDispatch();
    const messages = useSelector<StateSchema, MessageSchema[]>(getMessages)
    const user = useSelector<StateSchema, UserSchema>(getUser)
    const [sendMessage, setSendMessage] = useState(''); 

    useEffect(() => {
        dispatch(getUsersRequest());
        dispatch(getUserRequest())
    }, [dispatch])

    useEffect(() => {
        dispatch(getMessagesRequest());
    }, [dispatch, messages.length])

    const onClickSend = () => {
        dispatch(addMessage({
            author: decodeURIComponent(user.id),
            message: sendMessage
        }))
        setSendMessage('')
    }

    const messageResult = [
        ...messages
    ]
    return (
        <div className='main'> 
            {
                messageResult.map((message: MessageSchema) => <Comment message={message} key={message.id}/>)
            }
            <Textarea value={sendMessage} onChange={(e) => setSendMessage(e)} placeholder="Введите сообщение"/>
            <div className='main-send-button' onClick={onClickSend}>
                        Отправить
            </div>
            
        </div>
    );
};
