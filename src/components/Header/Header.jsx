import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import Nav from './Nav/Nav';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <h1 className={classes.heading}>
                    <NavLink to="/profile" className={classes.logo}>
                        <img className={classes.logo__img} src="https://i.ibb.co/hg1Gm1s/logo3-17-201436.png" alt="logo3-17-201436" />
                    </NavLink>
                </h1>
                <div className={classes.menu__btn}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className={classes.menu}>
                        <Nav />
                    </div>
                </div>
            </div>
        </header>
    )
}



export default Header;

