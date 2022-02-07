/* LISTA DE CONTATOS - objetivo final 

1º  Passo: capturar os valores dos campos
2º  Passo: armazenar/salvar valores no script
3º  Passo: criar/adicionar elementos na interface
4º  Passo: remover elementos da interface

*/

const listaContatoLocal = [];
let id = 0;

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
        id: id,
        nome: valorNome,
        email: valorEmail,
        telefone: valorTelefone
    };
    id++;
    /* salvando valores na lista de contatos usando o método push */
    listaContatoLocal.push(novoContato);

    renderizarLayout();
}

botaoAdicionar.addEventListener('click', adicionarNovoContato);



function removerContato(evento) {
    const botaoCLicado = evento.target;
    const contatoClicado = botaoCLicado.parentElement;
    const idContatoClicado = contatoClicado.dataset.id;

    const contatoRemovido = listaContatoLocal.find((contato) => contato.id == idContatoClicado);
    /* indexof encontra a posição do contato a ser removido */
    const posicaoContatoRemovido = listaContatoLocal.indexOf(contatoRemovido);
    listaContatoLocal.splice(posicaoContatoRemovido, 1);
    renderizarLayout()
}

function renderizarLayout() {
    listaCOntatosCOntainer.innerHTML = '';

    if(listaContatoLocal.length !== 0){
        for (let i = 0; i < listaContatoLocal.length; i++) {
            criarLayout(listaContatoLocal[i]);
        }
    } else {
        const listaContatoVazia = `<li>
        <p>Não há contatos na sua lista</p> </li>`;

        listaCOntatosCOntainer.innerHTML = listaContatoVazia;
    }
}
renderizarLayout();

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
    button.addEventListener('click', removerContato);

    li.dataset.id = contato.id;
    h2.innerText = contato.nome;
    p.innerText = contato.email;
    span.innerText = contato.telefone;


    listaCOntatosCOntainer.appendChild(li);
}
 /* add localStorage no cod para salvar valores */
localStorage.setItem("nome", "");