function showTab(index) {
    let cards = document.querySelectorAll(".card");
    let buttons = document.querySelectorAll(".tab-button");
    
    cards.forEach(card => card.classList.remove("active"));
    buttons.forEach(button => button.classList.remove("active"));
    
    cards[index].classList.add("active");
    buttons[index].classList.add("active");
}