import * as React from 'react'
import classes from './InputCustom.module.css'
import { FormikFieldType } from '../../../../../commonTypes/commonTypes'


type InputCustomPropsType = {
    field: FormikFieldType
    form: any
    className:string
}

const InputCustom:React.FC<InputCustomPropsType> = ({ field, form, ...props }) => {
    return (
        <label >
            <input {...field} {...props} className={`${props.className}  +
            ${form.errors[field.name] && classes.error}`} />

            {form.errors[field.name] && form.touched[field.name] && <div className={classes.error__message}>{form.errors[field.name]}</div>}
        </label>
    )
}

export default InputCustom;