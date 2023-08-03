import Preloader from '../../common/Preloader/Preloader';
import classes from './UserProfile.module.css';
import noPhoto from '../../../assets/no_photo.jpg'
import Status from '../Status/Status';
import { NavLink } from 'react-router-dom';



const UserProfile = (props) => {

  if (Object.keys(props.userInfo).length === 0) {
    return <Preloader />
  }

  let socialList = Object.keys(props.userInfo.contacts).map((item) => {
    let socialValue = props.userInfo.contacts[item];
    if (socialValue) {
      return <div>
        <span>{`${item}`}</span>
        <NavLink to={props.userInfo.contacts[item]}>'img'</NavLink>
      </div>
    }
    return null;
  });

  return (

    <section className={classes.profile}>
      <div className={classes.header__background}>
      </div>
      <div className={classes.user__avatar}>
        <img src={props.userInfo.photos.large ? props.userInfo.photos.large : noPhoto} alt="avatar" />
      </div>

      <div className={classes.user__info}>
        <div className={classes.user__about}>
          <span className={classes.user__name}>{props.userInfo.fullName}</span>
          <span>{props.userInfo.aboutMe}</span>
          <Status />
        </div>
        <div className={classes.social}>
          {socialList}
        </div>
      </div>
    </section>
  )
}


export default UserProfile;