import { Field, Form, Formik } from 'formik'
import classes from './LoginForm.module.css'
import * as Yup from 'yup';
import InputCheckbox from '../Inputs/InputCheckbox/InputCheckbox';
import InputCustom from '../Inputs/InputCustom/InputCustom';


const validationShema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required').max(20, 'long'),
});




const LoginForm = (props) => {

    const submit = (values, { setSubmitting, setStatus, resetForm }) => {
        props.login(values, setStatus);
        resetForm();
        setSubmitting(false);
    }

    return (
        <Formik
            initialValues={{ email: '', password: '', rememberMe: false, captcha: false }}
            validationSchema={validationShema}
            onSubmit={submit}>
            {({
                status,
                errors,
                values,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,
            }) => (
                <Form onSubmit={handleSubmit}>
                    <div className={classes.input__wrapper}>
                        <Field
                            className={classes.input}
                            component={InputCustom}
                            type={'text'}
                            name={'email'}
                            placeholder={'example@mydomain.com'}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                        />
                    </div>
                    <div className={classes.input__wrapper}>
                        <Field
                            className={`${classes.input} + ${errors.email && classes.error}`}
                            component={InputCustom}
                            type={'password'}
                            name={'password'}
                            placeholder={'***********'}
                            onChange={handleChange}
                            value={values.password}
                        />
                    </div>
                    <div className={classes.input__wrapper}>
                        <Field
                            component={InputCheckbox}
                            type={'checkbox'}
                            name={'rememberMe'}
                            onChange={handleChange}
                            inputTitle={'Remember me'}
                        />
                    </div>
                    {status && <div style={{ color: 'red', fontWeight: 'bold', }}>{status.error}</div>}
                    <button type="submit" disabled={isSubmitting} className={classes.button__login}>
                        Login
                    </button>

                </Form>
            )}
        </Formik>

    )
}


export default LoginForm;