const CARD_PAIR = 8;

var cards = [];

function init() {
    cards = createCards(CARD_PAIR);
    shuffleCards(cards)
    createDeck(cards);
}