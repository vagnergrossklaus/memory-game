const IMAGES = ['car-side', 'bicycle', 'plane', 'rocket', 'truck', 'helicopter', 'tractor', 'sleigh'];

function createCard(image) {

    var i = document.createElement("i");
    i.setAttribute('class', 'fa fa-' + image);

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

    return cards;

}