import * as React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/reduxStore";

type InjectedProps = {

}

const HideComponentIfNotAutorized = <BaseProps extends InjectedProps>(Component: React.ComponentType<BaseProps>) => {

    let mapStateToProps = (state: AppStateType) => ({ isAuth: state.auth.isAuth });

    const HideComponent = (props:any) => {


        return <>
            {Boolean(props.isAuth) && <Component {...props} />}
        </>
    }

    return connect(mapStateToProps, {})(HideComponent);
}

export default HideComponentIfNotAutorized;