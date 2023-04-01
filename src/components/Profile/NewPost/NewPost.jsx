import classes from './NewPost.module.css';
import React from 'react';
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../../redux/state';


const NewPost = (props) => {

    let newPostElement = React.createRef()

    let editText = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action);
    }

    let addPost = () => {
        let action = addPostActionCreator()
        props.dispatch(action);
    }

    return (
        <section className={classes.new__post}>
            <div>
                <label htmlFor="NewPost" className={classes.heading}>Что нового?</label>
                <textarea ref={newPostElement} id="NewPost" onChange={editText} cols="30" rows="4" className={classes.text} value={props.newPostText} />
                <button className={classes.button} onClick={addPost}>Опубликовать</button>
            </div>
        </section>
    )
}

export default NewPost;