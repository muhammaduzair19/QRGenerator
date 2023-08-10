// async function qrGenerator(){
//     await fetch('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=facebook.com');
// }
let qrImage = document.getElementById('qr')
let url = document.getElementById('url')
let generate = document.getElementById('generate')


function qrGenerator(text) {
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`
    qrImage.classList.add('show')
}

generate.addEventListener('click', () => {
    if (url.value) {
        qrGenerator(url.value)
    }
    else {
        url.classList.add('shake')
    }
})

url.addEventListener('focus', () => {
    qrImage.src = "";
    qrImage.classList.remove('show')
})