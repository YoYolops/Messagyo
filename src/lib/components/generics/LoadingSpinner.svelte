<script>
    import loadingSpinnerAnimation from "$lib/assets/loading.json"
    import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";

    export let style;
</script>

<LottiePlayer 
    src={loadingSpinnerAnimation}
    autoplay={true}
    loop={true}
    renderer="svg"
    background="transparent"
    controls={false}
    style={style}
/>