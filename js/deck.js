function createDeck(cards) {

    for (var i = 0; i < cards.length; i++) {        
        deck.appendChild(cards[i]);
    }

    deckParentNode.appendChild(deck);

}