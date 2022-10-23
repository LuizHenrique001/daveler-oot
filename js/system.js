//Sistema de segurança do site
let btn = document.querySelector('button#btn_confirm')
let inputVerificar = document.querySelector('input.inputUser')

function Verificar() {
    let inputVerificar_f = inputVerificar.value
    let main = document.querySelector('main.container_main')
    let div = document.querySelector('div.container_vendas')
    let container_seguranca = document.querySelector('div.container_seguranca')
    let header = document.querySelector('header')

    if(inputVerificar_f == 'b890'){
        main.style.display = 'flex'
        div.style.display = 'flex'
        header.style.display = 'flex'
        container_seguranca.style.display = 'none'
    }else{
        alert('Blocked')
    }

}


inputVerificar.addEventListener('keyup', function(event){
    if(event.keyCode === 13){
        event.preventDefault()
        btn.click()
    }
})