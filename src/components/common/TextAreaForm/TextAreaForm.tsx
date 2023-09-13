import * as React from "react";


const TextAreaForm = ({field,form, ...props}) => {
    return (
        <div>
            <textarea {...field}{...props} />
            <div></div>
        </div>
    )
}

export default TextAreaForm;