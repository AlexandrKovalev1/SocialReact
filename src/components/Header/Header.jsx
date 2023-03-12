import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <h1 className={classes.heading}>
                <a href='#s'>
                    <img className={classes.logo__img} src='https://i.ibb.co/qYttXmJ/logoza-ru-3-Photo-Room-png-Photo-Room.png' alt="logoza-ru-1-8-Bu-Um-DRFs-transformed" border="0" />
                </a>
            </h1>
        </header>
    );
}


export default Header;