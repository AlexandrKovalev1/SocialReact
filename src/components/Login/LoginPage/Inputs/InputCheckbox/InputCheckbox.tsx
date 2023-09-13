import * as React from 'react'
import classes from './InputCheckbox.module.css'
import { FormikFieldType } from '../../../../../commonTypes/commonTypes'

type InputCheckboxPropsType ={
    field:FormikFieldType
    form:any
    inputTitle:string
}

const InputCheckbox:React.FC<InputCheckboxPropsType> = ({ field, form, ...props }) => {
    return (
        <label className={classes.wrapper}>
            <input type='checkbox' className={classes.input} />
            <span className={classes.custom__checkbox}>
            </span>
            {props.inputTitle}
        </label>
    )
}

export default InputCheckbox;