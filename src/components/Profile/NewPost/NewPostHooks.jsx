import { useState } from 'react';
import classes from './NewPost.module.css';
import { connect } from 'react-redux';
import { addNewPost } from '../../../redux/profileReducer';

const NewPost = (props) => {

    let [postText, setPostText] = useState('');

    const editPostText = (e) => {
        setPostText(e.target.value);
    }

    const addPost = (e) => {
        e.preventDefault();
        props.addNewPost(postText.replace(/\n/g, '<br/>'));
        setPostText('');
    }
    return (
        <form onSubmit={addPost} className={classes.new__post}>
            <div >
                <textarea
                    placeholder={'Создать пост'}
                    className={classes.text}
                    value={postText}
                    onChange={editPostText}
                />
                <button
                    type={'submit'}
                    className={classes.button}>
                    Опубликовать
                </button>
            </div>
        </form>

    )
}

export default connect(null, { addNewPost })(NewPost);