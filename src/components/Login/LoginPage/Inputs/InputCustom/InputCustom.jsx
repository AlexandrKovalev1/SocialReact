import classes from './InputCustom.module.css'

const InputCustom = ({ field, form, ...props }) => {
    return (
        <label >
            <input {...field} {...props} className={`${props.className}  +
            ${form.errors[field.name] && classes.error}`} />

            {form.errors[field.name] && form.touched[field.name] && <div className={classes.error__message}>{form.errors[field.name]}</div>}
        </label>
    )
}

export default InputCustom;