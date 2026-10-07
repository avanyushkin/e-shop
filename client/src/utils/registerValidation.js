function validateUsername(value) {
    if (value.length < 3 || value.length > 20) {
        return "Username must be between 3 and 20 characters";
    }
    if (!/^[a-zA-Z]/.test(value)) {
        return "Username must start with a letter";
    }
    if (!/^[a-zA-Z0-9_]+$/.test(value)) {
        return "Username can only contain letters, numbers and underscores";
    }
    return null;
}

function validateEmail(value) {
    if (value.length === 0) {
        return "Email is required";
    }
    if (value.length > 254) {
        return "Email must be at most 254 characters";
    }
    if (/\s/.test(value)) {
        return "Email must not contain spaces";
    }
    if (!/^[^@]+@[^@]+$/.test(value)) {
        return "Email must contain a single @ symbol";
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
        return "Enter a valid email address";
    }
    return null;
}

function validatePassword(value) {
    if (value.length < 8 || value.length > 20) {
        return "Password must be between 8 and 20 characters";
    }
    if (!/[a-zA-Z]/.test(value) || !/[0-9]/.test(value)) {
        return "Password must contain at least one letter and one number";
    }
    return null;
}

function validateConfirmPassword(password, confirmPassword) {
    return password === confirmPassword ? null : "Passwords do not match";
}

export { validateUsername, validateEmail, validatePassword, validateConfirmPassword };