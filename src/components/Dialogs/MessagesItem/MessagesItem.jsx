import classes from './MessagesItem.module.css';
import Message from './Message/Message';


const MessagesItem = (props) => {

    let messagesElements = props.messages.map(item => <Message text={item.message} id={item.id} avatar={item.avatar} />).reverse();

    return (
        <ul className={classes.messages__list}>
            {messagesElements}
        </ul>
    )
}

export default MessagesItem;