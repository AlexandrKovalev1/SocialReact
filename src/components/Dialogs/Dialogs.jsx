import classes from './Dialogs.module.css';
import CompanionItem from './CompanionItem/CompanionItem';
import MessagesItem from './MessagesItem/MessagesItem';

const Dialogs = (props) => {

    let dialogsItem = props.companions.map(companion =>
        <CompanionItem
            key={companion.id}
            id={companion.id}
            name={companion.name}
            avatar={companion.avatar}
            status = {companion.status}
        />
    )

    const onChangeMessageBody = (event) => {
        let text = event.target.value;
        props.editMessageBody(text);
    }

    const sendMessage = () => {
        props.sendMessage();
    }


    return (
        <div className={classes.main__dialogs}>
            <h2 className={classes.heading}>Сообщения</h2>
            <div className={classes.content__wrapper}>
                <div className={classes.dialogs}>
                    <ul className={classes.dialogs__list}>
                        {dialogsItem}
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
                    <MessagesItem messages={props.messages} />
                    <div className={classes.text__field}>
                        <div className={classes.text__area__wrapper}>
                            <textarea
                                className={classes.new__message}
                                value={props.newMessageText}
                                onChange={onChangeMessageBody}
                            />
                            <button className={classes.button} onClick={sendMessage}>Отправить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
