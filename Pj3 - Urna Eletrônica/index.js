// controle de interface
let seuVotoPara = document.querySelector('.candidato span');
let cargo = document.querySelector('.cargoCandidato span');
let descricao = document.querySelector('.infosCandidato');
let aviso = document.querySelector('.divisao2');
let lateral = document.querySelector('.d1-right');
let numeros = document.querySelector('.numeroCandidato');


// controle de ambiente
let etapaAtual = 0;
let numero = '';
let votoBranco = true;

function comecarEtapa(){
    let etapa = etapas[etapaAtual]

    let numeroHtml = '';
    numero = '';
    votoBranco = false;

    // acrescentar campos dos dígitos conf. cargo
    for(let i=0;i<etapa.numeros;i++){
        if(i === 0){
            numeroHtml += '<div class="numero pisca"></div>';
        } else {
            numeroHtml += '<div class="numero"></div>';
        }
    }

    // layout inicial
    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml; 
}

function atualizaInterface(){
    let etapa = etapas[etapaAtual];
    // procurar dentro de etapa o campo candidato, filtrando o numero do seu partido
    let candidato = etapa.candidatos.filter((item)=>{
        // se nº digitado for igual ao encontrado no array...
        if(item.numero === numero){
            return true;
        } else {
            // console.log retornando array vazio
            return false;
        }
    });
    // se encontrar candidato no array
    if(candidato.length > 0){
        // alterar mostrar informações:
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';
        descricao.innerHTML = `Nome: ${candidato.nome}<br>Partido: ${candidato.partido}`;
        aviso.style.display = 'block';

        let fotosHtml = '';
        for(let i in candidato.fotos){
            if(candidato.fotos[i].small){
                fotosHtml += `<div class="lateral small"><img src="assets/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`;
            } else {
                fotosHtml += `<div class="lateral"><img src="assets/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`;
            }
            
        }
        lateral.innerHTML = fotosHtml;
    } else {
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = '<div class="aviso-grande pisca">VOTO NULO</div>';
    }
}


// funções dos botões
function clicou(n){
    let elNumero = document.querySelector('.numero.pisca');
    if(elNumero !== null){
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;

        //após preencher nº, remover pisca 
        elNumero.classList.remove('pisca');
        // logo, ir para próximo elemento e adicionar pisca
        if(elNumero.nextElementSibling !== null){
            elNumero.nextElementSibling.classList.add('pisca');
        } else {
            atualizaInterface();
        }
        
    }
}

function branco(n){
    if (numero == ''){
        votoBranco = true;

        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        numeros.innerHTML = ''; 
        descricao.innerHTML = '<div class="aviso-grande pisca">VOTO EM BRANCO</div>';

    } else {
        alert("Para votar em BRANCO, não pode ter digitado nenhum número")
    }
}

function corrige(n){
    comecarEtapa();
}

function confirma(n){
    let etapa = etapas[etapaAtual];

    let votoConfirmado = false;
    if(votoBranco === true){
        votoConfirmado = true;
        console.log("Confirmando como branco")
    } else if(numero.length === etapa.numeros){
        votoConfirmado = true
        console.log("confirmando como " + numero)
    }

    if(votoConfirmado){
        // indo pra próxima etapa
        etapaAtual++;

        if(etapas[etapaAtual] !== undefined){
            comecarEtapa();
        } else {
            document.querySelector('.tela').innerHTML = '<div class="aviso-gigante pisca">FIM!</div>'
        }
    }
}


comecarEtapa();