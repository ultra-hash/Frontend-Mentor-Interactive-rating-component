let buttonEl = document.getElementsByClassName('btn')[0];
let frontCard = document.getElementsByClassName('card-front')[0];
let backCard = document.getElementsByClassName('card-back')[0];
let ratingCards = document.getElementsByClassName('rating-card');

let ratingValue = document.getElementsByClassName('selectedRating')[0];

buttonEl.addEventListener('click', function(){
    if (ratingValue.textContent !== "") {
        frontCard.classList.add('d-none');
        backCard.classList.remove('d-none');
    };
});



for (eachobj of ratingCards) {
    eachobj.addEventListener('click', function(e){
        ratingValue.textContent = e.target.textContent;
        for (each of ratingCards) {
            if (each.textContent === ratingValue.textContent) {
                each.classList.add('rating-card-selected');
            } else {
                each.classList.remove('rating-card-selected');
            }
        }
    });
}
