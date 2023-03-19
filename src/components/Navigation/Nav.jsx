import classes from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.navigation}>
            <ul className={classes.list}>
                <li className={classes.list__item}>
                    <a href='/profile'>Профиль</a>
                </li>
                <li className={classes.list__item}>
                    <a href='/dialogs'>Сообщения</a>
                </li>
                <li className={classes.list__item}>
                    <a href='/photo'>Фото</a>
                </li>
                <li className={classes.list__item}>
                    <a href='/musik'>Музыка</a>
                </li>
                <li className={classes.list__item}>
                    <a href='/news'>Новости</a>
                </li>
                <li className={classes.list__item}>
                    <a href='setting'>Настройки</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;