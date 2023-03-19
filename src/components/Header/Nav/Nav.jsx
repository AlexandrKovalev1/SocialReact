import classes from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.nav__header}>
            <ul className={classes.list}>
                <li className={classes.list__item}>
                    <a>Профиль</a>
                </li>
                <li className={classes.list__item}>
                    <a>Сообщения</a>
                </li>
                <li className={classes.list__item}>
                    <a>Фото</a>
                </li>
                <li className={classes.list__item}>
                    <a>Музыка</a>
                </li>
                <li className={classes.list__item}>
                    <a>Новости</a>
                </li>
                <li className={classes.list__item}>
                    <a>Настройки</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;