<!-- // User must be logged to access this feature
// UserData must be in a store -->

<script>
    import { io } from "socket.io-client";
    import config from "../../app.config";

    let inputValue = "";
    let socket = io(config.serverBaseUrl)
    socket.on("send_message", data => console.log("Recebi uma mensagem"))

    function sendMessage() {
        console.log("Executing front sendMessage with message: ")
        console.log(inputValue)
        socket.emit("send_message", inputValue, (data) => console.log("Message from backend: ", data))
    }

</script>

<input
    bind:value={inputValue}
    type="text"
>

<button  on:click={sendMessage}>
    send messages
</button>

<button>Connect</button>