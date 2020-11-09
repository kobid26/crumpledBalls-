class dustbin {

    constructor (x,y){
    this.x=x
    this.y=y
    this.dustbinWidth=200
    this.dustbinHeight=100
    this.wallThickness=20
    this.angle=0

    this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic:true})
    this.leftWallBody=bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
    Matter.body.setAngle(this.leftWallBody,this.angle)

    this.rightWallBody=bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
    Matter.body.setAngle(rightWallBody, -1*this.angle)
    World.add(world, this.bottomBody)
    World.add(world, this.rightWallBody)
    World.add(world, this.leftWallBody)
    }
}