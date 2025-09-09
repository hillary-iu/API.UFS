
import express from 'express';
import { buscarUfPorId, buscarUFsPorNome, buscarUFs, buscarUFsPorSiglas } from './servicos/servico.js';

const app = express();

app.get('/ufs', (req, res) => {
    const nomeUF = req.query.busca;
    const resultado = nomeUF ? buscarUFsPorNome(nomeUF) : buscarUFs();
    
    if (resultado.length > 0 ) {
        res.json(resultado);
    }else{
        res.status(404).send({ "erro": "nenhuma uf encontrada" });
    }
});


app.get('/ufs/:iduf', (req, res) => {
    const uf = buscarUfPorId(req.params.iduf);

    if(uf) {
        res.json(uf);
    }else if (isNaN(parseInt(req.params.iduf))){
        res.status(400).send({"erro": "requisição invalida"});
    }else{
        res.status(404).send({"erro": "UF não encontrada"});
    }
});

app.get('ufs/sigla', (req, res) => {
    const siglaUF = req.query.busca;
    const contaa = siglaUF ? buscarUFsPorNome(siglaUF) : buscarUFs();

    if(contaa.length > 0) {
        res.json(contaa);
    }else if(isNaN(parseInt(req.params.iduf))){
        res.status(404).send({"erro": "Uf não encontrada"});
    }else{
        res.status(400).send({"erro":"requisiçaõ invalida"})
    }
});

app.listen(8080, () => {
    console.log('servidor iniciado na porta 8080 em: ' );
});

