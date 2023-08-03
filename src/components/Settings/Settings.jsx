import classes from './Settings.module.css'
import React from 'react';
import { Formik, Form } from 'formik';





const Settings = () => {
    return (
        <div className={classes.main__settings}>
            <h1>Sign Up</h1>
            <Formik
                initialValues={{
                    picked1: false,
                    picked2: false,
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {({ values }) => (
                    <Form>
                        <div id="my-radio-group">Picked</div>
                        <div role="group" aria-labelledby="my-radio-group">


                            <div>Picked: {values.picked}</div>
                        </div>

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Settings;