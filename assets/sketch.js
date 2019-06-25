var blocks = [];
var img;
var cam;

function preload() {
  img = loadImage('images/dirt.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  cam = createCamera();
  for(var i = 0; i < 16; i++){
    blocks[i] = new Array(16);
  }
  for(var i = 0; i < 16; i++){
    for(var j = 0; j < 16; j++){
      blocks[i][j] = new Box(i*100,j*100);
    }
  }
}

function draw() {
  background(51);
  if(mouseIsPressed){
    cam.pan((pmouseX-mouseX)*0.01);
    cam.tilt(pmouseY-mouseY);
  }
  texture(img);
  translate(-8*100,0,-8*100);
  for(var i = 0; i < 16; i++){
    for(var j = 0; j < 16; j++){
      push();
      translate(blocks[i][j].x,0,blocks[i][j].z-100);
      box(100);
      pop();
    }
  }
}

function Box(x,z){
  this.x = x;
  this.z = z;
}
