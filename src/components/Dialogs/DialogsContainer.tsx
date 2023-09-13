import { connect } from 'react-redux';
import {sendMessageCreator } from '../../redux/dialogsReducer.ts'
import Dialogs from './Dialogs.tsx';
import { AppStateType } from '../../redux/reduxStore.ts';
import { InitialCompanionItemType, InitialMessageType } from '../../commonTypes/commonTypes.ts';
import { Dispatch } from 'react';


type MapStateToProps = {
    messages: Array<InitialMessageType>
    companions: Array<InitialCompanionItemType>
}

type MapDispatchToProps = {
    sendMessage: (text: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        messages: state.dialogsPage.messages,
        companions: state.dialogsPage.companions,

    }
};

let mapDispatchToProps = (dispatch:Dispatch<any>): MapDispatchToProps => {
    return {
        sendMessage: (text: string) => {
            dispatch(sendMessageCreator(text));
        },
    }
}

const DialogsContainer = connect<MapStateToProps, MapDispatchToProps, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;
