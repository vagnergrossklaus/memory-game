const STAR_SOLID = 'fas fa-star';
const STAR_REGULAR = 'far fa-star';

var starScore;
var starScorePoints = [];
var moveScore;
var movesCount = 0;

function updateStarts() {

    var stars = starScore.querySelectorAll('li');

    if (movesCount > 0) {
        var index = starScorePoints.indexOf(movesCount);
        if (index >= 0) {
            stars[index].querySelector('i').setAttribute('class', STAR_REGULAR);
        }
    } else {
        stars.forEach(function (star) {
            star.querySelector('i').setAttribute('class', STAR_SOLID);
        });
    }

}

function updateMoves() {
    moveScore.textContent = ++movesCount;
}

function updateScore() {
    updateMoves();
    updateStarts()
}

function restartScore(pairs) {

    starScore = document.getElementById('stars');
    for (var i = 1; i <= starScore.querySelectorAll('li').length; i++) {
        starScorePoints.unshift((pairs * (i + 1)) + 1);
        // starScorePoints.unshift(i+1);
    }

    moveScore = document.getElementById('moves');
    movesCount = -1;

    updateScore();

}