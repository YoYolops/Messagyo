import io from "socket.io-client";
import Config from "../messagyo.config.js";

const socket = io("http://localhost:4000");

export function emitMessage(message) {
    socket.emit(Config.socketEvents.sendMessage, {
        message
    })
}
