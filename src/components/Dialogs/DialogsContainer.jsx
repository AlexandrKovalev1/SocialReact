import { connect } from 'react-redux';
import { updateNewMessageTextCreator, sendMessageCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        companions: state.dialogsPage.companions,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        editMessageBody: (text) => {
            dispatch(updateNewMessageTextCreator(text));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;
