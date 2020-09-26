//Create variables here
var dog, happyDog, database, foodS, foodStock;
function preload()
{
  //load images here
  dog = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  var Dog = createSprite (250,250)
  Dog.addImage(dog)
  foodStock = database.ref('food'),
  foodStock.on("value", readStock)
}

function readStock(data){
  foodS = data.val();
}

function writeSAtock(x){
  if(x<=0){
    x = 0
  }else{
    x = x-1
  }
  database.ref('/').update({
    food:x
  })
}
function draw() { 
  background(46,139,87) 

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    Dog.addImage(dogHappy);
  }
  drawSprites();
  //add styles here
  textSize(22);
  fill("white")
  //stroke
  text("Press up arrow key to feed the dog",125,125 )
}



