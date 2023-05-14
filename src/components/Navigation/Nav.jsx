import classes from './Nav.module.css';
import NavItem from './NavItem/NavItem'
const Nav = (props) => {
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