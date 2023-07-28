import { connect } from 'react-redux';
import { sendMessageCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        companions: state.dialogsPage.companions,
        
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (text) => {
            dispatch(sendMessageCreator(text));
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;
