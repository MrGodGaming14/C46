class Rope{
    constructor(bodyA, point){
        var options ={
            bodyA: bodyA,
            pointB: point,
            stiffness: 0.04,
            length: 100
        }

    this.rope = Matter.Constraint.create(options);
    World.add(world, this.rope);

    var bodyA = bodyA;
    var point = point;
    }
    display(){
        line(bodyA.position.x, bodyA.position.y, point.x, point.y, )
    }
}