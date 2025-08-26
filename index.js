import colecaoUf from "./dados/dados.js";
import express from 'express';

const app = express();

app.get ('/ufs', (req, res) =>{
    res.json(colecaoUf)
});

app.get('/ufs/:iduf', (req, res) => {
    const idUF = parseInt(req.params.iduf);
    const uf = colecaoUf.find(u => u.id == idUF);
    res.json(uf);
})

app.get('/ufs/iduf', (req, res) => { /* */
    const idUF = parseInt(req.params.iduf);/* */
    let mensagemErro = '';/* */
    let uf;/* */


    if(!(isNaN(idUF))) {/* se isso n for um numero vai retornar verdadeiro */
        uf = colecaoUf.find(u => u.id === idUF);/*so serve se passar um numero correto da coleção  e se pro exemplo passarr o campo 28 e n tem retorna um campo vazio*/
        if(!uf){/*verifica se é verdadeira ou falso */
            mensagemErro = "UF não encontrada";/* */
        }
    }else{
        mensagemErro = 'Requisição invalida';
    }/*aqui acaba  */ 
    

    if(uf) {
        res.json(uf);
    }else{
        res.status(404).json({"erro": mensagemErro});
    }
});

app.listen(8080, () => {
    let data = new Date();
    console.log('servidor iniciado na porta 8080 em: ' + data);
});

