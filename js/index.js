const botao = document.querySelector('#btn-enviar')
const campos = document.querySelectorAll('.campo')
const avisoCampoObrigatorio = document.querySelectorAll('.aviso')

botao.addEventListener('click', () => {
    campos.forEach((campo, indice) => {
        if(campo.value === ''){
            campo.classList.add('campo-vazio')
            avisoCampoObrigatorio[indice].innerHTML = "<p>campo obrigatório</p>"
        }
        else{
            campo.classList.remove('campo-vazio')
            avisoCampoObrigatorio[indice].innerHTML = ""
        }
    })
})

campos.forEach(campo => {
    campo.addEventListener('change', () => {
        if(campo.value !== ""){
            campo.classList.add('campo-preenchido')
        }
        else{
            campo.classList.remove('campo-preenchido')
        }
    })
})
