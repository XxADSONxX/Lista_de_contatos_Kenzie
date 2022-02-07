/* LISTA DE CONTATOS - objetivo final 

1º  Passo: capturar os valores dos campos
2º  Passo: armazenar/salvar valores no script
3º  Passo: criar/adicionar elementos na interface
4º  Passo: remover elementos da interface

*/

const listaContatoLocal = [];

const listaCOntatosCOntainer = document.querySelector('.secaoListaContatos_lista');

/* interação direta com o HTML */
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
    /* salvando valores na lista de contatos usando o método push */
    listaContatoLocal.push(novoContato);
    renderizarLayout();
}

botaoAdicionar.addEventListener('click', adicionarNovoContato);

function renderizarLayout() {
    listaCOntatosCOntainer.innerHTML = '';

    for (let i = 0; i < listaContatoLocal.length; i++){
        criarLayout(listaContatoLocal[i]);
    }
}

function criarLayout(contato) {
    /* criar elemento HTML atravez do js */
    const li = document.createElement('li');
    const button = document.createElement('button');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const span = document.createElement('span');

    /* inserir um elemento dentro de outro */
    li.appendChild(button);
    li.appendChild(h2);
    li.appendChild(p);
    li.appendChild(span);

button.id = "removerContato";

h2.innerText = contato.nome;
p.innerText = contato.email;
span.innerText = contato.telefone;


listaCOntatosCOntainer.appendChild(li);
}