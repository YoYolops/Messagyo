<script>
    import Textfield from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text';
    import handleAuthRequest from "$lib/utils/handlers/auth";
    import Button from "$lib/components/generics/Button.svelte";
    import Alerter from '$lib/components/alerter/Alerter.svelte';
    import { page } from "$app/stores"
    import { onMount } from 'svelte';

    onMount(() => console.log($page))

    let authType = $page.params.operation
    let isLoading = false;
    let loginCredentials = { username: "", password: "" }
    let errors = {
        username: { isValid: true, errorMessage: "" },
        password: { isValid: true, errorMessage: "" },
        api: { isValid: true, errorMessage: "" }
    }

    $: config = $page.data

    function updateLoadingState(value) { isLoading = value }
    function handleLogin() {
         handleAuthRequest({
            submissionData: loginCredentials,
            validator: config.validator,
            updateErrors: newErrors => { errors = { ...errors, ...newErrors } },
            service: config.service,
            onSuccessCallbackFunction: () => console.log("onSuccessCallbackFunction"),
            onFailureCallbackFunction: apiError => {
                errors = { ...errors, ...apiError }
                updateLoadingState(false)
            }
        })
    }
</script>

<div>
    <Alerter 
        isOn={!errors.api.isValid}
        errorData={{ title: "Sorry, we i could not do that", errorMessage: errors.api.errorMessage }}
    />
    <h1>{config.headerText}</h1>

    <Textfield
        style='width: 100%; max-width: 350px;'
        bind:value={loginCredentials.username} 
        label="Username: "
        type="username"
        input$autocomplete="username"
        invalid={!errors.username.isValid || !errors.api.isValid}
        required
    >
        <HelperText persistent slot="helper">{errors.username.errorMessage ?? "" }</HelperText>
    </Textfield>

    <Textfield
        style='width: 100%; max-width: 350px'
        bind:value={loginCredentials.password} 
        label="Password: "
        type="password"
        input$autocomplete="password"
        invalid={!errors.password.isValid || !errors.api.isValid }
        required
    >
        <HelperText persistent slot="helper" style="margin-bottom: 40px;">{errors.password.errorMessage ?? ""}</HelperText>
    </Textfield>

    <Button
        id="login_button"
        onClick={handleLogin}
        disabled={isLoading}
    >
        { config.submitButtonText }
    </Button>

    <a href={`/auth/${config.changeOperationEndPoint}`} >{ config.changeOperationTypeText }</a>

</div>

<style lang="scss">
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        padding: 20px;

        >h1 {
            margin-top: 12%;
            font-size: 3rem;
            margin-bottom: 60px;
            font-weight: 700;
            color: var(--primary_green);
            border-bottom: 3px solid var(--primary_green);
        }

        a {
            margin-top: 10px;
        }

    }

</style>