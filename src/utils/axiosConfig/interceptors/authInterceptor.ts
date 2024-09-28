// "use server";
import { AxiosRequestHeaders } from "axios";
import { cookies as nextCookies } from "next/headers";

interface HeadersDefaults {
    headers: AxiosRequestHeaders,
    url: string
}

const authInterceptor = (config: HeadersDefaults) => {
    const token = nextCookies().get("token")?.value;
    const refresh_token = nextCookies().get("refresh_token")?.value;
    if (token) {
        if(config?.url === '/refresh') {
            config.headers['Authorization'] = `Bearer ${refresh_token}`;
        } else {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
    }
    return config;
}
export default authInterceptor;