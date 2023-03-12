const Nav = () => {
    return (
        <nav className='nav'>
            <ul className='nav-list'>
                <li className='nav-list-item'>
                    <a className='nav-item-link'>Profile</a>
                </li>
                <li className='nav-list-item'>
                    <a className='nav-item-link'>Massages</a>
                </li>
                <li className='nav-list-item'>
                    <a className='nav-item-link'>News</a>
                </li>
                <li className='nav-list-item'>
                    <a className='nav-item-link'>Music</a>
                </li>
                <li className='nav-list-item'>
                    <a className='nav-item-link'>Setting</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;