/* LISTA DE CONTATOS - objetivo final 

1º  Passo: capturar os valores dos campos
2º  Passo: armazenar/salvar valores no script
3º  Passo: criar/adicionar elementos na interface
4º  Passo: remover elementos da interface

*/

const listaContatoLocal = [];

const novoContato = {
    nome: "Adson",
    email: "contato.adsonsantana@outlook.com",
    telefone: "998098989"
};
listaContatoLocal.push(novoContato);

const campoNome = document.getElementById('campoNome');
const campoEmail = document.getElementById('campoEmail');
const campoTelefone = document.getElementById('campoTelefone');

const botaoAdicionar = document.getElementById('botaoAdicionar');

function adicionarNovoContato() {
    const valorNome = campoNome.value;
    const valorEmail = campoEmail.value;
    const valorTelefone = campoTelefone.value;

    console.log(valorNome);
    console.log(valorEmail);
    console.log(valorTelefone);
}

botaoAdicionar.addEventListener('click', adicionarNovoContato);