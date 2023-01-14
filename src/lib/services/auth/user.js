import api from "../api"

const PATH = "/user";

const User = {
    register: registrationData => api.post(PATH, registrationData),
    login: loginData => api.post(`${PATH}/login`, loginData)
}

export default User;