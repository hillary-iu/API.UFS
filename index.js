import express from 'express';
import { buscarUfs, buscarUfPorId, buscarUfsPorNome, buscarUfPorSigla, listarPorInicial} from './servicos/servico.js';

const app = express();

app.get('/ufs', (req, res) => {
const nomeUf = req.query.busca;
const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : buscarUfs();

if (resultado.length > 0) {
res.json(resultado);
} else {
res.status(404).send(({ "erro": "Nenhuma UF encontrada" }));
}
});


app.get('/ufs/:iduf', (req, res) => {
const idUf = req.params.iduf;
const uf = buscarUfPorId(idUf);

if (uf) {
res.json(uf);
} else if (isNaN(parseInt(req.params.iduf))) {
res.status(400).send({ "erro": "Requisição inválida" });
} else {
res.status(404).send({ "erro": "UF não encontrada" });
}
});

app.get('/ufs/sigla/:sigla', (req, res) => {
const siglaUf = req.params.sigla;
const uf = buscarUfPorSigla(siglaUf);

if(uf) {
res.json(uf);
} else {
res.status(404).send({"erro": "UF não encontrada"});
}
})


app.get('/ufs/inicial/:inicial', (req, res) => {
const inicialUf = req.params.inicial;
const resultado = listarPorInicial(inicialUf);

if(resultado.length > 0) {
res.json(resultado);
} else {
res.status(404).send({"erro": "Nenhuma UF encontrada com essa inicial"})
}
});


app.listen(8080, () => {
let data = new Date();
console.log('Servidor iniciado na porta 8080 em: ' + data);
});