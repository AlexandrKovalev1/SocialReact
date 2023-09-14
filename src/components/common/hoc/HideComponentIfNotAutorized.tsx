import * as React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/reduxStore";

type InjectedProps = {

}

type MapStatePropsType = {
    isAuth:boolean
}

const HideComponentIfNotAutorized = <BaseProps extends InjectedProps & MapStatePropsType>(Component: React.ComponentType<BaseProps>) => {

    let mapStateToProps = (state: AppStateType) => ({ isAuth: state.auth.isAuth });

    const HideComponent = (props:MapStatePropsType & InjectedProps) => {


        return <>
            {Boolean(props.isAuth) && <Component {...props as BaseProps} />}
        </>
    }

    return connect<MapStatePropsType,{},InjectedProps,AppStateType>(mapStateToProps)(HideComponent);
}

export default HideComponentIfNotAutorized;