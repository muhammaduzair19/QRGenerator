// async function qrGenerator(){
//     await fetch('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=facebook.com');
// }


let qrImage = document.getElementById('qr')
let url = document.getElementById('url')
let generate = document.getElementById('generate')
let download = document.getElementById('download')


function qrGenerator(text) {
    try {
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`

    } catch (error) {
        console.log(error)
    }

    qrImage.classList.add('show')
}

generate.addEventListener('click', () => {
    console.log("working")
    if (url.value) {
        qrGenerator(url.value)
    }
    else {
        url.classList.add('shake')
    }
})

download.addEventListener('click', downloadCode)

async function downloadCode() {

    try {
        const response = await fetch(qrImage.src)
        const file = await response.blob()
        const link = document.createElement('a')
        link.href = URL.createObjectURL(file)
        link.download = new Date().getTime();
        link.click();
    }
    catch (error) {

    }
}



url.addEventListener('focus', () => {
    qrImage.src = "";
    qrImage.classList.remove('show')
})

