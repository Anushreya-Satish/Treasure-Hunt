var bg, bg2, form, system, code, security;
var score = 0;
var music;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  //load image for the treasure background
  bg2 = loadImage("treasure.jpg");
  music = loadSound("Music.mp3");
}

function setup() {
  createCanvas(1000, 500);
  security = new Security();
  system = new System();
  music.play();
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  // add code for changing the background to the treasure background
  if (score === 3) {
    clear();
    background(bg2);
    textFont("ALGERIAN")
    stroke("red");
    fill("black");
    textSize(40);
    text("!!TREASURE UNLOCKED!!", 250, 200);
  }

  drawSprites();
}