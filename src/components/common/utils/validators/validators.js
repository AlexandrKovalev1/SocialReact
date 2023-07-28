


export const required = (value) => {
    let error;
    if (!value) {
        error = 'Required';
    }
    return error;
}

export const maxLength = (max) => {

    return (value) => {
        let error;
        if (value && value.length > max) {
            error = 'Слишком много букав';
        }
        return error;
    }
}

