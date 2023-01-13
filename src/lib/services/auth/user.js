import config from "../../../app.config";
import api from "../api"

const PATH = "/user";

console.log(config.serverBaseUrl)

const User = {
    regiter: registrationData => api.post(PATH, registrationData),
    login: loginData => api.post(`${PATH}/login`, loginData)
}

export default User;