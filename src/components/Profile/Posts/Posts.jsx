import classes from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {
    return (
        <section className={classes.posts}>
            <Post text='Первый пост 18.03' likesCount='135' dizlikesCount='3'  avatar='https://sun9-16.userapi.com/impf/c840336/v840336463/49ae6/5DMwdk-7Yuc.jpg?size=540x720&quality=96&sign=04f0ff92a4507f076db4ed82c20c9a99&c_uniq_tag=2i1OWAjmF_mcYDn5XynsCl0Qu0JuW-sgw62U3CBTFnc&type=album'/>
            <Post text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fugiat dolor vel commodi tempore blanditiis assumenda, cupiditate corporis sequi, laudantium quae quibusdam facere at ullam possimus tenetur nam a rem.' likesCount='100500' dizlikesCount='7' avatar='https://shapka-youtube.ru/wp-content/uploads/2021/03/prikolnaya-kartinka-na-avu-dlya-patsanov.jpg'/>
            <Post />
        </section>
    )
}

export default Posts;