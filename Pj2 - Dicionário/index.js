//url da api
let url = 'https://significado.herokuapp.com/v2/';

//chamar id's
let inputTxt = document.querySelector('#input_txt');
let btnTxt = document.querySelector('#btn');
let resultado = document.querySelector('#result');

btnTxt.addEventListener('click', () => {
    let palavra = inputTxt.value;           //pegar valores no input

    if (palavra == ''){
        resultado.innerHTML = `<p id="significado">Escreva alguma palavra no campo de busca!</p>`
    } else {
        //método para consumir url da api(juntar url com palavra digitada)
        fetch(`${url}${palavra}`)
        //se der certo, transformar a variável em json
        .then((resposta) => resposta.json())
        //se der certo transformar em json, pegar o array do significado na api
        .then((data) => {
            //mostrar informações que vÊm da api no console do navegador
            console.log(data)  

            //inserir informações desejadas no html
            resultado.innerHTML = 
            `<h3 id="palavra">${palavra}</h3>
            <p id="significado"><span>1º </span>${data[0].meanings[0]}</p>
            <p id="significado"><span>2º </span>${data[0].meanings[1]}</p>`
            //se der errado, então...
        }).catch(() => {
            resultado.innerHTML = `<p id="significado">Não foi possível encontrar esta palavra!</p>`
        })
    }
})