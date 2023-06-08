import classes from './UserItem.module.css'
import userPhoto from '../../../assets/no_photo.jpg'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const UserItem = (props) => {
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
                            <a className={classes.link__unfollow} onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
                                    withCredentials: true,
                                    headers:{
                                        'API-KEY':'b813de6c-1bc7-47ee-94b8-8283cbcb7526',
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(props.id);

                                        }
                                    });

                            }}>
                                Отписаться
                            </a>
                            :
                            <a className={classes.link__add} onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
                                    withCredentials: true,
                                    headers:{
                                        'API-KEY':'b813de6c-1bc7-47ee-94b8-8283cbcb7526',
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.addUserToFriends(props.id);
                                        }
                                    });


                            }}>
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