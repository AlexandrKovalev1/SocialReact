import classes from './UserProfile.module.css';

const UserProfile = () => {
  return (
    <section className={classes.profile}>
      <div className={classes.header__background}>
      </div>
      <div className={classes.user__avatar}>
        <img src="https://stihi.ru/pics/2015/02/10/1261.jpg" alt="avatar" />
      </div>
      <div className={classes.user__info}>
        <div className={classes.user__about}>
          <span className={classes.user__name}>Alexandr Kovalev</span>
          <small>Статус ...........</small>
          <span className={classes.from}>☂ Saint-Petersburg</span>
        </div>
      </div>
    </section>
  )
}


export default UserProfile;