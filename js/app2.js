// create multiple route divs for stars to fall down
// rocket within conatiner div

var hit = false;
var rocketStop = false;
var speed = 2000;
var creation = 500;
var level = 1;
var gameLogic;


$(init);

function init(){
  moveRocket();
  createColumns();
  $('#start').on('click', function(){
    startGame();
  });
}

function startGame(){
  setInterval(function(){
    speed = speed*0.99;
    creation = creation*0.99;
    // console.log(creation);
    level = level +1;
  }, 1000);

  pickRandomColumn();

//recursive loop which calls itself over and over clearing the interval and running again until startStars is cleared due to hit == true.
  var myFunction = function(){
    clearInterval(gameLogic);
    startStars();
    gameLogic = setInterval(myFunction, creation);
  };
  gameLogic = setInterval(myFunction, creation);

}

function startStars() {
  if (hit === false){
    // console.log(creation);
    createStar();
  }else{
    clearInterval(gameLogic);
  }
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
  $('.star').animate({
    top: '+505'
  },
    {
      duration: speed,
      step: function(){
        var starPos = this.getBoundingClientRect();
        var rocketPos =  document.getElementsByClassName('rocket')[0].getBoundingClientRect();
      // checkInBounds();
      //
      // function checkInBounds(){
      //   if (rocketPos.right > 510 || rocketPos.bottom > 590){
      //     gameOver();
      //   }
      // }

      checkCollision();
      function checkCollision(){
        // console.log(rocketPos);
        var overlap = !(rocketPos.right < starPos.left ||
          rocketPos.left > starPos.right ||
          rocketPos.bottom < starPos.top ||
          rocketPos.top > starPos.bottom);

          if (overlap === true){
            console.log('hit');
            gameOver();
          }
        }
      }
    });
  }

  function gameOver(){
    $('.star').stop();
    rocketStop = true;
    hit = true;
    $('.gameOver').css('visibility', 'visible');

  }
