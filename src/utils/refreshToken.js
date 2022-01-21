import setAuthToken from "./setAuthToken"
import moment from "moment-timezone";

export const refreshTokenSetup = async (res) => {
    moment.tz.setDefault('America/Los_Angeles');
    const authRes = await res.reloadAuthResponse()
    let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000
    const refreshToken = async() => {
        const newAuthRes = await res.reloadAuthResponse()
        refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000
        setAuthToken(newAuthRes.id_token)
        setTimeout(refreshToken, refreshTiming)
        return authRes.id_token;
    }
    setAuthToken(authRes.id_token)
    setTimeout(refreshToken, refreshTiming)
    return authRes.id_token;
}