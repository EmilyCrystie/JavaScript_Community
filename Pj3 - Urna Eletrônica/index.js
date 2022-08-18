// controle de interface
let seuVotoPara = document.querySelector('.candidato span');
let cargo = document.querySelector('.cargoCandidato span');
let descricao = document.querySelector('.infosCandidato');
let aviso = document.querySelector('.divisao2');
let fotos = document.querySelector('.d1-right');
let numeros = document.querySelector('.numeroCandidato');


// controle de ambiente
let etapaAtual = 0;

function comecarEtapa(){
    let etapa = etapas[etapaAtual]

    let numeroHtml = '';

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    fotos.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}


// funções dos botões
function clicou(n){
    alert("Clicou em " + n);
}

function branco(n){
    alert("Clicou em BRANCO");
}

function corrige(n){
    alert("Clicou em CORRIGE");
}

function confirma(n){
    alert("Clicou em CONFIRMA");
}


comecarEtapa();