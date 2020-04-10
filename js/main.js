//Модальное окно

let buttonCart = document.querySelector('.button-cart');
let modalWindow = document.querySelector('.modal');
let buttonsCloseModal = document.querySelectorAll('.modal-close');

function toggleModal(){
    modalWindow.classList.toggle('modal-open');
}

buttonCart.addEventListener('click', toggleModal);

for (let buttonClose of buttonsCloseModal){
    buttonClose.addEventListener('click', toggleModal);
}

//Подключаем WOW

new WOW().init();