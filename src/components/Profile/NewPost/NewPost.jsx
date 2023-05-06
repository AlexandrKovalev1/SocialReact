import classes from './NewPost.module.css';

const NewPost = (props) => {

    let editTextPost = (event) => {
        let text = event.target.value;
        props.editTextPost(text);
    }

    let addNewPost = () => {
        props.addNewPost();
    }


    return (
        <section className={classes.new__post}>
            <div>
                <label htmlFor="NewPost" className={classes.heading}>Что нового?</label>
                <textarea
                    className={classes.text}
                    value={props.textValue}
                    onChange={editTextPost}
                />
                <button
                    className={classes.button}
                    onClick={addNewPost}>
                    Опубликовать
                </button>
            </div>
        </section>
    )
}

export default NewPost;