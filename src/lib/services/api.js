import axios from "axios";
import config from "../../app.config";

const api = axios.create({ baseURL: config.serverBaseUrl });

export default api;