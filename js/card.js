const IMAGES = ['fas fa-gem', 'fas fa-paper-plane', 'fa fa-bomb', 'fa fa-bolt', 'fa fa-cube', 'fa fa-anchor', 'fa fa-leaf', 'fa fa-bicycle'];

function closeCard(cards){
    cards.forEach(function(card) {
        card.setAttribute('class', 'card close');    
    });    
}

function showCard(card){
    card.setAttribute('class', 'card open show');
}

function matchCard(cards){
    cards.forEach(function(card) {
        card.setAttribute('class', 'card open match');
    });        
}

function unmatchCard(cards){
    cards.forEach(function(card) {
        card.setAttribute('class', 'card open unmatch');
    });    
}

function isCardsMatch(card1, card2){
    return card1.querySelector('i').getAttribute('class') == card2.querySelector('i').getAttribute('class');
}

function createCard(image) {

    var i = document.createElement("i");
    i.className = image;

    var card = document.createElement('li');
    card.appendChild(i);

    return card;

}

function createCards(pairs) {
    
    var cards = [];
    
    for (var i = 0; i < pairs; i++) {
        for (var j = 1; j <= 2; j++) {
            cards.push(createCard(IMAGES[i]));
        }
    }

    closeCard(cards);

    return cards;

}

function shuffleCards(cards) {

    var currentIndex = cards.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }

}