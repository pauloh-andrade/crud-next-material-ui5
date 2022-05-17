import { Environment } from '../../../environment';
import { Api } from '../axiosConfig';

const getAll = async (page = 1, filter = '') => {
	try {
		const urlRelativa = `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;
		const { data, headers } = await Api.get(urlRelativa);
		if (data) {
			return {
				data,
				totalCount: headers['x-total-count'] || Environment.LIMITE_DE_LINHAS,
			};
		}
		return new Error('Erro ao listar os registros.');
	} catch (error) {
		console.log(error);
		return new Error(error.message || 'Erro ao listar os registros.');
	}
};

const getById = async id => {
	try {
		const { data } = await Api.get(`/pessoas/${id}`);

		if (data) {
			return data;
		}

		return new Error('Erro ao consultar o registro.');
	} catch (error) {
		console.error(error);
		return new Error(error.message || 'Erro ao consultar o registro.');
	}
};
const create = async dados => {
	try {
		const { data } = await Api.post('/pessoas', dados);

		if (data) {
			return data.id;
		}

		return new Error('Erro ao criar o registro.');
	} catch (error) {
		console.error(error);
		return new Error(error.message || 'Erro ao criar o registro.');
	}
};

const updateById = async (id, dados) => {
	try {
		await Api.put(`/pessoas/${id}`, dados);
	} catch (error) {
		console.error(error);
		return new Error(error.message || 'Erro ao atualizar o registro.');
	}
};

const deleteById = async id => {
	try {
		await Api.delete(`/pessoas/${id}`);
	} catch (error) {
		console.error(error);
		return new Error(error.message || 'Erro ao apagar o registro.');
	}
};

export const PessoaService = {
	getAll,
	getById,
	create,
	updateById,
	deleteById,
};
