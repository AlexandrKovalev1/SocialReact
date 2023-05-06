import { connect } from 'react-redux';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profileReducer';
import NewPost from './NewPost';

let mapStateToProps = (state) => {
    return {
        textValue: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        editTextPost: (text) => {
            dispatch(updateNewPostTextCreator(text))
        },
        addNewPost: () => {
            dispatch(addPostCreator())
        },
    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)

export default NewPostContainer;