import Config from "../../app.config";
import * as jose from "jose";

export default function tokenAdapter() {
    const SECRET = new TextEncoder().encode(Config.appKey)

    async function decode(token) {
        try {
            const decodedData = await jose.jwtVerify(token, SECRET)
            decodedData.payload.token = token
            return decodedData.payload;
        }
        catch (error) {
            console.error("Application failed to decode incoming server token")
            console.error(error)
            return {}
        }
    }

    return { decode }
}