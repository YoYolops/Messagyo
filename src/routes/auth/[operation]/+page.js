export const ssr = false;
import UserService from "../../../lib/services/auth/user";
import { Login, Register } from "../../../lib/utils/validators";

export function load({ params }) {
    if(!["login", "register"].includes(params.operation)) throw new Error(404, "Not found")
    const isLogin = params.operation === "login"
    return {
        validator: isLogin ? Login : Register,
        service: isLogin ? UserService.login : UserService.register,
        headerText: isLogin ? "Login" : "SignUp",
        changeOperationTypeText: isLogin ? "Does'n have an account? Register" : "Already registered? Sign in",
        submitButtonText: isLogin ? "Login" : "Register",
        changeOperationEndPoint: isLogin ? "register" : "login"
    }
}