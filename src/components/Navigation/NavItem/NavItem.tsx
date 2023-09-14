import * as React from 'react'
import { NavLink } from "react-router-dom"
import classes from './NavItem.module.css'


type NavItemPropsType = {
    path:string
    title:string
}

const NavItem:React.FC<NavItemPropsType> = (props) => {
    return (
        <li className={classes.list__item}>
            <NavLink
                to={props.path}
                className={({ isActive }) =>
                    isActive ? classes.active : undefined}
            >
                {props.title}
            </NavLink>
        </li>
    )
};

export default NavItem;