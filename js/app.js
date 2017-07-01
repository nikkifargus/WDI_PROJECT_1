// create a main element to play the game in
// create canvas element same area and positiong as the main
// create img of a rocket that lives inside the main
// when mouse enters the main canvas, rocket should attach to mouse
// when move the mouse, move the rocket around
// 1 second after mouse enters main, stars start to fall down
// create function so stars fall randomly
// if star hits rocket, rocket explodes


var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext('2d');
var img = new Image();
img.src = 'js/star.png';
var noOfStars = 20;
var stars = [];
for (var i= 0; i < noOfStars; i++){
  var x = Math.floor(Math.random()*canvas.width);
  var y = Math.floor(Math.random()*canvas.height);
  stars[i] = new star(x,y);
}



function star(x,y) {
  this.x = x;
  this.y = y;

  this.show = function(){
    context.drawImage(img,this.x, this.y, 15,15);

  };
}
function draw() {
  context.fillStyle = 'black';
  context.fillRect(0,0, canvas.width, canvas.height);
  for (var i = 0; i < noOfStars; i++) {
    stars[i].show();
  }
}

function update(){
  draw();
  window.requestAnimationFrame(update);
}

update();

//
// function setUp(){
//   $('main').mouseenter(function(){
//     console.log('in main');
//     // $(document).mousemove(function(e){
//     //   $('#rocket').css({left: e.pageX, top: e.pageY});
//     // });
//   });
// }
//
// setUp();

//
// $(document).ready(function(){
//   var $moveable = $('.moveAble');
//   $(document).mousemove(function(e){
//     $moveable.css({'top': e.pageY,'left': e.pageX});
//   });
// });

// function myMove() {
//   var elem = document.getElementById("myAnimation");
//   var pos = 0;
//   var id = setInterval(frame, 10);
//   function frame() {
//     if (pos == 350) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + 'px';
//       // elem.style.left = pos + 'px';
//     }
//   }
// }
//
// function myMove(){
//   var div = document.createElement('div');
//   div.style.width = '100px';
//   div.style.height = '100px';
//   div.style.background = 'white';
//   div.style.color = 'white';
//   div.innerHTML = 'Hello';
// }
//
// function setup (){
//   $('button').on('click', (myMove));
// }
//
// function init(){
//   setup();
// }
//
//
// $(init);
