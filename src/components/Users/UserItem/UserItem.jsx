import classes from './UserItem.module.css'

const UserItem = (props) => {

    return (
        <li className={classes.wrapper}>
            <div className={classes.card}>
                <a href="">
                    <img className={classes.avatar} src={props.avatar} alt="" />
                </a>
                <a className={classes.link__hide} onClick={props.hideUser}>
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
                    <a className={classes.link__add} onClick={props.addFriend}>
                        {props.folowed ?
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="blue" className={classes.svg__folowed}>
                                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 0 0 10-2 "></path>
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className={classes.svg__add}>
                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                        </svg>
                    }
                    </a>
                </div>
            </div>
        </li>
    )
}

export default UserItem;