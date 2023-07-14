import React from 'react';
import classes from './NewPost.module.css';


class NewPost extends React.Component {
    state = {
        textValue: '',
    };

    editTextValue = (event) => {
        let text = event.target.value;
        this.setState({
            textValue:text,
        })
    }

    addNewPost = () => {
        this.props.addNewPost(this.state.textValue);
        this.setState({
            textValue:'',
        })
    }

    render() {
        return (
            <section className={classes.new__post}>
                <div>
                    <label htmlFor="NewPost"></label>
                    <textarea
                        placeholder='Что нового?'
                        className={classes.text}
                        value={this.state.textValue}
                        onChange={this.editTextValue}
                    />
                    <button
                        className={classes.button}
                        onClick={this.addNewPost}>
                        Опубликовать
                    </button>
                </div>
            </section>
        )

    }
}

export default NewPost;