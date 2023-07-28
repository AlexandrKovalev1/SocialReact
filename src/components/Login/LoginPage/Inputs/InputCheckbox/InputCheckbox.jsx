import classes from './InputCheckbox.module.css'

const InputCheckbox = ({ field, form, ...props }) => {
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