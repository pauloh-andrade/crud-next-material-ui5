import { Environment } from "../../../environment";
import { Api } from "../axiosConfig";

const getAll = async(page = 1, filter = '') =>{
    try{
        const urlRelativa = `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;
        const { data, headers } = await Api.get(urlRelativa);
        if(data){
            return {
                data,
                totalCount: headers['x-total-count'] || Environment.LIMITE_DE_LINHAS
            }
        }
        return new Error("Erro ao listar os registros.");
    }catch(error){
        console.log(error);
        return new Error(error.message || "Erro ao listar os registros.");
    }
};
const getById = async(id) =>{
    try{
        const urlRelativa = `/pessoas/${id}`;
        const { data } = await Api.get(urlRelativa);
    }catch(erros){

    }
};
const create = async() =>{
    
};
const updateById = async() =>{
    
};
const deleteById = async() =>{
    
};

export const PessoaService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
};