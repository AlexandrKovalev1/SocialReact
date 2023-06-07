import classes from './UserItem.module.css'
import userPhoto from '../../../assets/no_photo.jpg'

const UserItem = (props) => {
    return (
        <li className={classes.wrapper}>
            <div className={classes.card}>
                <a href="">
                    <img className={classes.avatar} src={props.avatar !== null ? props.avatar : userPhoto } alt="" />
                </a>
                <a className={classes.link__hide} onClick={()=>props.hideUser(props.index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className={classes.swg__hidden}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </a>
                <div>
                    <div className={classes.about__user}>
                        <span className={classes.name}>
                            {props.fullname}
                        </span>
                        <span className={classes.from}>
                            {props.country}{<br />} {props.sity}
                        </span>
                        <span className={classes.about}>
                            {props.status}
                        </span>
                    </div>
                    <div>
                        {props.folowed ?
                            <a className={classes.link__unfollow} onClick={() => {props.unfollow(props.id)}}>
                                Отписаться
                            </a>
                            :
                            <a className={classes.link__add} onClick={()=> {props.addFriend(props.id)}}>
                                Подписаться
                            </a>
                        }
                    </div>
                </div>
            </div>
        </li>
    )
}

export default UserItem;