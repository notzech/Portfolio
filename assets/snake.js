var snake = [];
var direction = 0;//0-up, 1-right, 2-down, 3-left;
var time = 0;
var food;

function setup(){
  createCanvas(windowWidth, windowHeight);
  snake.push(new bit(0,0,'red'));
  food = new bit(round(random()*(width/30)),round(random()*(height/30)),'pink');
}

function draw(){
  if(keyIsDown(87)){
    direction = 0;
  }
  if(keyIsDown(68)){
    direction = 1;
  }
  if(keyIsDown(83)){
    direction = 2;
  }
  if(keyIsDown(65)){
    direction = 3;
  }
  if(time % 4 == 0){
    background(51);
    updateSnake();
    renderSnake();
    food.draw();
  }
  time++;
}

function updateSnake(){
  for(var i = 1; i < snake.length; i++){
    snake[i].x = snake[i-1].x;
    snake[i].y = snake[i-1].y;
  }
  switch (direction) {
    case 0: snake[0].y-=1; break;
    case 1: snake[0].x+=1; break;
    case 2: snake[0].y+=1; break;
    case 3: snake[0].x-=1; break;
    default:break;
  }
  if(snake[0].x*30 < 0){
    snake[0].x = (windowWidth / 30) - (windowWidth % 30)/30;
  }
  if(snake[0].x*30 > windowWidth){
    snake[0].x = 0;
  }
  if(snake[0].y*30 < 0){
    snake[0].y = (windowHeight / 30) - (windowHeight % 30)/30;
  }
  if(snake[0].y*30 > windowHeight){
    snake[0].y = 0;
  }
  if(snake[0].x == food.x && snake[0].y == food.y){
    snake.push(new bit(snake[snake.length-1].x, snake[snake.length-1].y, 'red'));
  }

}

function renderSnake(){
  for(var i = 0; i < snake.length; i++){
    snake[i].draw();
  }
}

function bit(x,y,color){
  this.x = x;
  this.y = y;
  this.draw = function(){
    fill(color);
    rect(this.x*30, this.y*30, 30,30);
  }
}
