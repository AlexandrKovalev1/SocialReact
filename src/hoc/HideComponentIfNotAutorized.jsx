import { connect } from "react-redux";



const HideComponentIfNotAutorized = (Component) => {

    let mapStateToProps = (state) => ({ isAuth: state.auth.isAuth, });

    const HideComponent = (props) => {
        return <>
            {Boolean(props.isAuth) && <Component {...props} />}
        </>
    }
    
    return connect(mapStateToProps)(HideComponent);
}

export default HideComponentIfNotAutorized;