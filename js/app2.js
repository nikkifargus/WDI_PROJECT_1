// create multiple route divs for stars to fall down
// rocket within conatiner div

var hit = false;
var rocketStop = false;
$(init);

function init(){
  // console.log(rocketPos);
  moveRocket();
  createColumns();
  $('#start').on('click', function(){
    startGame();
  });
}

function startGame(){
  pickRandomColumn();
  const gameLogic = setInterval(function() {
    if (hit === false){
      createStar();
    }else{
      clearInterval(gameLogic);
    }
  }, 500);
}

function moveRocket(){
  $(document).keyup(function(e) {
    switch (e.which) {
      case 37: // left arrow key
        $('.rocket').animate({
          'left': '-=30'
        },
          { duration: 100,
            step: function(){
              if (rocketStop === true) $('.rocket').stop();
            }
          });
        break;
      case 39: // left arrow key
        $('.rocket').animate({
          'left': '+=30'
        },
          { duration: 100,
            step: function(){
              if (rocketStop === true) $('.rocket').stop();
            }
          });
        break;
      case 38: // left arrow key
        $('.rocket').animate({
          'top': '-=30'
        },
          { duration: 100,
            step: function(){
              if (rocketStop === true) $('.rocket').stop();
            }
          });
        break;
      case 40: // left arrow key
        $('.rocket').animate({
          'top': '+=30'
        },
          { duration: 100,
            step: function(){
              if (rocketStop === true) $('.rocket').stop();
            }
          });
        break;
    }
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
    top: '+505'
  },
    {
      duration: 2000,
      step: function(){
        var starPos = this.getBoundingClientRect();
        var rocketPos =  document.getElementsByClassName('rocket')[0].getBoundingClientRect();
        checkCollision();
        function checkCollision(){
          var overlap = !(rocketPos.right < starPos.left ||
          rocketPos.left > starPos.right ||
          rocketPos.bottom < starPos.top ||
          rocketPos.top > starPos.bottom);

          if (overlap === true){
            console.log('hit');
            $('.star').stop();
            rocketStop = true;
            hit = true;
          }
        }
      }
    });
}



  // function collision(($('.star'), $('.rocket')) {
  //   var x1 = $('.star').offset().left;
  //   var y1 = $('.star').offset().top;
  //   var h1 = $('.star').outerHeight(true);
  //   var w1 = $('.star').outerWidth(true);
  //   var b1 = y1 + h1;
  //   var r1 = x1 + w1;
  //   var x2 = $('.rocket').offset().left;
  //   var y2 = $('.rocket').offset().top;
  //   var h2 = $('.rocket').outerHeight(true);
  //   var w2 = $('.rocket').outerWidth(true);
  //   var b2 = y2 + h2;
  //   var r2 = x2 + w2;
  //
  //   if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
  //   return true;
  // }
