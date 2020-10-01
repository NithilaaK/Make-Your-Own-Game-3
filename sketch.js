var gameState = 0; 
var pet, intro, petHappy;

function setup() {
  createCanvas(350, 500);

  pet = new Pet("images/petHappy.png");
  
  intro = new Intro();

  features = new Features();

  kitchenBg = loadImage("images/kitchen.png");

  bed = loadImage("images/bed.png");

  trampolineImg = loadImage("images/trampoline.png");
}

function draw() {
  if (gameState === 0) {
    background(253, 246, 158); 
  
    intro.display();

    features.hide();
  } else if (gameState === 1) {
      
    intro.hide();

    fill("blue");
    rect(0, 380, 400, 125);

    defaultText();

    pet.display();

    features.display(); 
  } else if (gameState === 2) {
    background("#90D8C9");

    fill("blue");
    rect(0, 380, 400, 125);

    image(trampolineImg, 37, 300, 280, 100);

    defaultText();
  } else if (gameState === 3) {
    background("#F65959");

    defaultText();

    image(kitchenBg, 0, 70, 350, 331);  

    fill("#DDF0EE");
    rect(0, 380, 400, 125);
  } else if (gameState === 4) {
    background("#DBC5F7");

    fill("#D4EBF2");
    rect(0, 380, 400, 125);

    image(bed, 26, 275, 300, 150);

    defaultText();
  }
}

function defaultText() {
    fill("blue")
    textSize(30);
    text("Take care of " + pet.petName + "!", 26, 36);
}