//AQUI VAI FICAR TODOS O CÓDIGO DE EVENTOS

//inportando o arquivo modal
import Modal from './modal.js'

//recebendo a função modal em uma variável
const modal = Modal()

//pegando o condeúdo do modal para ser atualizado quando clicar em marcar como lida
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//Pegar todos os botões com a classe check
const checkButtons = document.querySelectorAll(".action a.check")

//adicionando o evento a cada check dentro checkButtons
checkButtons.forEach(button =>{
    button.addEventListener("click", handleClick)
})

/** ABRIR MODAL QUANDO CLICAR EM EXCLUIR */
const deleteButton = document.querySelectorAll('.action a.delete')

deleteButton.forEach(button => {
    button.addEventListener('click', (event) => handleClick(event, false))
})

//função que inicia a opção de abrir e fechar o modal
function handleClick(event, check = true) {
    //não passar nada pela url
    event.preventDefault()

    const text = check ? 'Marcar como lida' : 'Excluir'

    //modificando inforções do Modal
    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    
    // botão
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

    modal.openClose()
}