// create a main element to play the game in
// create canvas element same area and positiong as the main
// create img of a rocket that lives inside the main
// when mouse enters the main canvas, rocket should attach to mouse
// when move the mouse, move the rocket around
// 1 second after mouse enters main, stars start to fall down
// create function so stars fall randomly
// if star hits rocket, rocket explodes

//create a new object every 300ms
var starCreate = 400;

//how fast stars will fall
var starFall = 1;

//when last star created
var lastStar = -1;

//an array to hold all of the created stars
var objects = [];

var side = 225;

var up = 200;

// var starRadius = 7;
//
// var rocketRadius = 14;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
//set size of the canvas
canvas.width = 500;
canvas.height = window.innerHeight;

//create new object at a random x location to be styled and animated.
function CreateRandomstar() {
  var object = {
    x: Math.random() * (canvas.width -20) + 10,
    y: 0
  };
  objects.push(object);
}

function animate(){
  animateStar();
}
// moveRocket();
// detectCollision('object[i]');

function animateStar (){
  // used to get the elapsed time
  var time = Date.now();

  //see if its time to create a new star
  if (time> (lastStar + starCreate)){
    lastStar = time;
    CreateRandomstar();
  }

  //request another animation frame  (used instead of set interval)
  requestAnimationFrame(animate);

  //clear the canvas so all objects can be redrawn
  ctx.clearRect(0,0, canvas.width, canvas.height);

  //add size & color and move each object down the canvas
  for (var i = 0; i < objects.length; i++) {
    var object = objects[i];
    object.y += starFall;
    ctx.fillStyle ='gold';
    ctx.fillRect(object.x, object.y, 10, 10);
    // ctx.beginPath();
    // ctx.arc(object.x, object.y, starRadius, 0, 2*Math.PI);
    // ctx.fillStyle = 'gold';
    // ctx.fill();
    // ctx.stroke();

    // create spaceship
    // var spaceShip =
    // ctx.beginPath();
    // ctx.arc(side, up, rocketRadius, 0, 2*Math.PI);
    // ctx.fillStyle = 'red';
    // ctx.fill();
    // ctx.stroke();
    ctx.fillStyle ='red';
    ctx.fillRect(side, up, 20, 20);
  }

  // hitDetect();
  //
  // function hitDetect(m, mi){
  //   for (var i = 0; i < objects.length; i++) {
  //     var e = spaceShip;
  //     if(m.x+m.w >=e.x && m.x<=e.x+e.w && m.y >= e.y &&m.y <=e.y+e.h){
  //       this.objects.splice(this.object[mi],1);
  //       console.log('hit');
  //     }
  //   }
  // }
  // function detectCollision(other){
  //   var d = dist(spaceShip.x, spaceShip.y, other.x, other.y);
  //   if (d < rocketRadius + starRadius){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }
}



window.onload = function(){
  animate();
  $('.up').on('click', function(){
    // console.log('clicked up');
    up = up - 10;
  });
  $('.down').on('click', function(){
    // console.log('clicked down');
    up = up + 10;
  });
  $('.left').on('click', function(){
    // console.log('clicked left');
    side = side - 10;
  });
  $('.right').on('click', function(){
    // console.log('clicked right');
    side = side + 10;
  });
};


// $(document).mousemove(function(e){
//   $('#cursor').css({left: e.pageX, top: e.pageY});
// });

//hide original cursor when enter canvas
// canvas.style.cursor = 'none';

// function moveRocket(){
//   $('main').mouseenter(function(){
//     ctx.fillStyle = 'gray';
//     ctx.fillRect(20, 20, 50, 50);
//     $(document).mousemove(function(e){
//       $(rocket).css({left: e.pageX, top: e.pageY});
//     });
//   });
// }
