import * as React from 'react'
import classes from './Music.module.css'

type MusicPropsType = {}


const Music: React.FC<MusicPropsType> = (props) => {
    return (
        <div className={classes.main__music}>
            Music
        </div>
    )
}

export default Music;