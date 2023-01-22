<script>
    import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
    import backgroundAnimation from "$lib/assets/background_animation_green.json";
</script>

<main>
    <section id="background_container">
        <LottiePlayer
            src={backgroundAnimation}
            autoplay="{true}"
            loop="{true}"
            renderer="svg"
            background="transparent"
            controls={false}
        />
    </section>

    <div id="login_container">
        <slot></slot>
    </div>

</main>

<style lang="scss">
    main {
        position: relative;

        #background_container {
            width: 100vw;
            height: 100vh;
            overflow: hidden;
        }
    
        #login_container {
            padding: 20px;
            position: absolute;
            left: 0;
            right: 0;
            margin-left: auto; 
            margin-right: auto; 
            top: calc(25vh / 2);
            width: 50%;
            min-width: 350px;
            max-width: 500px;
            height: 55%;
            max-height: 600px;
            border-radius: 10px;
            background-color: rgb(255, 255, 255, 0.96);
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 14px;
            
            @media screen and (max-width: 600px) {
                max-height: 500px;
            }
        }
    }
</style>