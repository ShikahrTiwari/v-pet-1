//Create variables here
var dog,dogImg,dogImg1, dataBase, food, fodStoks;
function preload()
{
	//load images here
  dogImg=loadImage("images/dogImg.png");
  dogImg1=loadImage("image/dogImg1.png");
}

function setup() {
	createCanvas(800, 700);
  database=firebase.database();
  foodStock=database.ref("Food");
  foodStock.on("value",readStock);
  foodStock.set(20);

  dog=createSprite(250,350,10,60);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  
}


function draw() {  
  background("green");
  if(foods!==undifined){
    textSize(25);
    fill(255);
    text("Note:Press UP ARROW to feed Dog Milk",50,50);
    text("Food Remaning:"+food,150,150);
  }

  if(keyWentDown(UP_ARROW)){
    writeStock(food);
    dog.addImage(dogImg1);
  }

  if(keyWentUp(UP_ARROW)){
    dog.addImage(dogImg);
  }

  if(food===0){
    food=20;
  }


  drawSprites();
  //add styles here

}
function WriteStock(x){
  if(x<=0){
    x = 0;
  }
  else{
    x = x-1;
  }
  database.ref("/").update({
    Food:x
  })
}

function readStock(data){
  food = data.val();
}




