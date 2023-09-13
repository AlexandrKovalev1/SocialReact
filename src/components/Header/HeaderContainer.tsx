import * as React from 'react'
import { connect } from "react-redux";
import Header from './Header.tsx'
import { logout } from "../../redux/authReducer.ts";
import { getIsAuth, getIsFetching } from "../../redux/auth-selectors.ts";
import { AppStateType } from '../../redux/reduxStore.ts';



type PropsType = {

}

type MapStatePropsType = {
    isAuth: boolean
    isFetching: boolean
}

type MapDispatchPropsType = {
    logout: () => void
}




const HeaderContainer: React.FC<PropsType & MapStatePropsType & MapDispatchPropsType> = (props) => {

    return (
        <Header
            isAuth={props.isAuth}
            isFetching={props.isFetching}
            logout={props.logout}
        />
    )
}


let mapStateToProps = (state: AppStateType) => ({
    isAuth: getIsAuth(state),
    isFetching: getIsFetching(state),
});

export default connect<
    MapStatePropsType, MapDispatchPropsType, PropsType, AppStateType>
    (mapStateToProps, { logout })(HeaderContainer)