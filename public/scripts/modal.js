//exportando a função Modal
export default function Modal() {

    //pegando o button de cancelar Modal
    const cancelButton = document.querySelector('.button.cancel')

    //quando acontecer o evento de click ele vai chamar a função de abrir e fechar modal
    cancelButton.addEventListener('click', openClose)

    function openClose() {
        document.querySelector('.modal-wrapper').classList.toggle("active")
    }

    return { openClose }
}