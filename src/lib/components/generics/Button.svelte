<script>
    export let onClick;
</script>

<button
    on:click={e => {
        e.preventDefault()
        onClick()
    }}
>
    <slot></slot>
</button>

<style lang="scss">
    button {
        width: 100%;
        max-width: 350px;
        outline: none;
        border: none;
        box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        background-color: #3cc2be;
        color: #fff;
        font-weight: 500;
        font-size: 1.3rem;
        padding: 10px;
        border-radius: 5px;

        &:hover {
            cursor: pointer;
        }
    }
</style>