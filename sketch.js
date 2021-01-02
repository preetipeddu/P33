var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var score = 0;
var particle;
var turn = 0;

var divisionHeight=300;
var score =0;
var count = 0;

var gameState = "PLAY";
var line;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  text("500",25,650);
  text("500",100,650);
  text("500",180,650);
  text("500",260,650);
  text("100",340,650);
  text("100",420,650);
  text("100",500,650);
  text("200",580,650);
  text("200",660,650);
  text("200",740,650);
  fill("purple");
  
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   text("Score: "+ score, 700,50);
   if(particle!=null){
     particle.display();
     if(particle.body.position.y>760){
       if(particle.body.position.x<300){
         score = score+500;
         particle = null;
         if(count>=5){
           gameState = "END";
         }
       }
     }
   }
   if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<380 && particle.body.position.x>301){
        score = score+500;
        particle = null;
        if(count>=5){
          gameState = "END";
        }
      }
    }
  }

  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<460 && particle.body.position.x>381){
        score = score+500;
        particle = null;
        if(count>=5){
          gameState = "END";
        }
      }
    }
  }

  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<540 && particle.body.position.x>461){
        score = score+500;
        particle = null;
        if(count>=5){
          gameState = "END";
        }
      }
    }
  }

  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<620 && particle.body.position.x>541){
        score = score+100;
        particle = null;
        if(count>=5){
          gameState = "END";
        }
      }
    }
  }

  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<700 && particle.body.position.x>621){
        score = score+100;
        particle = null;
        if(count>=5){
          gameState = "END";
        }
      }
    }
  }

  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<780 && particle.body.position.x>701){
        score = score+100;
        particle = null;
        if(count>=5){
          gameState = "END";
        }
      }
    }
  }

  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<860 && particle.body.position.x>781){
        score = score+200;
        particle = null;
        if(count>=5){
          gameState = "END";
        }
      }
    }
  }

}


function mousePressed(){
     particle = new Particle(mouseX, 10,10,10);
  
}