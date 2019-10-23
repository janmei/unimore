// TODO 
// change variables
// restart condition rewriting to either fixed width or something else
// setting up Ball () to start at middle in instance

var rad = 60;        // Width of the shape
var xpos, ypos;    // Starting position of shape    

var xspeed = 10;  // Speed of the shape
var yspeed = 10;  // Speed of the shape

var xdirection;
var ydirection;


var yDirLeft = 450;
var yDirRight = 450;

var data = {
  player1: 0,
  player2: 0
}


var socket;

// Startscreen
// function keyTyped() {

//   if (keyCode == 32){
//     xdirection = random(-1,1);  // Left or Right
//     ydirection = random(-1,1);  // Top to Bottom
//   }else{
//   textSize(100);
//   text("Press Spacebar", 500, 500);
// }

// }

var myFont;
function preload() {
  myFont = loadFont('lilliput_steps.ttf');
}

function setup() 
{
  xdirection = 1;
  ydirection = random(-1,1);
  createCanvas(displayWidth-15, displayHeight-90);
  noStroke();
  frameRate(60);
  ellipseMode(RADIUS);
  // Set the starting position of the shape

  left = new Left();
  right = new Right();
  ball = new Ball(width/2, height/2);

    socket = io.connect('http://localhost:3000');

  socket.on('player1', left.display);
  socket.on('player2', right.display);


}



function Left(){
 this.y = yDirLeft;
 this.x = 70;
 this.width = 30;
 this.height = 150;

  this.display = function(data){
    fill(255);
    rect(this.x, data ,this.width,this.height);
  
    if (keyIsDown(87)) {
      this.y -= 10;
    } else if( keyIsDown(83)) {
      this.y += 10;
    }
  }
}

function Right(){
  this.y = yDirRight;
  this.x = displayWidth-150;
  this.x_speed = this.x;
  this.y_speed = this.y;
  this.width = 30;
  this.height = 150;

  this.display = function(data){
    fill(255);
    console.log(data);
    rect(this.x, data, this.width, this.height);
  
    if (keyIsDown(UP_ARROW)) {
      this.y -= 10;
    } else if( keyIsDown(DOWN_ARROW)) {
      this.y += 10;
    }
    if (this.y > height-150) {
      this.y = 0;
    }
  }
}


function draw() {
    textFont(myFont);


  background(102);

var leftdata = {
  y: left.y
 }

 var rightdata = {
  y: right.y
 }
    socket.emit('player1', leftdata.y);
    socket.emit('player2', rightdata.y);
  ball.display();
  right.display();
  left.display();

  fill(255);
  textSize(60);
  text(data.player1, 100,100);
  text(data.player2, 1800,100);




}