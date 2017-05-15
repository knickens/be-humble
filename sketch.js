var myMusic;
var r,g,b;
var x = 200;
var y = 200;
var speedx = 12;
var speedy = 12;



function preload(){
    myMusic = loadSound('js/sauce.mp3');
}

function setup(){
    createCanvas(screen.width,screen.height);
    background(255);
    myMusic.setVolume(0.1);
    r = random(0,255);
    g = random(0);
    b = random(0);
}

function draw(){
    stroke(0);
    fill(r,g,b);
    ellipse(x,y,100,100);
    stroke(0);
    ellipse(x,y,90,90);
    stroke(0);
    ellipse(x,y,80,80);
    stroke(0);
    ellipse(x,y,70,70);
    stroke(0);
    ellipse(x,y,60,60);
    stroke(0);
    move();

}

function mouseClicked(){
  if(myMusic.isPlaying()){
   myMusic.pause();
   
   
  }
  else{
   myMusic.play();
  }
}
    
//function mouseReleased(){
 //   myMusic.pause();
//}


function move(){
   y = y + speedy;
    x = x + speedx;
  if(y > height || y < 0){
        y = 50 - random(height);
         r = random(0,255);
    g = random(0,255);
    b = random(0,255);
  }
 if(x > width || x<0){
   x = 50 - random(width);  
    r = random(0,255);
    g = random(0,50);
    b = random(0,100);
   
 } 
}

