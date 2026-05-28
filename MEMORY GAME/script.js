const cards = document.querySelectorAll('.card');

// cards.forEach(card => {
//   card.addEventListener('click', () => {
//     card.classList.toggle('flip');
//   });
// });
for(let card of cards){
    card.addEventListener("click",function(){
        card.classList.toggle('flip')
    })
}
