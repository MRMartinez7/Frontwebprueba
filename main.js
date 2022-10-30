const openmodal = document.querySelector('.abtme');
const modal = document.querySelector('.modal');
const closemodal =document.querySelector('.modalclose')

openmodal.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.add('modalshow')
});
closemodal.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.remove('modalshow')
});