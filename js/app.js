const CARD_PAIR = 8;

var cards = [];

function showCard(card){
    card.setAttribute('class', 'card show open');
}

function onClick(event) {
    if (event.target.nodeName === 'LI') {
        showCard(event.target);
    }
}

function init() {

    cards = createCards(CARD_PAIR);
    shuffleCards(cards)
    createDeck(cards);

    document.getElementById('deck').addEventListener('click', onClick);

}