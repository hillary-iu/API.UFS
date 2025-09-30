import colecaoUf from "../dados/dados.js";

// Retorna toda coleção
export const buscarUfs = () => {
return colecaoUf;
}

// Busca Uf pelo nome
export const buscarUfsPorNome = (nomeUf) => {
return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase())
);
};

// Retorna o id especificado
export const buscarUfPorId = (id) => {
const idUF = parseInt(id);
return colecaoUf.find(uf => uf.id === idUF);
}

// Buscar uf por sigla
export const buscarUfPorSigla = (siglaUf) => {
return colecaoUf.find(uf => uf.uf.toLowerCase() === siglaUf.toLowerCase()
);
}

// Listar ufs pela inicial do nome
export const listarPorInicial = (inicialUf) => {
return colecaoUf.filter(uf => uf.nome.toLowerCase().startsWith(inicialUf.toLowerCase())
);
}