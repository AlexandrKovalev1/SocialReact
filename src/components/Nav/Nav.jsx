import classes from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.list}>
                <li className={classes.list__item}>
                    <a className={classes.item__link}>Profile</a>
                </li>
                <li className={classes.list__item}>
                    <a className={classes.item__link}>Massages</a>
                </li>
                <li className={classes.list__item}>
                    <a className={classes.item__link}>News</a>
                </li>
                <li className={classes.list__item}>
                    <a className={classes.item__link}>Music</a>
                </li>
                <li className={classes.list__item}>
                    <a className={classes.item__link}>Setting</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;