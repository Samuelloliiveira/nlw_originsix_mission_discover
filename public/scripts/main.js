//AQUI VAI FICAR TODOS O CÓDIGO DE EVENTOS

//inportando o arquivo modal
import Modal from './modal.js'

//recebendo a função modal em uma variável
const modal = Modal()

//Pegar todos os botões com a classe check
const checkButtons = document.querySelectorAll(".action a.check")

//adicionando o evento a cada check dentro checkButtons
checkButtons.forEach(button =>{
    button.addEventListener("click", event =>{
        //chamando a função de abrir Modal
        modal.openClose()
    })
})


/** ABRIR MODAL QUANDO CLICAR EM EXCLUIR */
const deleteButton = document.querySelectorAll('.action a.delete')

deleteButton.forEach(button => {
    button.addEventListener('click', event => {
        modal.openClose()
    })
})