function createDeck(cards) {

    var deck = document.getElementById('deck')
    var deckParentNode = deck.parentNode;
    deckParentNode.removeChild(deck);

    for (var i = 0; i < cards.length; i++) {        
        deck.appendChild(cards[i]);
    }

    deckParentNode.appendChild(deck);

}