import { NavLink } from "react-router-dom";
import classes from './NavItem.module.css'

let NavItem = (props) => {
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