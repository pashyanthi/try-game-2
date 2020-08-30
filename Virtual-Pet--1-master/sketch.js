//Create variables here
var dog,happydDog,database,foodStock,foodS;

function preload(){
    	//load images here
  dogImg1 = loadImage("images/dogImg.png");
  dogImg2 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);

  database = firebase.database();
  foodStock = database.ref('food');

  dog = createSprite(250,280,10,10);
  dog.addImage(dogImg1);
  dog.scale = 0.4;
 
}



function draw() {  
  background("turquoise");
  if(keyWentDown(UP_ARROW)){
    foodS=foodS-1
    writeStock(foodS)
   dog.addImage(dogImg2);
    
  }
  if(keyWentUp(UP_ARROW)){
    dog.addImage(dogImg1);
    
  }  drawSprites();
    //add styles here
    fill("Black");
    textSize(20);
    
    text("Press Up Arrow Key to feed",70,100);
    text("Food remaining : "+foodS,170,200);
  }
  function readStock(data){
    foodS=data.val();
  }
  
  function writeStock(x){
    if(x<=0){
      x=0;
    }else{
      x=x-1;
    } 
    
    database.ref('/').update({
      food:x
    })
    }
  