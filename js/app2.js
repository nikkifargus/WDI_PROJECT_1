// create multiple route divs for stars to fall down
// rocket within conatiner div

$(init);

function init(){
  moveRocket();
  createColumns();
  pickRandomColumn();
  setInterval(function() {
    createStar();
  }, 500);

}

function moveRocket(){
  $(document).keyup(function(e) {
    switch (e.which) {
      case 37: // left arrow key
        $('#rocket').animate({ 'left': '-=20' }, 100);
        break;
      case 39: // right arrow key
        $('#rocket').animate({ 'left': '+=20' }, 100);
        break;
      case 38: // right arrow key
        $('#rocket').animate({ 'top': '-=20' }, 100);
        break;
      case 40: // right arrow key
        $('#rocket').animate({ 'top': '+=20' }, 100);
        break;

    }
    event.preventDefault();
  });
}

function createColumns() {
  for (var i = 0; i < 10; i++) {
    $('<div class="column"></div>').appendTo($('#myContainer'));
  }
}

// pick random column
function pickRandomColumn() {
  return $('.column')[Math.floor(Math.random()*$('.column').length)];
}

// create star element inside picked column
function createStar() {
  $('<div class="star"></div>').appendTo(pickRandomColumn());
  animateStar();
}

function animateStar() {
  // move star down the page
  // 400px;
  $('.star').animate({
    top: '+400'
  },2000);
}
