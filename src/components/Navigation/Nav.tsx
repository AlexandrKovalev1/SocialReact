import * as React from 'react'
import classes from './Nav.module.css';
import NavItem from './NavItem/NavItem'
import { NavItemPropsType } from '../../redux/navigationReducer';

type NavPropsType = {
    navigation:Array<NavItemPropsType>
}

const Nav:React.FC<NavPropsType> = (props) => {
    let navItem = props.navigation.map(navEl =>
        <NavItem
            key={navEl.id}
            title={navEl.title}
            path={navEl.path}
        />);

    return (
        <nav className={classes.navigation}>
            <ul className={classes.list}>
                {navItem}
            </ul>
        </nav>
    )
}
export default Nav;