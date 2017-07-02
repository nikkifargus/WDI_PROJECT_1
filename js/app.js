// create a main element to play the game in
// create canvas element same area and positiong as the main
// create img of a rocket that lives inside the main
// when mouse enters the main canvas, rocket should attach to mouse
// when move the mouse, move the rocket around
// 1 second after mouse enters main, stars start to fall down
// create function so stars fall randomly
// if star hits rocket, rocket explodes


var canvas = document.getElementById('canvas');
canvas.width = 500;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');

//create a new object every 400ms
var starCreate = 400;

//how fast stars will fall
var starFall = 1;

//when last star created
var lastStar = -1;

//an array to hold all of the created stars
var objects = [];

// var images = {img1, img2};
var img1 = new Image();
img1.src = 'js/star.png';
// var img2 = new Image();
// img2.src = 'js/planet.png';

window.onload = function(){
  animate();
};

//create new object
function CreateRandomstar() {

  //select a random type for this new object (can use later to color objects)
  var t = 'red';
  //
  // if(Math.random() < 0.5){
  //   t ='red';
  // } else {
  //   t='blue';
  // }

  var object = {
    //set this object type
    type: t,
    //set x randomly but at least 10px off the canvas edges
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

  //draw the line where the new stars are created
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.stroke();

  image: images[Math.floor(Math.random()*images.length)];

  //add style and move each object down the canvas
  for (var i = 0; i < objects.length; i++) {
    var object = objects[i];
    object.y += starFall;
    ctx.drawImage(object.image, object.x, object.y, 30, 30);
    // context.drawImage(img,object.x, object.y, 25,25);
    // context.fillRect(0,0, canvas.width, canvas.height);
    // ctx.beginPath();
    // ctx.arc(object.x, object.y, 8, 0, Math.PI*2);
    // ctx.closePath();
    // ctx.fillStyle = object.type;
    // ctx.fill();
  }
}
