var groundsprites; 
var GROUND_SPRITES_WIDTH = 50; 
var GROUND_SPRITES_HEIGHT = 50; 
var numGroundSprites;

function setup() { 
    createCanvas(400, 300); 
    background(150, 200, 250); 
    groundSprites = new Group(); 
    
    numGroundSprites = width/GROUND_SPRITE_WIDTH; 
    for (var n = 0; n < numGroundSprites; n++) { 
        var groundSprite = createSprite(n*50, height-25, GROUND_SPRITE_WIDTH, GROUND_SPRITE_HEIGHT); 
        groundSprites.add(groundSprite); 
    }
} 

function draw() { 
    drawSprites();
}