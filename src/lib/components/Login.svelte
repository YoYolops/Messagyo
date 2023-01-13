<script>
    import Textfield from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text';
    import { Login as LoginValidator } from "../utils/validators";

    let isLoading = false;
    let loginCredentials = { username: "", password: "" }
    let errors = {
        email: { isValid: true, errorMessage: "" },
        password: { isValid: true, errorMessage: "" },
        api: { isValid: true, errorMessage: "" }
    }


</script>

<form>
    <h1>LOGIN</h1>

    <Textfield
        bind:value={loginCredentials.username} 
        label="Username: "
        type="username"
        input$autocomplete="username"
        invalid={LoginValidator.username(loginCredentials.username)}
        updateInvalid
    >
        <HelperText slot="helper">{loginCredentials.username}</HelperText>
    </Textfield>

    <Textfield
        bind:value={loginCredentials.password} 
        label="Password: "
        type="password"
        input$autocomplete="password"
        invalid={LoginValidator.password(loginCredentials.password)}
        updateInvalid
    >
        <HelperText slot="helper">Helper Text</HelperText>
    </Textfield>


</form>

<style>
    form {
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