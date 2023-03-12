import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <main className={classes.main}>
            <section className={classes.section__head}>
                <div className={classes.main__header}>
                </div>
                <div className={classes.container}>
                    <div className={classes.main__head__aboutUser}>
                        <div className={classes.main__avatar}>
                            <img className={classes.avatar__img} src='https://klike.net/uploads/posts/2022-05/1652891212_4.jpg' />
                        </div>
                        <div className={classes.main__description}>
                            <h3>Alexandr Kovalev</h3>
                            <p>
                                From Saint-Petersburg
                            </p>
                            <p> Age: 32 years old</p>
                            <p>
                                Shinomontashnik
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <MyPosts />
        </main>
    );
}

export default Profile;

