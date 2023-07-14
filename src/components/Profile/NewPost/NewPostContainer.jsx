import { connect } from 'react-redux';
import { addPostCreator,} from '../../../redux/profileReducer';
import NewPost from './NewPost';

let mapStateToProps = (state) => {
    return {
        textValue: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: (text) => {
            dispatch(addPostCreator(text))
        },
    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)

export default NewPostContainer;