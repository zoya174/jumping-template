var canvas;
var music;
var block1,block2,block3,block4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(15,580,300,30);
    block1.shapeColor = "yellow";

    block2 = createSprite(250,580,200,30);
    block2.shapeColor = "red";

    block3 = createSprite(450,580,200,30);
    block3.shapeColor = "pink";

    block4 = createSprite(650,580,200,30);
    block4.shapeColor = "blue";

    //create box sprite and give velocity
    box = createSprite(random(20,750),100,40,40);
    box.shapeColor = "white";
    box.velocityX = 4;
    box.velocityY = 7;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);


    //add condition to check if box touching surface and make it box
    if(block1.isTouching(box) && box.bounceOff(block1)){
        box.shapeColor = "yellow";
    }

   if (block2.isTouching(box) && box.bounceOff(block2)){
    box.shapeColor = "red";
   }

    if (block3.isTouching(box) && box.bounceOff(block3)){
    box.shapeColor = "pink";

    }

    if (block4.isTouching(box) && box.bounceOff(block4)){
        box.shapeColor = "blue";
    
        }

    
  
    drawSprites();
}
