import * as React from 'react'
import { Field, Form, Formik } from 'formik'
import classes from './LoginForm.module.css'
import * as Yup from 'yup';
import InputCheckbox from '../Inputs/InputCheckbox/InputCheckbox';
import InputCustom from '../Inputs/InputCustom/InputCustom';
import { AuthThuncsTypes, CaptchaType } from '../../../../redux/authReducer';
import { FormValuesLoginPropsType, FormikSetStatusType } from '../../../../commonTypes/commonTypes';


const validationShema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required').max(20, 'long'),
});



type LoginFormPropsType = {
    login: (authData: FormValuesLoginPropsType,
        setStatus: FormikSetStatusType) => AuthThuncsTypes
    captcha: CaptchaType
}


const LoginForm: React.FC<LoginFormPropsType> = (props) => {

    const submit = (values: FormValuesLoginPropsType, { setSubmitting, setStatus, resetForm }) => {
        props.login(values, setStatus);
        resetForm();
        setSubmitting(false);
    }

    const InitialValues: FormValuesLoginPropsType = { email: '', password: '', rememberMe: false, captcha: false }

    return (
        <Formik
            initialValues={InitialValues}
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
                    {props.captcha.isCaptcha &&
                        <div>
                            <Field
                                className={classes.input}
                                component={InputCustom}
                                type={'text'}
                                name={'captcha'}
                                placeholder={'enter captcha simbols'}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.captcha}
                            />
                            <div>
                                <img src={props.captcha.captchaUrl} alt="" />
                            </div>
                        </div>
                    }
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