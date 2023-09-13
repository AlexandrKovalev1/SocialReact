import * as React from 'react'
import { NavLink } from "react-router-dom"

type RegisterLoginBlockPropsType = {}

const RegisterLoginBlock: React.FC<RegisterLoginBlockPropsType> = (props) => {
    return (
        <div style={{ color: 'white' }}>
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