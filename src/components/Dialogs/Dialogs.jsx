import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessagesItem from './MessagesItem/MessagesItem';
import { updateNewMessageTextActionCreator, sendMessageActionCreator } from '../../redux/state'

const Dialogs = (props) => {

    let dilogElements = props.dialogState.companions.map(dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} />);

    let editTextField = (event) => {
        let text = event.target.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }

    let addMessage = () => {
        let action = sendMessageActionCreator();
        props.dispatch(action);
    }


    return (
        <div className={classes.main__dialogs}>
            <h2 className={classes.heading}>Сообщения</h2>
            <div className={classes.content__wrapper}>
                <div className={classes.dialogs}>
                    <ul className={classes.dialogs__list}>
                        {dilogElements}
                    </ul>
                </div>
                <div className={classes.messages}>
                    <div className={classes.conversation__info}>
                        <div className={classes.companion}>
                            <img className={classes.companion__avatar} src='https://avatars.mds.yandex.net/i?id=4f872bd783d46ceda036375d6365b8b4b3c8cbee-8425275-images-thumbs&n=13' alt="" />
                            <div className={classes.companion__info}>
                                <span className={classes.companion__name}>Света</span>
                                <small className={classes.companion__status}>online</small>
                            </div>
                        </div>
                        <div className={classes.delete}>
                            <span>Удалить переписку</span>
                        </div>
                    </div>
                    <MessagesItem messages={props.dialogState.messages} />
                    <div className={classes.text__field}>
                        <div className={classes.text__area__wrapper}>
                            <textarea
                                value={props.dialogState.newMessageText}
                                onChange={editTextField}
                                className={classes.new__message}
                            />
                            <button className={classes.button} onClick={addMessage}>Отправить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
