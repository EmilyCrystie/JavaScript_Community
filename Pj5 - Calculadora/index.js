// variaveis
const main = document.querySelector("main")
const root = document.querySelector(":root")
const input = document.getElementById("input")
const resultInput = document.getElementById("result")
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]         //teclas permitidas

// verificação de teclas
input.addEventListener('keydown', function(ev){
    ev.preventDefault()

    // verificação da lista
    if(allowedKeys.includes(ev.key)){
        input.value += ev.key
        return
    }

    // barra de espaço
    if(ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1)
    }

    // enter
    if(ev.key === 'Enter'){
        calculate()
    }
})

// aparecer valores na tela
document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
    charKeyBtn.addEventListener('click',function(){
        const value = charKeyBtn.dataset.value
        input.value += value
    })
});

// limpar teclas selecionadas
document.getElementById('clear').addEventListener('click', function(){
    input.value = ''
    input.focus()
})

// calcular
function calculate(){
    //tramento de erro
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')

    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove('error')
}
document.getElementById('equal').addEventListener('click', calculate)

// mudar tema
document.getElementById('themeSwitcher').addEventListener('click',function(){
    if(main.dataset.theme === 'dark'){
        root.style.setProperty('--bg-color','#f1f5f9')
        root.style.setProperty('--border-color','#aaa')
        root.style.setProperty('--font-color','#212529')
        root.style.setProperty('--primary-color','#26834a')

        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--bg-color','#212529')
        root.style.setProperty('--border-color','#666')
        root.style.setProperty('--font-color','#f1f5f9')
        root.style.setProperty('--primary-color','#4dff91')

        main.dataset.theme = 'dark'
    }
})

// copiar resultado
document.getElementById('copyToClipboard').addEventListener('click',function(ev){
    const button = ev.currentTarget

    if(button.innerText === 'Copy'){
        button.innerText = 'Copied!'
        button.classList.add('success')
        navigator.clipboard.writeText(resultInput.value)
    } else {
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
})