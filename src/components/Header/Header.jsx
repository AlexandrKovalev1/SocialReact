import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import Preloader from '../common/Preloader/Preloader';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <h1 className={classes.heading}>
                    <NavLink to={props.isAuth ? `/profile/${props.myId} `: '/login'} className={classes.logo}>
                        <img className={classes.logo__img} src="https://i.ibb.co/hg1Gm1s/logo3-17-201436.png" alt="logo3-17-201436" />
                    </NavLink>
                </h1>
                <div className={classes.avatar}>
                    {props.isAuth ?
                        (props.isFetching ? <Preloader height={"60px"} />
                            : <NavLink to={`/profile/${props.myId} `}>
                                <img className={classes.avatar__img} src="https://stihi.ru/pics/2015/02/10/1261.jpg" alt="" />
                            </NavLink>)
                        : <NavLink to={'/login'} className={classes.login}>
                            'Login'
                        </NavLink>}
                </div>
                <div className={classes.menu__btn}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className={classes.menu}>
                    </div>
                </div>
            </div>
        </header>
    )
}



export default Header;

