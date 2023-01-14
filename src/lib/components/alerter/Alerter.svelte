<script>
    import { Motion } from "svelte-motion"
    import IoMdCloseCircle from 'svelte-icons/io/IoMdCloseCircle.svelte'

    export let isOn = false;
    export let errorData;

    const variants = {
        closed: {
            x: 450,
        },
        open: {
            x: 0,
        }
    }
</script>


<Motion 
    let:motion 
    variants={variants}
    initial="closed"
    animate={isOn ? "open" : "closed"}
    transition={{
        delay: .2,
        duration: 1,
        type: "spring",
        stiffness: 250,
        damping: 30,
    }}
>
    <div id="alerter_motion_container" use:motion>
        <section>
            <h1>{errorData.title}</h1>
            <p>{errorData.errorMessage}</p>
        </section>
        <Motion 
            let:motion
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
        >
            <div id="alerter_icon_container" use:motion on:click={() => isOn = false} on:keypress>
                <IoMdCloseCircle />
            </div>
        </Motion>
    </div>
</Motion>

<style lang="scss">
    #alerter_motion_container {
        position: fixed;
        top: 10px;
        right: 0px;
        background-color: #DB1F48;
        width: 95%;
        max-width: 400px;
        min-height: 120px;
        border-radius: 10px 0px 0px 10px;
        padding: 5px;
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
        color: white;
        font-weight: 500;
        display: flex;
        justify-content: space-around;
        align-items: center;

        section {
            max-width: calc(90% - 64px);

            h1 {
                margin-bottom: 13px;
                background-color: #fff;
                color: #DB1F48;
                text-align: center;
                font-weight: 600;
                padding: 7px 2px;
                border-radius: 5px;
                font-size: 1.1rem;
                box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
            }
        }

        #alerter_icon_container {
            width: 48px;
            height: 48px;
            border-radius: 24px;
            background: transparent;

            &:hover {
                cursor: pointer;
            }
        }
    }
</style>