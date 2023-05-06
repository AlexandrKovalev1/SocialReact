import classes from './Message.module.css'

const Message = (props) => {
    return (
        <li className={props.id === 'myId'
            ? classes.my__messageItem
            : classes.messageItem} >
            <div className={classes.avatar}>
                <img className={classes.avatar__img} src={props.avatar} alt="avatar" />
            </div>
            <div className={props.id === 'myId'
                ? classes.my__message
                : classes.message}>
                <p className={classes.text}>
                    {props.message}
                </p>
            </div>
        </li>
    )
}

export default Message;