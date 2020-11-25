var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["1cd7b058-3534-46b1-b154-f5d5adea00b7","06ee1cf7-e2a1-43ea-96b2-ee0d46d45feb","0e7d34ff-aec7-42d9-804c-e898a83d8138","c923f898-ce48-4644-9c7c-2bc13a2b13e3","77c7c800-389d-4a99-a4da-58cd7a91ec9c"],"propsByKey":{"1cd7b058-3534-46b1-b154-f5d5adea00b7":{"name":"kid_15_1","sourceUrl":"assets/api/v1/animation-library/gamelab/OE9ExtQr57R9ET8AScQA8odLvG5IAPde/category_characters/kid_15.png","frameSize":{"x":245,"y":380},"frameCount":1,"looping":true,"frameDelay":2,"version":"OE9ExtQr57R9ET8AScQA8odLvG5IAPde","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":245,"y":380},"rootRelativePath":"assets/api/v1/animation-library/gamelab/OE9ExtQr57R9ET8AScQA8odLvG5IAPde/category_characters/kid_15.png"},"06ee1cf7-e2a1-43ea-96b2-ee0d46d45feb":{"name":"crab_1","sourceUrl":"assets/api/v1/animation-library/gamelab/k76J3fnUizuR.cly1ePZrTD5O0KW3BIz/category_animals/crab.png","frameSize":{"x":288,"y":191},"frameCount":1,"looping":true,"frameDelay":2,"version":"k76J3fnUizuR.cly1ePZrTD5O0KW3BIz","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":288,"y":191},"rootRelativePath":"assets/api/v1/animation-library/gamelab/k76J3fnUizuR.cly1ePZrTD5O0KW3BIz/category_animals/crab.png"},"0e7d34ff-aec7-42d9-804c-e898a83d8138":{"name":"bronze_1","sourceUrl":"assets/api/v1/animation-library/gamelab/dZ98jetKnt5ZogX102g5XO3252U0D8oc/category_gameplay/bronze.png","frameSize":{"x":86,"y":86},"frameCount":6,"looping":true,"frameDelay":2,"version":"dZ98jetKnt5ZogX102g5XO3252U0D8oc","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":516,"y":86},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dZ98jetKnt5ZogX102g5XO3252U0D8oc/category_gameplay/bronze.png"},"c923f898-ce48-4644-9c7c-2bc13a2b13e3":{"name":"ore_coal_1","sourceUrl":null,"frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":12,"version":"x3mKUpBjw1CYZ3ueKz4vlaIBZqk_d6HI","categories":["obstacles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/c923f898-ce48-4644-9c7c-2bc13a2b13e3.png"},"77c7c800-389d-4a99-a4da-58cd7a91ec9c":{"name":"farm_land_1","sourceUrl":"assets/api/v1/animation-library/gamelab/8RkOLYC69Uhn.b7A1GaLNOBfPiC_hGvT/category_backgrounds/farm_land.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"8RkOLYC69Uhn.b7A1GaLNOBfPiC_hGvT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8RkOLYC69Uhn.b7A1GaLNOBfPiC_hGvT/category_backgrounds/farm_land.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//var bg= createSprite(200, 200);
var Bg= createSprite(100,100,200,200)
Bg.setAnimation("farm_land_1")
Bg.scale=1.5

var runner = createSprite(100,394,15);
//bg.setAnimation("stage_1");
runner.setAnimation("kid_15_1");
runner.scale=.10;

var wall1= createSprite(25,12,300,10);
wall1.shapeColor="red";

var wall2 = createSprite(397,12,300,10);
wall2.shapeColor="red";


var wall3 = createSprite(12,90,600,10);
wall3.shapeColor="blue";


var wall4 = createSprite(90,305,450,10);
wall4.shapeColor="yellow";

var wall5 = createSprite(350, 175,200,10);
wall5.shapeColor="green";

var wall6 = createSprite(15,175,200,10);
wall6.shapeColor="red";

var wall7 = createSprite(150,250,125,10);
wall7.shapeColor="gold";

var crab =createSprite(40,240,10,10);
crab.setAnimation("crab_1");
crab.scale=0.3;

var coin =createSprite(210,25,10,10);
coin.setAnimation("bronze_1");
coin.scale=0.5;

var obstacle1 = createSprite(134,130,10,10);
obstacle1.setAnimation("ore_coal_1")
obstacle1.scale=0.5;

var obstacle2 = createSprite(46,356,10,10);
obstacle2.setAnimation("ore_coal_1");
obstacle2.scale=0.5;

var score=50



function draw() {
background("white");


if (runner.isTouching(wall1) ||
runner.isTouching(wall2) ||
runner.isTouching(wall3) ||
runner.isTouching(wall4) ||
runner.isTouching(wall5) ||
runner.isTouching(wall6) ||
runner.isTouching(wall7) ||
runner.isTouching(crab) ||
runner.isTouching(obstacle1) ||
runner.isTouching(obstacle2))
{
runner.x=100;
runner.y=380;
score=score-1;
playSound("assets/category_explosion/playful_game_explosive_hit.mp3", false);


}

if (runner.isTouching(coin)) {
background("gold");
runner.velocityX=0;
runner.velocityY=0;
textSize(50);
stroke("blue");
text("YOU WIN", 120,180);
playSound("assets/category_instrumental/chime.mp3", false);

}

if (score<0) {
background("gold");
runner.velocityX=0;
runner.velocityY=0;
textSize(50);
stroke("blue");
text("YOU LOSE", 120,180);
playSound("assets/category_instrumental/harpe_downscale_1.mp3");


}









if (keyDown("up")) {
runner.velocityY=-2;
}
if (keyDown("RIGHT_ARROW")) {
 runner.velocityX=2
}

if (keyDown("LEFT_ARROW")) {
 runner.velocityX=-2
}


runner.velocityY=runner.velocityY+0.8;
createEdgeSprites();
runner.collide(bottomEdge)
runner.bounceOff(rightEdge)
runner.bounceOff(leftEdge)
drawSprites();
  text("Score: "+score,70,37)
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
