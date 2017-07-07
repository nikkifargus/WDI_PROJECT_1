// create multiple route divs for stars to fall down
// rocket within conatiner div

var hit = false;
var rocketStop = false;
var speed = 2500;
var creation = 700;
var level = 1;
var score = 0;
var gameLogic;
var audio = new Audio('js/Space Trip.mp3');



$(init);

function init(){

  createColumns();
  $('#start').on('click', function(){
    audio.play();
    startGame();
    audio.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
    }, false);
    $('#start').css('visibility', 'hidden');
  });
  $('#reset').on('click', function(){
    location.reload();
  });
}


function startGame(){
  setInterval(function(){
    speed = speed*0.80;
    creation = creation*0.80;
  }, 25000);

  pickRandomColumn();
  moveRocket();

  setInterval(function(){
    if (hit===false){
      level = level + 0.04;
      $('#level').html(Math.floor(level));
      score = score+ 1;
      $('#score').html(score);
    }
  }, 1000);

  // setInterval(function(){
  //   if (hit===false){
  //     createStar();
  //   }
  // }, 600);

// recursive loop which calls itself over and over clearing the interval and running again until startStars is cleared due to hit == true.
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
  $(document).keydown(function(e) {
    switch (e.which) {
      case 37: // left arrow key
        $('#rocket').animate({
          'left': '-=15'
        },
          { duration: 5,
            step: function(){
              if (rocketStop === true) $('#rocket').stop();
            }
          });
        break;
      case 39: // left arrow key
        $('#rocket').animate({
          'left': '+=15'
        },
          { duration: 5,
            step: function(){
              if (rocketStop === true) $('#rocket').stop();
            }
          });
        break;
      case 38: // left arrow key
        $('#rocket').animate({
          'top': '-=15'
        },
          { duration: 5,
            step: function(){
              if (rocketStop === true) $('#rocket').stop();
            }
          });
        break;
      case 40: // left arrow key
        $('#rocket').animate({
          'top': '+=15'
        },
          { duration: 5,
            step: function(){
              if (rocketStop === true) $('#rocket').stop();
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
  $('<img class="star" src="images_sounds/moon2_PNG9.png"></img>').appendTo(pickRandomColumn());
  // arr.push('.star');
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
        var rocketPos =  document.getElementById('rocket').getBoundingClientRect();
        var containerPos = document.getElementById('myContainer').getBoundingClientRect();

        checkInBounds();

        function checkInBounds(){
          if (rocketPos.top<containerPos.top ||rocketPos.left<containerPos.left || rocketPos.right>containerPos.right || rocketPos.bottom>containerPos.bottom ){
            gameOver();
            // console.log(containerPos.right);
            // console.log(rocketPos.right);
          }
        }

        incScore();
        function incScore(){
          if(starPos.bottom===containerPos.bottom)
            console.log('bottom');
        }

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
  $('#rocket').stop();
  $('.gameOver').css('visibility', 'visible');
  animateGameOVer();
  function animateGameOVer() {
    $('.gameOver').animate({top: '298px'}, 700);
  }
  $('#reset').css('visibility', 'visible');
  audio.pause();
}
