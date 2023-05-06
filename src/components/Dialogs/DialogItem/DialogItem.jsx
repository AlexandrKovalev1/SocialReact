import { NavLink } from 'react-router-dom';
import classes from './DialogItem.module.css'

const DialogItem = (props) => {

    let path = `${props.id}`;

    return (
        <li className={classes.dialog__item__sender}>
            <NavLink to={path} className={({ isActive }) => isActive ? classes.active : undefined}>
                <div className={classes.companion}>
                    <img className={classes.companion__avatar__img} src={props.avatar} alt="" />
                    <div className={classes.companion__info}>
                        <span className={classes.companion__name}>{props.name}</span>
                        <small className={classes.companion__status}>online</small>
                    </div>
                </div>
            </NavLink>
        </li>
    )
}

export default DialogItem;