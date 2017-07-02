// create a main element to play the game in
// create canvas element same area and positiong as the main
// create img of a rocket that lives inside the main
// when mouse enters the main canvas, rocket should attach to mouse
// when move the mouse, move the rocket around
// 1 second after mouse enters main, stars start to fall down
// create function so stars fall randomly
// if star hits rocket, rocket explodes


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = window.innerHeight;

//create a new object every 300ms
var starCreate = 300;

//how fast stars will fall
var starFall = 1;

//when last star created
var lastStar = -1;

//an array to hold all of the created stars
var objects = [];

animate();

//create new object
function CreateRandomstar() {

  var object = {
    x: Math.random() * (canvas.width -20) + 10,
    //set y to start at top of page
    y: 0
  };

  // add the new object to the objects[] array
  objects.push(object);
}

function animate(){
  //get the elapsed time
  var time = Date.now();

  //see if its time to create a new star
  if (time> (lastStar + starCreate)){
    lastStar = time;
    CreateRandomstar();
  }

  //request another animation frame
  requestAnimationFrame(animate);

  //clear the canvas so all objects can be redrawn
  ctx.clearRect(0,0, canvas.width, canvas.height);

  //add style and move each object down the canvas
  for (var i = 0; i < objects.length; i++) {
    var object = objects[i];
    object.y += starFall;
    ctx.fillStyle = 'red';
    ctx.fillRect(object.x, object.y, 5, 5);

  }
}

// var canvas = document.getElementById('canvas');
// canvas.width = 500;
// canvas.height = window.innerHeight;
// var context = canvas.getContext('2d');
// var img = new Image();
// img.src = 'js/star.png';
// var noOfStars = 20;
// var stars = [];
//
// for (var i= 0; i < noOfStars; i++){
//   var x = Math.floor(Math.random()*canvas.width);
//   var y = Math.floor(Math.random()*canvas.height);
//   stars[i] = new star(x,y);
// }
//
// function star(x,y) {
//   this.x = x;
//   this.y = y;
//
//   this.fall = function(){
//     this.y = this.y+4;
//     if(this.y> canvas.height){
//       this.y = 0;
//     }
//   };
//
//   this.show = function(){
//     context.drawImage(img,this.x, this.y, 25,25);
//
//   };
// }
//
// function draw() {
//   context.fillStyle = 'black';
//   context.fillRect(0,0, canvas.width, canvas.height);
//   for (var i = 0; i < noOfStars; i++) {
//     stars[i].show();
//     stars[i].fall();
//   }
// }
//
// function update(){
//   draw();
//   window.requestAnimationFrame(update);
//   $(document).mousemove(function(e) {
//     $('#cursor').offset({
//       left: e.pageX,
//       top: e.pageY + 20
//     });
//   });
// }
//
// update();
//
