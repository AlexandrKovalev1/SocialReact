import * as React from 'react'
import classes from './Dialogs.module.css';
import CompanionItem from './CompanionItem/CompanionItem';
import MessagesItem from './MessagesItem/MessagesItem';
import { Formik, Field } from 'formik';
import { InitialMessageType, InitialCompanionItemType } from '../../commonTypes/commonTypes';


type DialogsPropsType = {
    companions: Array<InitialCompanionItemType>
    messages: Array<InitialMessageType>

    sendMessage: (text:string) => void
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsItem = props.companions.map(companion =>
        <CompanionItem
            key={companion.id}
            id={companion.id}
            name={companion.name}
            avatar={companion.avatar}
            status={companion.status}
        />
    )


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
                    <FormSendMessage sendMessage={props.sendMessage} />
                </div>
            </div>
        </div>
    )
}


type FormSendMessagePropsType = {
    sendMessage: (text: string) => void
}

type FormikValuesType = {
    text:string
}

const FormSendMessage:React.FC<FormSendMessagePropsType> = (props) => {

    const submit = (values:FormikValuesType, { setSubmitting }) => {
        props.sendMessage(values.text)
        values.text = '';
        setSubmitting(false);
    }
    return (
        <Formik
            initialValues={{ text: '' }}
            onSubmit={submit}
        >
            {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form onSubmit={handleSubmit} className={classes.text__field}>
                    <div className={classes.text__area__wrapper}>
                        <Field
                            name={'text'}
                            component={'textarea'}
                            className={classes.new__message}
                            value={values.text}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={classes.button}>
                            Отправить
                        </button>
                    </div>
                </form>
            )}
        </Formik>
    )

}

export default Dialogs;
