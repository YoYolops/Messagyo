import { io } from "socket.io-client"
import config from "../../app.config"

const socket = io(config.serverBaseUrl)

export default socket;