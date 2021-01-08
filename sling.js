class sling 
{
    constructor(bodyA,pointB)
    {
      //this.offsetX=offsetX
      //this.offsetY=offsetY
        
      var options={
        bodyA:bodyA,
       pointB:pointB
      // pointB:{x:this.offsetX,y:this}

    }
  this.pointB=pointB

    this.chain=Constraint.create(options)

    World.add(world,this.chain)

   

    }
    display(){

        var pA=this.chain.bodyA.position;
        var pB=this.pointB;


    line(pA.x,pA.y,pB.x,pB.y);

    }
}