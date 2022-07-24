//declaração de variáveis
const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-nome')
const sFuncao = document.querySelector('#m-funcao')
const sSalario = document.querySelector('#m-salario')
const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id 


//abertura e fechamento do modal
function openModal(edit = false, index = 0){
    modal.classList.add('active')

    //fechar modal ao clicar em alguma área fora dele
    modal.onclick = e => {
        if (e.target.className.indexOf('modal-container') !== -1) {
            modal.classList.remove('active')
        }
    }

    //o que aparecer ao editar
    if (edit){
        sNome.value = itens[index].nome
        sFuncao.value = itens[index].funcao
        sSalario.value = itens[index].salario
        id = index
    } else {
        sNome.value = ''
        sFuncao.value = ''
        sSalario.value = ''
    }
}


//editar item
function editItem(index){
    openModal(true, index)
}

//deletar item
function deleteItem(index){
    itens.splice(index, 1)
    setItensBD()
    loadItens()
}


//inserir dados na tabela
function insertItem(item, index) {
    let tr = document.createElement('tr')

    tr.innerHTML = `
        <td>${item.nome}</td>
        <td>${item.funcao}</td>
        <td>R$ ${item.salario}</td>
        <td class="acao">
            <button onclick="editItem(${index})"><i class='bx bx-edit'></i></button>
        </td>
        <td class="acao">
            <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
        </td>
    `
    tbody.appendChild(tr)
}


//salvar
btnSalvar.onclick = e => {
    if(sNome.value == '' || sFuncao.value == '' || sSalario.value == '') {
        return
    }

    e.preventDefault();

    if (id !== undefined){
        itens[id].nome = sNome.value
        itens[id].funcao = sFuncao.value
        itens[id].salario = sSalario.value
    } else {
        itens.push({'nome': sNome.value, 'funcao': sFuncao.value, 'salario': sSalario.value})
    }

    setItensBD()

    modal.classList.remove('active')
    loadItens()
    id = undefined
}


//função a executar assim que a tela for carregada
function loadItens() {
    itens = getItensBD()
    tbody.innerHTML = ''
    itens.forEach((item, index) => {
        insertItem(item, index)
    })
}


//buscar item no banco, caso não tenha nada, retornar vazio
const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []           

//setar os itens para dentro do banco
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))


loadItens()