function verifyConditions(conditions) {
    for(const condition of conditions) if(!condition.isValid) return condition;
    return {
        isValid: true,
    }
}

function validatePassword(password) {
    const conditions = [
        { isValid: password.length, errorMessage: "Insira uma senha" },
        { isValid: password.length >= 4, errorMessage: "Insira ao menos 4 dígitos" }
    ]
    return verifyConditions(conditions);
}

function validateUsername(username) {
    const conditions = [
        { isValid: username.length, errorMessage: "Insira um username" },
        { isValid: username.length >= 4, errorMessage: "Insira ao menos 4 dígitos" }
    ]
    return verifyConditions(conditions);
}

export const Login = {
    username: validateUsername,
    password: validatePassword
}

export const Register = {
    username: validateUsername,
    password: validatePassword
}