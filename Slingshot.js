class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
       // this.sling1 = loadImage('sprites/sling1.png');
        //this.sling2 = loadImage('sprites/sling2.png');
        //this.sling3 = loadImage('sprites/sling3.png');
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
     attach(body){
         this.sling.bodyA = body;
     }
    display(){
      //  image(this.sling1,200,20);
       // image(this.sling2,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke("black");
            
            
                strokeWeight(10);
                line(pointA.x, pointA.y, pointB.x , pointB.y);
               
               // image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
            
           
            
            pop();
        }
    }
    
}