import { timeStamp } from 'console';
import { useSelector } from 'react-redux';
import { StateSchema } from '../../../../StoreProvider';
import { getMessages } from '../../model/selectors/getMessages/getMessages';
import { getUsers } from '../../model/selectors/getUsers/getUsers';
import { MessageSchema } from '../../model/types/MessagesSchema';
import { UsersSchema } from '../../model/types/UsersSchema';
import './Comment.scss';

interface CommentProps {
    message: MessageSchema;
}

const Comment = ({message}: CommentProps) => {
    const messages = useSelector<StateSchema, MessageSchema[]>(getMessages)
    const users = useSelector<StateSchema, UsersSchema[]>(getUsers)
    const data = new Date(message?.timestamp).toLocaleString()

    const resultMessage = decodeURIComponent(message.message).length > 100 ? decodeURIComponent(message.message).substring(0, 100) + '...': decodeURIComponent(message.message).substring(0, 100)
    
    const author: UsersSchema = users.find((user: UsersSchema) => user.id === message.author)

    return (
        <div>
            
            <div className='comment'>
                <div className={`comment-avatar ${author.image ? '': 'back-color'}`}>
                    <img src={author?.image} alt="" />
                </div>
                <div className='comment-info'>
                    <h1 className='comment-author'>
                        {`${decodeURIComponent(author?.name || '')} ${decodeURIComponent(author?.surname || '')}`}
                    </h1>
                    <div>
                        {resultMessage}
                    </div>
                    <button className='comment-button-more'>
                        Подробнее
                    </button>
                    <div className='comment-bar'>
                        📅{data}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comment;