let image = document.getElementById('image')
let content = document.getElementById('content')
let btnCreate = document.getElementById('btnCreate')

// resumido:
// btnCreate.onclick = () =>{
//     if(content.value == '') return;
//     let linkQr = 'https://api.qrserver.com/v1/create-qr-code/';
//     image.src = linkQr + '?size=500x500&data=' + content.value
// }

btnCreate.addEventListener('click',() => {
    if(content.value == ''){
        return
    }

    let linkQr = 'https://api.qrserver.com/v1/create-qr-code/';
    let qrCodeSrc = `${linkQr}?size=500x500&data=${content.value}`

    image.src = qrCodeSrc
})