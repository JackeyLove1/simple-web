const validateForm = (form) => {
    const errors = {};
    if (!form.name) {
        errors.name = 'Name is required';
    }
    if (!form.email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
        errors.email = 'Email is invalid';
    }
    if (!form.password) {
        errors.password = 'Password is required';
    } else if (form.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }
    return errors;
}

module.exports = {
    validateForm
}