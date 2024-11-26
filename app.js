// select modal-btn,modal-overlay,close-btn
const modalBtn = document.querySelector('.modal-btn')
const modelOverlay = document.querySelector('.modal-overlay')
const closeBtn = document.querySelector('.close-btn')
// listen for click events on modal-btn and close-btn
modalBtn.addEventListener('click', function(){
    modelOverlay.classList.toggle('open-modal')
})
closeBtn.addEventListener('click', function(){
    modelOverlay.classList.toggle('open-modal')
})

// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay