import { InitialMessageType } from '../../../../commonTypes/commonTypes';
import classes from './Message.module.css'
import * as React from 'react'


const Message:React.FC<InitialMessageType> = (props) => {
    return (
        <li className={props.nameSender === 'Boss'? classes.my__messageItem: classes.messageItem} >
            <div className={classes.avatar}>
                <img className={classes.avatar__img} src={props.avatar} alt="avatar" />
            </div>
            <div className={props.nameSender === 'Boss'? classes.my__message : classes.message}>
                <p className={classes.text}>
                    {props.textMessage}
                </p>
            </div>
        </li>
    )
}

export default Message;