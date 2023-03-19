import classes from './NewPost.module.css';

const NewPost = () => {
    return (
        <section className={classes.new__post}>
            <div>
                <label htmlFor="NewPost" className={classes.heading}>Что нового?</label>
                <textarea name="" id="NewPost" cols="30" rows="4" className={classes.text}></textarea>
                <button className={classes.button}>Опубликовать</button>
            </div>
        </section>
    )
}

export default NewPost;