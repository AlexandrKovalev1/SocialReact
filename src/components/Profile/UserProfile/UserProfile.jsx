import Preloader from '../../common/Preloader/Preloader';
import classes from './UserProfile.module.css';
import noPhoto from '../../../assets/no_photo.jpg'
import Status from '../Status/Status';
import { useState } from 'react';
import EditProfileForm from './EditProfileForm/EditProfileForm';




const UserProfile = (props) => {
  let [isChoose, setChoose] = useState(false);
  const [editProfile, setEditProfile] = useState(false);


  let onMainAvatarSelected = (e) => {
    if (e.target.files.length) {
      props.updateAvatar(e.target.files[0]);
    }
  }




  if (Object.keys(props.userInfo).length === 0) {
    return <Preloader />
  }

  let contactsList = Object.keys(props.userInfo.contacts).map(contact =>

    <div>
      <span>
        <b>
          {contact}
        </b>
      </span>:
      <span>
        {props.userInfo.contacts.contact}
      </span>
    </div>

  )

  return (

    <section className={classes.profile}>
      <div className={classes.user__avatar} >
        <img src={props.userInfo.photos.large || noPhoto} alt="avatar" />
        {props.isOwner && isChoose && <input type='file' name='false' onChange={onMainAvatarSelected} />}
      </div>

      {!editProfile ? <div className={classes.user__info}>
        <div className={classes.info}>
          <div className={classes.user__about}>
            <span className={classes.user__name}>{props.userInfo.fullName}</span>
            <span>{props.userInfo.aboutMe}</span>
            <Status />

          </div>
          <div className={classes.user__information}>
            <div>
              <b>aboutMe</b>: {props.userInfo.aboutMe}
            </div>
            <div>
              <b>lookingForAJob</b>: {props.userInfo.lookingForAJob ? 'yes' : 'no'}
              {props.userInfo.lookingForAJob &&
                <div>
                  <b>lookingForAJobDescription</b>: {props.userInfo.lookingForAJobDescription}
                </div>
              }
            </div>
            <div>
              <b>Contacts</b>: {contactsList}
            </div>

          </div>
        </div>
        <div>
          {props.isOwner && <button onClick={() => { setEditProfile(true) }} type={'button'}>Редактировать</button>}
        </div>
      </div> :
        <EditProfileForm userInfo={props.userInfo} setEditProfile={setEditProfile} />
      }
    </section>
  )
}


export default UserProfile;