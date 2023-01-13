<script>
    import Textfield from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text';
    import { Login as LoginValidator } from "$lib/services/utils/validators";
    import handleAuthRequest from "$lib/services/utils/handlers/auth";
    import UserService from "$lib/services/auth/user";
    import Button from "$lib/components/generics/Button.svelte";

    let isLoading = false;
    let loginCredentials = { username: "", password: "" }
    let errors = {
        username: { isValid: true, errorMessage: "" },
        password: { isValid: true, errorMessage: "" },
        api: { isValid: true, errorMessage: "" }
    }

    function handleLogin() {
         handleAuthRequest({
            submissionData: loginCredentials,
            validator: LoginValidator,
            updateErrors: newErrors => { errors = { ...errors, ...newErrors } },
            service: UserService.login,
            onSuccessCallbackFunction: () => console.log("onSuccessCallbackFunction"),
            onFailureCallbackFuntion: () => console.log("onFailureCallbackFunction")
        })
    }
</script>

<div>
    <h1>LOGIN</h1>

    <Textfield
        style='width: 100%; max-width: 350px;'
        bind:value={loginCredentials.username} 
        label="Username: "
        type="username"
        input$autocomplete="username"
        invalid={!errors.username.isValid}
        required
    >
        <HelperText persistent slot="helper">{errors.username.errorMessage ?? ""}</HelperText>
    </Textfield>

    <Textfield
        style='width: 100%; max-width: 350px;'
        bind:value={loginCredentials.password} 
        label="Password: "
        type="password"
        input$autocomplete="password"
        invalid={!errors.password.isValid}
        required
    >
        <HelperText persistent slot="helper">{errors.password.errorMessage ?? ""}</HelperText>
    </Textfield>

    <Button
        onClick={handleLogin}
    >
        texto
    </Button>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }
        h1 {
            font-size: 2rem;
            margin-bottom: 60px;
        }
</style>