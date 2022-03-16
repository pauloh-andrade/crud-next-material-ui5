import axios from "axios";

import { errorInterceptor, responseInterceptor } from "./interceptors";
import { Environment } from "../../../environment";

//instancia base do axios
const Api = axios.create({
    baseURL: Environment.URL_BASE,
});

//atribuindo interceptors para a instancia base do axio
Api.interceptors.response.use(
    (response)=> responseInterceptor(response),
    (error)=> errorInterceptor(error)
);

export { Api };