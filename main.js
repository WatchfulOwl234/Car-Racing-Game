
var canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d"); 
rover_width = 100; 
rover_height = 90; 
background_image = "racing.jpg"; 
rover_image = "car1.png"; 
rover1_image = "car2.png";
rover_x = 10; 
rover_y = 10;
rover1_x = 25; 
rover1_y = 25;
//--------------------------------------
function add() 
{ 
background_imgTag = new Image(); 
//defining a variable with a new image 
background_imgTag.onload = uploadBackground; 
// setting a function, onloading this variable 
background_imgTag.src = background_image; 
// load image 
rover_imgTag = new Image(); 
//defining a variable with a new image 
rover_imgTag.onload = uploadrover; 
// setting a function, onloading this variable 
rover_imgTag.src = rover_image; 
// load image 

rover_imgTag1 = new Image(); 
//defining a variable with a new image 
rover_imgTag1.onload = uploadrover; 
// setting a function, onloading this variable 
rover_imgTag1.src = rover1_image; 
// load image 
}
//----------------------------------------
function uploadBackground() 
{ 
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height); 
}
//----------------------------------------
function uploadrover() 
{ 
ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height); 
ctx.drawImage(rover_imgTag1, rover1_x, rover1_y, rover_width, rover_height); 

}
//----------------------------------------
window.addEventListener("keydown", my_keydown); 
function my_keydown(e) 
{ 
keyPressed = e.keyCode; 
console.log(keyPressed); 
if(keyPressed == '38') 
{ 
up(); 
console.log("up"); 
} 
if(keyPressed == '40') 
{ 
down(); 
console.log("down"); 
}
 if(keyPressed == '37') 
{ left(); 
console.log("left"); 
} 
if(keyPressed == '39') 
{ right(); 
console.log("right"); 
} 
if(keyPressed == '87') 
{ 
letterW(); 
console.log("upW"); 
} 
if(keyPressed == '65') 
{ 
letterA(); 
console.log("leftA"); 
}
 if(keyPressed == '83') 
{
letterS(); 
console.log("downS"); 
} 
if(keyPressed == '68') 
{ letterD(); 
console.log("rightD"); 
} 
}
//--------------------------------------------
function up() 
{ 
if(rover_y >=0) 
{ 
rover_y = rover_y - 10; 
console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y); 
uploadBackground(); 
uploadrover(); 
} 
}

function letterW() 
{ 
if(rover1_y >=0) 
{ 
rover1_y = rover1_y - 10; 
console.log("When W Key is pressed, x = " + rover1_x + " | y = " +rover1_y); 
uploadBackground(); 
uploadrover(); 
} 
}

function down() 
{ 
if(rover_y <=500) 
{ 
rover_y = rover_y + 10; 
console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y); 
uploadBackground(); 
uploadrover(); 
} 
}

function letterS() 
{ 
if(rover1_y <=500) 
{ 
rover1_y = rover1_y + 10; 
console.log("When S key is pressed, x = " + rover1_x + " | y = " +rover1_y); 
uploadBackground(); 
uploadrover(); 
} 
}


function left() 
{ 
if(rover_x >=0) 
{ 
rover_x = rover_x - 10; 
console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y); 
uploadBackground(); 
uploadrover(); 
} 
}
function letterA() 
{ 
if(rover1_x >=0) 
{ 
rover1_x = rover1_x - 10; 
console.log("When A key is pressed, x = " + rover1_x + " | y = " +rover1_y); 
uploadBackground(); 
uploadrover(); 
} 
}

function right() 
{ 
if(rover_x <=700) 
{ 
rover_x = rover_x + 10; 
console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y); 
uploadBackground(); 
uploadrover(); 
} 
}

function letterD() 
{ 
if(rover1_x <=700) 
{ 
rover1_x = rover1_x + 10; 
console.log("When D key is pressed, x = " + rover1_x + " | y = " +rover1_y); 
uploadBackground(); 
uploadrover(); 
} 
}
//----------------------------------------------------
if(rover_x > 700)
{
    console.log ("Car 1 Won!!!");
    document.getElementById("Title").innerHTML="Car 1 Won!!!";
}

if(rover1_x > 700)
{
    console.log ("Car 2 Won!!!");
    document.getElementById("Title").innerHTML="Car 2 Won!!!";
}






