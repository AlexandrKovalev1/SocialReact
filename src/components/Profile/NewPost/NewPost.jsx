import TextAreaForm from '../../common/TextAreaForm/TextAreaForm';
import classes from './NewPost.module.css';
import { Field, Formik } from 'formik';


const NewPost = (props) => {

    const submit = (values, { setSubmitting }) => {
        props.addNewPost(values.text)
        values.text = '';
        setSubmitting(false);
    }

    return (
        <Formik
            initialValues={{ text: '' }}
            onSubmit={submit}
        >
            {({
                errors,
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form onSubmit={handleSubmit} className={classes.new__post}>
                    <div >
                        <Field
                            name={'text'}
                            component={TextAreaForm}
                            placeholder={errors.text}
                            className={classes.text}
                            value={values.text}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={classes.button}>
                            Опубликовать
                        </button>
                    </div>
                </form>
            )}
        </Formik>
    )
}

export default NewPost;