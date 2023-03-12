const Profile = () => {
    return (
        <main className='main-profile'>
            <section className='section-main-profile-head'>
                <div className='main-profile-header'>
                    
                </div>
                <div className='container'>
                <div className='main-profile-head-aboutUser'>
                    <div className='main-profile-avatar'>
                        <img className='avatar-img' src='https://klike.net/uploads/posts/2022-05/1652891212_4.jpg'/>
                    </div>
                    <div className='main-profile-description'>
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
            <section className='section-main-profile-content'>
                <div className='container'>
                <h2>My posts</h2>
                <div>
                    new post
                </div>
                <div>
                    <ul className='list-posts'>
                        <li>post 1</li>
                        <li>post 2</li>
                    </ul>
                </div>
                </div>

            </section>
        </main>
    );
}

export default Profile;

