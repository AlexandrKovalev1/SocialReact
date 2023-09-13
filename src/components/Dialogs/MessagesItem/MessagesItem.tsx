import classes from './MessagesItem.module.css';
import Message from './Message/Message';
import * as React from 'react'
import { InitialMessageType } from '../../../commonTypes/commonTypes';


type MessagesItemPropsType = {
    messages:Array<InitialMessageType>
}

const MessagesItem:React.FC<MessagesItemPropsType> = (props) => {

    let messageItem = props.messages.map(message =>
        <Message
            key={message.id}
            id={message.id}
            nameSender={message.nameSender}
            textMessage={message.textMessage}
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