import classes from './MessagesItem.module.css';
import Message from './Message/Message';


const MessagesItem = (props) => {

    let messageItem = props.messages.map(message =>
        <Message
            key={message.id}
            id={message.id}
            nameSender={message.nameSender}
            message={message.textMessage}
            avatar={message.avatar}
        />
    ).reverse()

    return (
        <ul className={classes.messages__list}>
            {messageItem}
        </ul>
    )
}

export default MessagesItem;