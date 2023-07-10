import classes from './UserItem.module.css'
import userPhoto from '../../../assets/no_photo.jpg'
import { NavLink } from 'react-router-dom'
import { followAPI } from '../../../api/api'

const UserItem = (props) => {
    console.log(props.followingIsProgress.some(id => id === props.id))
    return (
        <li className={classes.wrapper}>

            <div className={classes.card} >
                <NavLink to={`/profile/${props.id}`}>
                    <img className={classes.avatar} src={props.avatar !== null ? props.avatar : userPhoto} alt="" />
                </NavLink>
                <a className={classes.link__hide} onClick={() => props.hideUser(props.index)}>
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
                            <button disabled={props.followingIsProgress.some(id => id === props.id)}
                                className={classes.button__unfollow} onClick={() => {
                                    props.toggleFolowingIsProgress(true, props.id);
                                    followAPI.deleteFollower(props.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.unfollow(props.id);
                                            props.toggleFolowingIsProgress(false, props.id);
                                        }
                                    });

                                }}>
                                Отписаться
                            </button>
                            :
                            <button disabled={props.followingIsProgress.some(id => id === props.id)}
                                className={classes.button__add} onClick={() => {
                                    props.toggleFolowingIsProgress(true, props.id);
                                    followAPI.postFollower(props.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.addUserToFriends(props.id);
                                            props.toggleFolowingIsProgress(false, props.id);
                                        }
                                    });


                                }}>
                                Подписаться
                            </button>
                        }
                    </div>
                </div>
            </div>

        </li>
    )
}

export default UserItem;