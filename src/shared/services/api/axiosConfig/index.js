import axios from "axios";
import { errorInterceptor, responseInterceptor } from "./interceptors";

//instancia base do axios
const Api = axios.create({
    baseURL: "http://localhost:3333",
});

//atribuindo interceptors para a instancia base do axio
Api.interceptors.response.use(
    (response)=> responseInterceptor(response),
    (error)=> errorInterceptor(error)
);

export { Api };