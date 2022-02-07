/* LISTA DE CONTATOS - objetivo final 

1º  Passo: capturar os valores dos campos
2º  Passo: armazenar/salvar valores no script
3º  Passo: criar/adicionar elementos na interface
4º  Passo: remover elementos da interface

*/

const listaContatoLocal = [];




const campoNome = document.getElementById('campoNome');
const campoEmail = document.getElementById('campoEmail');
const campoTelefone = document.getElementById('campoTelefone');

const botaoAdicionar = document.getElementById('botaoAdicionar');

function adicionarNovoContato() {
    const valorNome = campoNome.value;
    const valorEmail = campoEmail.value;
    const valorTelefone = campoTelefone.value;

    const novoContato = {
        nome: valorNome,
        email: valorEmail,
        telefone: valorTelefone
    };
    listaContatoLocal.push(novoContato);

    console.log(listaContatoLocal);
}

botaoAdicionar.addEventListener('click', adicionarNovoContato);