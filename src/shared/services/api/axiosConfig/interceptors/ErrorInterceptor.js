import { AxiosError } from "axios";

//interceptador de erro axios
export const errorInterceptor = (error) =>{
    //condições
    if(error.message === "Network Error"){
        return Promise.reject(new Error("Erro de conexão"));
    }
    if(error.message?.status === 401){
        return Promise.reject(new Error("Erro de conexão"));
    }

    //se não cair em nenhuma condição retorna o erro
    return Promise.reject(error);
};