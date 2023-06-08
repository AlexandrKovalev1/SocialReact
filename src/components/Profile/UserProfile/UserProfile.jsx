import Preloader from '../../common/Preloader/Preloader';
import classes from './UserProfile.module.css';
import noPhoto from '../../../assets/no_photo.jpg'


const UserProfile = (props) => {

  if (Object.keys(props.userInfo).length === 0) {
    return <Preloader />
  }

  let socialList = Object.keys(props.userInfo.contacts).map((item) => {
    let socialValue = props.userInfo.contacts[item];
    if (socialValue) {
      return <div>
        <span>{`${item} `}</span>
        <a href={props.userInfo.contacts[item]}></a>
      </div>
    }
    return null;
  });

  return (
    <section className={classes.profile}>
      <div className={classes.header__background}>
      </div>
      <div className={classes.user__avatar}>
        <img src={props.userInfo.photos.large ? props.userInfo.photos.large:noPhoto } alt="avatar" />
      </div>
      <div className={classes.user__info}>
        <div className={classes.user__about}>
          <span className={classes.user__name}>{props.userInfo.fullName}</span>
          <span>{props.userInfo.aboutMe}</span>
          <span className={classes.from}>☂ Saint-Petersburg</span>
        </div>
        <div className={classes.social}>
          {socialList}
        </div>
      </div>
    </section>
  )
}


export default UserProfile;