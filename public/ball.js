function Ball(xpos, ypos) {

  this.rad = rad;
  xpos = width/2;
  ypos = height/2;

  
  this.display = function() {

  // Update the position of the shape
  xpos = xpos + ( xspeed * xdirection );
  ypos = ypos + ( yspeed * ydirection );
  rboundx = xpos + this.rad;
  rboundy = ypos + this.rad;
  lboundx = xpos - this.rad;
  lboundy = ypos - this.rad;

  // https://processing.org/examples/bounce.html 
  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  // right block
  if (xpos > width+rad) {
    // ein punkt hoch
    // restart
    xpos = width/2;
    ypos = height/2;

    xspeed = 5;  // Speed of the shape
    yspeed = 5;  // Speed of the shape

    xdirection = 1;
    ydirection = random(-1,1);

    data.player1 += 1;
  }

  //left block
  if (xpos < 0-rad){
    //ein punkt hoch 
    // restart
    xpos = width/2;
    ypos = height/2;

    xspeed = 5;  // Speed of the shape
    yspeed = 5;  // Speed of the shape

    data.player2 += 1;

  }
  if (ypos > height-rad || ypos < rad) {
    ydirection *= -1;
  }

  // http://jsfiddle.net/kHJr6/2/
  if (lboundx < (right.x + right.width) && rboundx > right.x && lboundy < (right.y + right.height) && rboundy > right.y){
    // console.log(xpos + ","+ ypos);
    xdirection *= -1;
    ydirection *= -1;

    this.xspeed += (right.x_speed / 2);
    this.y += this.yspeed;

  }
  if (lboundx < (left.x + left.width) && rboundx > left.x && lboundy < (left.y + left.height) && rboundy > left.y){
    // console.log(xpos + ","+ ypos);
    xdirection *= -1;
    ydirection *= -1;

    xspeed += 1
    yspeed += 1;

  }


  // Draw the shape
  ellipse(xpos, ypos, rad, rad);
}
}