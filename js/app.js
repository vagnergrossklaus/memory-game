const CARD_PAIR = 8;

var moves;
var movesCount = 0;
var lastCard = undefined;
var cards = [];
var openCards = [];

function updateMoves() {
    moves.textContent = ++movesCount;
}

function close(cards) {
    closeCard(cards);
    document.getElementById('deck').addEventListener('click', onClick);
}

function match(currentCard) {

    if (openCards.indexOf(currentCard) >= 0) {
        return;
    } else {
        openCards.push(currentCard);
    }

    if (lastCard == undefined) {
        lastCard = currentCard;
        showCard(currentCard);
    } else {

        updateMoves();

        document.getElementById('deck').removeEventListener('click', onClick);

        if (isCardsMatch(lastCard, currentCard)) {
            matchCard([lastCard, currentCard]);
            document.getElementById('deck').addEventListener('click', onClick);
        } else {

            unmatchCard([lastCard, currentCard]);
            openCards.splice(openCards.indexOf(lastCard), 2);

            setTimeout(close, 1000, [lastCard, currentCard]);

        }

        lastCard = undefined;

    }

}

function onClick(event) {
    if (event.target.nodeName === 'LI') {
        match(event.target);
    }
}

function restart(){
    movesCount = -1;
    openCards = [];
    closeCard(cards);
    shuffleCards(cards)
    createDeck(cards);
    updateMoves();
}

function init() {

    moves = document.getElementById('moves');

    cards = createCards(CARD_PAIR);
    restart();    

    document.getElementById('deck').addEventListener('click', onClick);
    document.getElementById('restartButton').addEventListener('click', restart);

}