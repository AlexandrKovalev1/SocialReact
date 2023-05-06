import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.navigation}>
            <ul className={classes.list}>
                <li className={classes.list__item}>
                    <NavLink
                        to={'/profile'}
                        className={({ isActive }) =>
                            isActive ? classes.active : undefined}
                    >
                        Профиль
                    </NavLink>
                </li>
                <li className={classes.list__item}>
                    <NavLink
                        to={'/find_companion'}
                        className={({ isActive }) =>
                            isActive ? classes.active : undefined}
                    >
                        Найти собеседника
                    </NavLink>
                </li>
                <li className={classes.list__item}>
                    <NavLink
                        to={'/dialogs'}
                        className={({ isActive }) =>
                            isActive ? classes.active : undefined}
                    >
                        Сообщения
                    </NavLink>
                </li>
                <li className={classes.list__item}>
                    <NavLink
                        to={'/photo'}
                        className={({ isActive }) =>
                            isActive ? classes.active : undefined}
                    >
                        Фото
                    </NavLink>
                </li>
                <li className={classes.list__item}>
                    <NavLink
                        to={'/music'}
                        className={({ isActive }) =>
                            isActive ? classes.active : undefined}
                    >
                        Музыка
                    </NavLink>
                </li>
                <li className={classes.list__item}>
                    <NavLink
                        to={'/news'}
                        className={({ isActive }) =>
                            isActive ? classes.active : undefined}
                    >
                        Новости
                    </NavLink>
                </li>
                <li className={classes.list__item}>
                    <NavLink
                        to={'/settings'}
                        className={({ isActive }) =>
                            isActive ? classes.active : undefined}
                    >
                        Настройки
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Nav;