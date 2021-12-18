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
const checkButtons = document.querySelectorAll(".actions a.check")

//adicionando o evento a cada check dentro checkButtons
checkButtons.forEach(button =>{
    button.addEventListener("click", handleClick)
})

/** ABRIR MODAL QUANDO CLICAR EM EXCLUIR */
const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
    button.addEventListener('click', (event) => handleClick(event, false))
})

/** função que inicia a opção de abrir e fechar o modal
 * além de criar outros métodos 
*/
function handleClick(event, check = true) {
    //não passar nada pela url
    event.preventDefault()

    const text = check ? 'Marcar como lida' : 'Excluir'
    //pegando a ação do formulário do modal
    const slug = check ? 'check' : 'delete'
    //pegando o id da Sala
    const roomId = document.querySelector('#room-id').dataset.id
    //pegando id da perguntas
    const questionId = event.target.dataset.id

    //setando os atributos para o actions do form que esta no modal
    const form = document.querySelector('.modal form')
    form.setAttribute("actions", `/question/${roomId}/${questionId}/${slug}`)

    //modificando inforções do Modal
    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    
    // botão
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

    modal.openClose()
}
