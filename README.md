#Space Evader

<img src="images_sounds/Screen Shot 2017-07-19 at 20.06.23.png"></img>

##Introduction

This was my first project for the WDI course at General Assembly in London. It was started at the end of week 2 of the course and completed by the end of week 3. 

The game I decided to make was a rocket evasion game. Where the user controls a rocket to avoid hitting asteroids as they fall down the screen.

Click <a href="https://cryptic-castle-58803.herokuapp.com/">here</a> to have a go at my game.

##Objectives

The given objectives of the project was to build an online game using HTML5, CSS3 and ES6 Javascript, incorporating the skills learnt in the first 2 weeks of the course. 

As the scope of the project was relatively wide it was necessary to research what type of game I wanted to create and then decide my own objectives of how to acheive this.

So my chosen objectives were:

1. Make a game with a slightly challenging logic problem for me.
2. Make a simple game that is fun to play for the user
3. Make a minimilist yet attractive design

##Planning
The initial planning took place over 2 days were I had to decide what game I wanted to create, and then psuedocode in order to make sure I at least recognised the problems I would face. 

The 3 main functionalities of the game that I identified were: 

1. Create and animate items to fall down the screen which must be avoided
2. Allow user to move the rocket (using either buttons/keys/mouse)
3. Design the logic of the game so that if one of the falling objects hits the rocket then game over. 

## Development
The first step to creating my game was to develop a game area in which I could randomly generate items to fall down. Using javascript I created 10 columns which the divs for the items could randomly be assigned to and animated the divs to fall from the top of the column to the bottom. I put this in an interval so that new objects could be created every 'x' seconds and gave a time for how fast the objects would go from the top to the bottom of the screen. 

I then had to add the ability for users to move the rocket. I decided to use the arrow keys to move the rocket so this was done by adding an event listener to the keys 'on down' and linking this to the rocket img with each key adding 'x' pixels to the img position to move it up, down, left and right.

```function moveRocket(){
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
```
Finally I had to use collision theory to make something happen if the rocket collided with the items that are 'falling' down the page. This was done by adding 'getBoundingClientRect' to each of the items and the rocket so that the coordinates could be logged and then create a function to check for if the coordinates overlapped and create a game over function to initiate if this was true.  

```        checkCollision();
        function checkCollision(){
        // console.log(rocketPos);
          var overlap = !(rocketPos.right < starPos.left ||
          rocketPos.left > starPos.right ||
          rocketPos.bottom < starPos.top ||
          rocketPos.top > starPos.bottom);

          if (overlap === true){
            console.log('hit');
            gameOver();          
```          
After creating these main features of the game, I also added a scoring system and function to increase the speed/creation frequency of items to fall down the page so that the player can level up. I also used 'getBoundingClientRect' so that I could set the boundaries of the game so the rocket had to stay in the game area. Then the rest was mainly styling to make the items falling down the page look like asteroids, attaching an image to the rocket div so it looked like a rocket and generally making the website look presentable. 

##Future Improvements

In the future I would like to add an ending to the game so that it is not just about getting to the highest level possible. My idea is that when a player reaches eg. level 3 then a home planet will appear at the top of the screen and the player must touch this with the rocket to win (whilst still avoiding the asteroids).

<img src="images_sounds/Screen Shot 2017-07-19 at 20.06.15.png"></img>

