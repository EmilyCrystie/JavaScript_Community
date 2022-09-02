// variável = id do elemento no html
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");



// senha aleatória:
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let novaSenha = "";

// tamanho da senha conf. value 
sizePassword.innerHTML = sliderElement.value;

// tamanho recebe mesmo valor do input
slider.oninput = function(){
    sizePassword.innerHTML = this.value
}

// gerar senha
function generatePassword(){
    let pass = "";

    // passar pelo charset (banco de caracteres) a qtd de vezes determinada pelo tamanho da senha, pegando um caracter
    for(let i = 0, n = charset.length; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n));          // adicionar à variável pass: charset.pegarUmaPosicao(nº aleatório.inteiro(nº.aleatório() * tamanhoCharset)) 
    }
    // console.log(pass);

    // mostrar senha gerada no html
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    // alert("senha copiada")
    navigator.clipboard.writeText(novaSenha);
}