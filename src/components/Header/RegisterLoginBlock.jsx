import { NavLink } from "react-router-dom"

const RegisterLoginBlock = (props) => {
    return (
        <div style={{color:'white'}}>
            <span >
                <NavLink to={'/login'}>{'Login '}</NavLink>
            </span>

            <span >
                <NavLink to={'/register'}
                >Register</NavLink>
            </span>
        </div>
    )
}

export default RegisterLoginBlock;