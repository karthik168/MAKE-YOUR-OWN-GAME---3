var mask1, mask1Img;
var mask2, mask2Img;

var virus1, virus1Img;
var virus2, virus2Img;
var virus3, virus3Img;
var virus4, virus4Img;
var virus1Grp, virus2Grp, virus3Grp, virus4Grp;

var safe, safeImg;
var girl, girlImg;

var blue1, blue1Img;
var blue2, blue2Img;

var paddle1, paddle2, paddle3;
var score    = 0;

function preload () {

    mask1Img  = loadImage("sprites/mask1.png");
    mask2Img  = loadImage("sprites/mask2.png");

    virus1Img = loadImage("sprites/virus1.png");
    virus2Img = loadImage("sprites/virus2.png");
    virus3Img = loadImage("sprites/virus3.png");
    virus4Img = loadImage("sprites/virus4.png");

    safeImg   = loadImage("sprites/safe.png");
    girlImg   = loadImage("sprites/girl.png");

    blue1Img  = loadImage("sprites/blue1.png");
    blue2Img  = loadImage("sprites/blue2.png");

}

function setup () {

    createCanvas(windowWidth, windowHeight);

    mask1 = createSprite(width/2, height-50);
    mask1.addImage(mask1Img);
    mask1.scale = 0.6;

    mask2 = createSprite(width/2+300, height-50);
    mask2.addImage(mask2Img);
    mask2.velocityX = 6;
    mask2.scale     = 0.5;
    mask2.setCollider("rectangle", 0, 100, mask2.width-400, mask2.height);
    mask2.debug = false;
    mask2.visible = false;

    paddle1 = createSprite(width/2, height, 1500, 10);
    paddle1.visible = false;

    paddle2 = createSprite(width/2-650, height-50, 10, 100);
    paddle2.visible = false;

    paddle3 = createSprite(width/2+650, height-50, 10, 100);
    paddle3.visible = false;

    safe = createSprite(width/2, height/2);
    safe.addImage(safeImg);
    safe.scale   = 0.7;
    safe.visible = false;

    girl = createSprite(width/2+50, height/2-200);
    girl.addImage(girlImg);
    girl.scale   = 0.7;
    girl.visible = false;

    blue1 = createSprite(width/2+50, height/20);
    blue1.addImage(blue1Img);

    blue2= createSprite(width/2+50, height/6.5);
    blue2.addImage(blue2Img);

    virus1Grp = createGroup();
    virus2Grp = createGroup();
    virus3Grp = createGroup();
    virus4Grp = createGroup();

}

function draw () {

    background("purple");

    maskOne();

    virus1Fall();
    virus2Fall();
    virus3Fall();
    virus4Fall();

    mask2.bounceOff(paddle2);
    mask2.bounceOff(paddle3);

    if (mask1.isTouching(virus1Grp)) {
        virus1Grp.destroyEach();
        score = score + 2;  
    }

    if (mask1.isTouching(virus2Grp)) {
        virus2Grp.destroyEach();
        score = score + 2;  
    }

    if (mask1.isTouching(virus3Grp)) {
        virus3Grp.destroyEach();
        score = score + 2;  
    }

    if (mask1.isTouching(virus4Grp)) {
        virus4Grp.destroyEach();
        score = score + 2;  
    }

    if(virus1Grp.isTouching(paddle1)) {
       score = score - 1; 
       virus1Grp.destroyEach();
    }

    if(virus2Grp.isTouching(paddle1)) {
        score = score - 1; 
        virus2Grp.destroyEach();
     }

     if(virus3Grp.isTouching(paddle1)) {
        score = score - 1; 
        virus3Grp.destroyEach();
     }

     if(virus4Grp.isTouching(paddle1)) {
        score = score - 1; 
        virus4Grp.destroyEach();
     }

     if(score > 20) {  
        mask2.visible = true;
        safe.visible  = true;
        girl.visible  = true;
        blue1.visible = false;
        blue2.visible = false;

        virus1Grp.destroyEach();
        virus2Grp.destroyEach();
        virus3Grp.destroyEach();
        virus4Grp.destroyEach();
     }   

    drawSprites();

    fill("red");
    textSize(35);
    textFont("Comic Sans Ms");
    text("SCORE : " + score, width/27, height/10.5);

}

function maskOne () {
    if(keyDown("LEFT_ARROW")){
        mask1.x = mask1.x - 12;
    }
    
    if(keyDown("RIGHT_ARROW")){
        mask1.x = mask1.x + 12;
    } 
}

function virus1Fall() {
    if(World.frameCount % 100 === 0) {
        virus1       = createSprite(width/2, height/10.5);
        virus1.scale = 0.6;
        virus1.addImage(virus1Img);
        virus1.x         = Math.round(random(10,1200));  
        virus1.velocityY = 5; 
        virus1Grp.add(virus1);    
    }
}

function virus2Fall() {
    if(World.frameCount % 150 === 0) {
        virus2       = createSprite(width/2, height/10.5);
        virus2.scale = 0.6;
        virus2.addImage(virus2Img);
        virus2.x         = Math.round(random(500,1200));  
        virus2.velocityY = 5;  
        virus2Grp.add(virus2);   
    }
}

function virus3Fall() {
    if(World.frameCount % 200 === 0) {
        virus3       = createSprite(width/2, height/10.5);
        virus3.scale = 0.6;
        virus3.addImage(virus3Img);  
        virus3.x         = Math.round(random(200,700));  
        virus3.velocityY = 5;  
        virus3Grp.add(virus3);   
    }
}

function virus4Fall() {
    if(World.frameCount % 250 === 0) {
        virus4       = createSprite(width/2, height/10.5);
        virus4.scale = 0.6;
        virus4.addImage(virus4Img);  
        virus4.x         = Math.round(random(50,900));  
        virus4.velocityY = 5;
        virus4Grp.add(virus4);     
    }
}